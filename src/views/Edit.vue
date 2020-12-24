<template>
  <Header
    heading="Edit"
    :controlElements="[{value: 'Add field', icon: 'add', type: Constants.ADD_FIELD}]"
  />
  <Overlay/>
</template>

<script>
import Header from '../components/Header.vue';
import Overlay from '../components/OverlayPopup.vue';
import Constants from '../assets/Constants';

export default {
  name: 'Edit',
  components: { Header, Overlay },
  setup() {
    return { Constants };
  },
};
</script>

<style lang="scss" scoped>

</style>
