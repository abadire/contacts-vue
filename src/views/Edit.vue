<template>
  <Header
    heading="Edit"
    :controlElements="[{value: 'Add field', icon: 'add', command: PopupCommands.ADD_FIELD}]"
  />
  <div class="edit__wrapper">
    <Contact :unexpandable="true" name="hi"/>
  </div>
  <FieldsList :index="index"/>
  <Overlay/>
</template>

<script>
import Header from '../components/Header.vue';
import Overlay from '../components/OverlayPopup.vue';
import { PopupCommands } from '../assets/Constants';
import FieldsList from '../components/FieldsList.vue';
import Contact from '../components/Contact.vue';

export default {
  name: 'Edit',
  components: {
    Header, Overlay, FieldsList, Contact,
  },
  props: {
    index: String,
  },
  setup() {
    return { PopupCommands };
  },
};
</script>

<style lang="scss" scoped>
  .edit__wrapper {
    margin: auto;
    width: 80%;
  }
</style>
