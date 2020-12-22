<template>
  <button class="button">
    <span v-if="state.icon" class="material-icons button__icon">{{ state.icon }}</span>
    <span class="button__value">{{ state.value }}</span>
  </button>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      required: true,
    },
    icon: String,
  },
  setup(props) {
    const state = {
      value: props.value,
      icon: props.icon,
    };
    return {
      state,
    };
  },
};
</script>

<style lang="scss" scoped>
  .button {
    display: flex;
    align-items: center;
    padding: .5rem 1rem;
    background-color: lighten(royalblue, 15%);
    border-radius: 20px;
    font-size: 1.5rem;
    cursor: pointer;
    color: white;
    transition: all .3s;

    &__value {
      padding-top: .3rem;
    }

    &__icon {
      margin-left: -.5rem;
      font-size: 2rem;
    }

    &:hover {
      background-color: white;
      color: black;
    }
  }
</style>
