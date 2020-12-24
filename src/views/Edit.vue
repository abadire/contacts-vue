<template>
  <Header
    heading="Edit"
    :controlElements="[{value: 'Add field', icon: 'add', command: PopupCommands.ADD_FIELD}]"
  />
  <div class="edit__wrapper">
    <Field :unexpandable="true" name="hi"/>
  </div>
  <FieldsList :index="index"/>
  <Overlay/>
</template>

<script>
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
