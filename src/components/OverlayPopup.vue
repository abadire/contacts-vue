<template>
  <div class="overlay" :class="{'overlay--hidden': !isOverlayVisible}" @click.self="hideOverlay">
    <div class="popup">
      <PopupContents/>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex';
import { computed } from 'vue';
import PopupContents from './PopupContents.vue';

export default {
  name: 'Overlay',
  components: { PopupContents },
  setup() {
    const store = useStore();
    const isOverlayVisible = computed(() => store.state.isOverlayVisible);

    function hideOverlay() {
      store.dispatch('toggleOverlay');
    }

    return {
      isOverlayVisible,
      hideOverlay,
    };
  },
};
</script>

<style lang="scss" scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #0003;
  cursor: pointer;

  &--hidden {
    display: none;
  }
}

.popup {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 50%;
  padding: 2rem;
  background: whitesmoke;
  border-radius: 10px;
  cursor: default;

  &__text {
    font-size: 1.8rem;
    margin-bottom: 2rem;
  }

  &__buttons {
    display: flex;
    justify-content: space-around;
  }
}
</style>
