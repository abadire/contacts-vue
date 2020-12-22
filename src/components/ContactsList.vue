<template>
  <div class="list">
    <Contact name="John"/>
  </div>
</template>

<script>
import Contact from './Contact.vue';

export default {
  name: 'ContactList',
  components: { Contact },
};
</script>

<style lang="scss" scoped>
  .list {
    background-color: blanchedalmond;
    width: 80%;
    padding-top: $header-top + $header-height + 1rem;
    margin: 0 auto;
  }
</style>
