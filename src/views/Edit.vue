<template>
  <Header
    heading="Edit"
    :controlElements="[{value: 'Add field', icon: 'add', command: PopupCommands.ADD_FIELD}]"
  />
  <Overlay/>
</template>

<script>
import Header from '../components/Header.vue';
import Overlay from '../components/OverlayPopup.vue';
import { PopupCommands } from '../assets/Constants';

export default {
  name: 'Edit',
  components: { Header, Overlay },
  setup() {
    return { PopupCommands };
  },
};
</script>

<style lang="scss" scoped>

</style>
