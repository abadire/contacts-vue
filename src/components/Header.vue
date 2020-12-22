<template>
  <header class="header">
    <h1 class="header__logo">{{ state.heading }}</h1>
    <Button value="Add" icon="add"/>
  </header>
</template>

<script>
import Button from './Button.vue';

export default {
  name: 'Header',
  components: { Button },
  props: {
    heading: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const state = {
      heading: props.heading,
    };

    return {
      state,
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
