<template>
  <Header
    heading="Edit"
    :controlElements="[
    {value: 'Undo', icon: 'undo', command: EditCommands.UNDO},
    {value: 'Add field', icon: 'add', command: EditCommands.ADD_FIELD}
    ]"
    @add-field="addField"
    @undo="commitUndo"
  />
  <div v-if="contact">
    <div class="edit__wrapper">
      <Field @edit-field="editField" :name="contact.name"/>
    </div>
    <FieldsList
      :list="contact.fields"
      :contact="contact"
      @delete-field-prompt="promptDeleteField"
      @edit-field="editField"
    />
  </div>
  <p v-else class="edit__text">Nothing to see here</p>
  <Overlay @delete-field="deleteField"/>
</template>

<script>
import { useStore } from 'vuex';
import { computed } from 'vue';
import Header from '../components/Header.vue';
import Overlay from '../components/OverlayPopup.vue';
import { EditCommands, PopupCommands } from '../assets/Constants';
import FieldsList from '../components/FieldsList.vue';
import Field from '../components/Field.vue';

export default {
  name: 'Edit',
  components: {
    Header, Overlay, FieldsList, Field,
  },
  props: {
    index: String,
  },
  setup(props) {
    const store = useStore();
    const contact = computed(() => store.state.contacts.find((el) => el.index === props.index));

    const history = [{
      name: contact.value.name,
      fields: JSON.parse(JSON.stringify(contact.value.fields)),
    }];

    function addHistoryEntry() {
      history.push({
        name: contact.value.name,
        fields: JSON.parse(JSON.stringify(contact.value.fields)),
      });
    }

    function editField(payload) {
      store.dispatch('editField', { contact: contact.value, ...payload });
      addHistoryEntry();
    }

    function addField() {
      if (!contact.value.fields.some((field) => field.name === 'name' && field.value === 'value')) {
        store.dispatch('addField', contact.value);
        addHistoryEntry();
      }
    }

    let fiedlToDelete = null;
    function promptDeleteField(field) {
      fiedlToDelete = field;
      store.dispatch('showOverlay', PopupCommands.DELETE_FIELD);
    }

    function deleteField() {
      if (fiedlToDelete) {
        store.dispatch('deleteField', { contact: contact.value, field: fiedlToDelete });
        fiedlToDelete = null;
        addHistoryEntry();
      }
    }

    function commitUndo() {
      if (history.length > 1) {
        history.pop();
        store.dispatch('undo', { contact: contact.value, record: history[history.length - 1] });
      }
    }

    return {
      EditCommands,
      contact,
      editField,
      addField,
      promptDeleteField,
      deleteField,
      commitUndo,
    };
  },
};
</script>

<style lang="scss" scoped>
  .edit {
    &__wrapper {
      margin: auto;
      width: 80%;
    }

    &__text {
      font-size: 2rem;
    }
  }
</style>
