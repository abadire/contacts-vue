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

</style>
