<template>
  <Header heading="Contacts"/>
  <ContactsList/>
  <Popup/>
</template>

<script>
import ContactsList from '../components/ContactsList.vue';
import Header from '../components/Header.vue';
import Popup from '../components/Popup.vue';

export default {
  name: 'Home',
  components: { Header, ContactsList, Popup },
};
</script>
