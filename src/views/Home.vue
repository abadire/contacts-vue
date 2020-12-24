<template>
  <Header
    heading="Contacts"
    :controlElements="[{value: 'Add contact', icon: 'add', type: Constants.ADD_CONTACT}]"
  />
  <ContactsList/>
  <Overlay/>
</template>

<script>
import ContactsList from '../components/ContactsList.vue';
import Header from '../components/Header.vue';
import Overlay from '../components/OverlayPopup.vue';
import Constants from '../assets/Constants';

export default {
  name: 'Home',
  components: { Header, ContactsList, Overlay },
  setup() {
    return { Constants };
  },
};
</script>
