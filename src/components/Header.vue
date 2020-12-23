<template>
  <header class="header">
    <h1 class="header__logo">{{ heading }}</h1>
    <Button value="Add" icon="add" @click="showPopup"/>
  </header>
  <div class="pad"></div>
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
    height: $header-height;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 2rem 0 2rem;
    margin-top: -1rem;

    position: absolute;
    top: 0;
    left: 0;

    border-radius: 7px;
    background-color: royalblue;
    color: white;

    @media (max-width: 700px) {
      border-radius: 0;
    }

    &__logo {
      font-size: 3rem;
      user-select: none;
    }
  }

  .pad {
    height: $header-height + 1rem;
    width: 100%;
  }
</style>
