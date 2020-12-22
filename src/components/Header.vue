<template>
  <header class="header">
    {{state.heading}}
  </header>
</template>

<script>
export default {
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

  position: absolute;
  top: 1rem;
  left: 0;

  border-radius: 7px;
  background-color: royalblue;
}
</style>
