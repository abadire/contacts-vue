<template>
  <div class="list">
    <Contact
      v-for="(contact, index) of contacts"
      :key="index"
      :name="contact.name"
      :contact="contact"
    />
  </div>
</template>

<script>
import { useStore } from 'vuex';
import { computed } from 'vue';
import Contact from './Contact.vue';

export default {
  name: 'ContactList',
  components: { Contact },
  setup() {
    const store = useStore();
    const contacts = computed(() => store.state.contacts);

    return {
      contacts,
    };
  },
};
</script>

<style lang="scss" scoped>
  .list {
    width: 80%;
    margin: 0 auto;
  }
</style>
