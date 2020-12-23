<template>
  <header class="header">
    <h1 class="header__logo">{{ heading }}</h1>
    <Button value="Add" icon="add" @click="showPopup"/>
  </header>
</template>

<script>
import { useStore } from 'vuex';
import Button from './Button.vue';

export default {
  name: 'Header',
  components: { Button },
  props: {
    heading: String,
  },
  setup() {
    const store = useStore();

    function showPopup() {
      store.dispatch('addContactOverlay');
    }

    return {
      showPopup,
    };
  },
};
</script>

<style lang="scss" scoped>
.header {
  height: 5rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;

  position: absolute;
  top: 1rem;
  left: 0;

  border-radius: 7px;
  background-color: royalblue;
  color: white;

  &__logo {
    font-size: 3rem;
    user-select: none;
  }
}
</style>
