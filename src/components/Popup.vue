<template>
  <div class="overlay" :class="{'overlay--hidden': !isOverlayVisible}" @click="hideOverlay">
    <div class="popup">
      <p>Do you really want to close?</p>
      <div class="popup__buttons">
        <Button value="Add" type="confirm" />
        <Button value="Cancel" type="danger" />
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex';
import { computed } from 'vue';
import Button from './Button.vue';

export default {
  name: 'Popup',
  components: { Button },
  setup() {
    const store = useStore();
    const isOverlayVisible = computed(() => store.state.isOverlayVisible);

    async function hideOverlay() {
      await store.dispatch('toggleOverlay');
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
  justify-content: center;
  width: 50%;
  height: 50%;
  background: whitesmoke;
  border-radius: 10px;
  cursor: default;
  &__buttons {
    display: flex;
    justify-content: space-around;
  }
}
</style>
