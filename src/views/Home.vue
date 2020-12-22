<template>
  <Header heading="Contacts"/>
  <ContactsList />
</template>

<script>
import ContactsList from '../components/ContactsList.vue';
import Header from '../components/Header.vue';

export default {
  name: 'Home',
  components: { Header, ContactsList },
};
</script>
