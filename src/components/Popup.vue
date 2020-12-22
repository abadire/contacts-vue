<template>
  <div class="overlay" :class="{'overlay--hidden': !isOverlayVisible}" @click.self="hideOverlay">
    <div class="popup">
      <p class="popup__text">Do you really want to delete the contact?</p>
      <div class="popup__buttons">
        <Button value="Cancel" type="confirm" @click="hideOverlay"/>
        <Button value="Delete" type="danger" @click="hideOverlay"/>
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
