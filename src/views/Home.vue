<template>
  <Header heading="Contacts"/>
  <div class="pad"></div>
  <ContactsList/>
  <Overlay message="hey"/>
</template>

<script>
import ContactsList from '../components/ContactsList.vue';
import Header from '../components/Header.vue';
import Overlay from '../components/OverlayPopup.vue';

export default {
  name: 'Home',
  components: { Header, ContactsList, Overlay },
};
</script>

<style lang="scss" scoped>
  .pad {
    height: $header-height + 1rem;
    width: 100%;
  }
</style>
