<template>
  <button class="button"
          :class="{
            'button--header': type === 'header',
            'button--confirm': type !== 'header',
            'button--danger': type === 'danger'
          }"
  >
    <span v-if="icon" class="material-icons button__icon">{{ icon }}</span>
    <span class="button__value">{{ value }}</span>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    value: {
      type: String,
      required: true,
    },
    icon: String,
    type: {
      type: String,
      default: 'header',
    },
  },
};
</script>

<style lang="scss" scoped>
  .button {
    display: flex;
    align-items: center;
    padding: .5rem 1rem;
    border-radius: 20px;
    font-size: 1.5rem;
    cursor: pointer;
    transition: all .3s;

    &--header {
      background-color: lighten(royalblue, 15%);
      color: white;

      &:hover {
        background-color: white;
        color: royalblue;
      }
    }

    &__value {
      padding-top: .3rem;
    }

    &__icon {
      margin-left: -.5rem;
      font-size: 2rem;
    }
  }
</style>
