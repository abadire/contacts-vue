<template>
  <Header
    heading="Edit"
    :controlElements="[{value: 'Add field', icon: 'add', command: PopupCommands.ADD_FIELD}]"
  />
  <div v-if="contact">
    <div class="edit__wrapper">
      <Field @saveName="editName" :name="contact.name"/>
    </div>
    <FieldsList :list="contact.fields" :contact="contact"/>
  </div>
  <p v-else class="edit__text">Nothing to see here</p>
  <Overlay/>
</template>

<script>
import { useStore } from 'vuex';
import { computed } from 'vue';
import Header from '../components/Header.vue';
import Overlay from '../components/OverlayPopup.vue';
import { PopupCommands } from '../assets/Constants';
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

    return { PopupCommands, contact, editName };
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
