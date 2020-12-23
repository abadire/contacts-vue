<template>
  <Header heading="Contacts"/>
  <ContactsList/>
  <Overlay/>
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
