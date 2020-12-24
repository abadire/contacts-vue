<template>
  <button @click="navigate" class="button"
          :class="{
            'button--header': type === 'header',
            'button--regular': type === 'confirm',
            'button--danger': type === 'danger',
            'button--icon-green': type === 'icon-green',
            'button--icon-red': type === 'icon-red'
          }"
  >
    <span v-if="icon" class="material-icons button__icon">{{ icon }}</span>
    <span v-if="value" class="button__value">{{ value }}</span>
  </button>
</template>

<script>
import router from '../router';

export default {
  name: 'Button',
  props: {
    value: String,
    icon: String,
    type: {
      type: String,
      default: 'header',
    },
    to: Object,
  },
  setup(props) {
    function navigate() {
      if (props.to) {
        router.push(props.to);
      }
    }
    return {
      navigate,
    };
  },
};
</script>

<style lang="scss" scoped>
  .button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: .5rem 1rem;
    border-radius: 20px;
    font-size: 1.5rem;
    font-weight: 600;
    cursor: pointer;
    transition: all .3s;
    border: 2px solid transparent;

    &:active {
      transform: scale(0.9);
    }

    &--header {
      background-color: lighten(royalblue, 15%);
      color: white;

      &:hover {
        background-color: white;
        color: royalblue;
      }
    }

    &--regular,
    &--danger {
      width: 40%;
      background-color: #DDD;
    }

    &--regular {
      color: royalblue;

      &:hover {
        border: 2px solid royalblue;
      }
    }

    &--danger {
      color: crimson;

      &:hover {
        border: 2px solid crimson;
      }
    }

    &--icon-red,
    &--icon-green {
      padding: .3rem .5rem;

      .button__icon {
        margin-left: 0;
      }
    }

    &--icon-red:hover {
      color: $icon-red;
      border: 2px solid $icon-red;
    }

    &--icon-green:hover {
      color: $icon-green;
      border: 2px solid $icon-green;
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
