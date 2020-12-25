<template>
  <Header
    heading="Edit"
    :controlElements="[{value: 'Add field', icon: 'add', command: EditCommands.ADD_FIELD}]"
    @add-field="addField"
  />
  <div v-if="contact">
    <div class="edit__wrapper">
      <Field @save-name="editName" :name="contact.name"/>
    </div>
    <FieldsList :list="contact.fields" :contact="contact" @delete-field-prompt="promptDeleteField"/>
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

    function editName(name) {
      store.dispatch('editName', { contact, name });
    }

    function addField() {
      if (!contact.value.fields.some((field) => field.name === 'name' && field.value === 'value')) {
        store.dispatch('addField', contact.value);
      }
    }

    let fiedlToDelete = null;
    function promptDeleteField(field) {
      fiedlToDelete = field;
      store.dispatch('showOverlay', PopupCommands.DELETE_FIELD);
    }

    function deleteField() {
      console.log('a');
      store.dispatch('deleteField', { contact: contact.value, field: fiedlToDelete });
    }

    return {
      EditCommands,
      contact,
      editName,
      addField,
      promptDeleteField,
      deleteField,
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
