<template>
  <p class="popup__text">{{ state.message }}</p>
  <form class="popup__form" v-if="state.isEditable" @submit.prevent="">
    <input type="text" id="popup__input" class="popup__input">
  </form>
  <div class="popup__buttons">
    <Button :value="state.buttons.left" type="confirm" @click="hideOverlay"/>
    <Button :value="state.buttons.right" type="danger" @click="hideOverlay"/>
  </div>
</template>

<script>
import { useStore } from 'vuex';
import { computed, reactive, watch } from 'vue';
import Button from './Button.vue';

export default {
  name: 'PopupContents',
  components: { Button },
  setup() {
    const store = useStore();
    const message = computed(() => store.state.popup.message);
    const isEditable = computed(() => store.state.popup.isEditable);
    const type = computed(() => store.state.popup.type);

    const buttons = {
      left: '',
      right: '',
    };

    const state = reactive({
      message,
      isEditable,
      type,
      buttons,
    });

    watch(() => type.value,
      () => {
        switch (type.value) {
          case 'delete': {
            buttons.left = 'Cancel';
            buttons.right = 'Delete';
            break;
          }
          case 'add': {
            buttons.left = 'Add';
            buttons.right = 'Cancel';
            break;
          }
          case 'edit': {
            buttons.left = 'Save';
            buttons.right = 'Cancel';
            break;
          }
          default: break;
        }
      });

    function hideOverlay() {
      store.dispatch('toggleOverlay');
    }

    return {
      state,
      hideOverlay,
    };
  },
};
</script>

<style lang="scss" scoped>
  .popup {
    &__text {
      font-size: 1.8rem;
      margin-bottom: 2rem;
    }

    &__buttons {
      display: flex;
      justify-content: space-around;
    }

    &__form {
      margin-bottom: 2rem;
    }

    &__input {
      font-size: 2rem;
      padding: 1rem;
    }
  }
</style>
