<template>
  <header class="header">
    <h1 class="header__logo">{{ heading }}</h1>
    <div class="header__controls">
      <Button
        v-for="(element, idx) of controlElements"
        :key="idx"
        :value="element.value"
        :icon="element.icon"
        @click="controlCallbackList[idx]"
      />
    </div>
  </header>
  <div class="pad"></div>
</template>

<script>
import { useStore } from 'vuex';
import { PopupCommands } from '../assets/Constants';
import Button from './Button.vue';

export default {
  name: 'Header',
  components: { Button },
  props: {
    heading: String,
    controlElements: Array,
  },
  setup(props) {
    const store = useStore();

    const controlCallbackList = [];
    props.controlElements.forEach(
      (element) => controlCallbackList.push(() => {
        if (Object.values(PopupCommands).includes(element.command)) {
          store.dispatch('showOverlay', element.command);
        }
      }),
    );

    return {
      controlCallbackList,
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
