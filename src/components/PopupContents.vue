<template>
  <p class="popup__text">{{ state.message }}</p>
  <form class="popup__form" v-if="state.isEditable" @submit.prevent="hideOverlay(); addContact();">
    <input type="text" id="popup__input" class="popup__input" ref="input" v-model="state.name">
  </form>
  <div class="popup__buttons">
    <Button
      :value="state.buttons.left"
      type="confirm"
      @click="hideOverlay(); addContact();"
    />
    <Button
      :value="state.buttons.right"
      type="danger"
      @click="hideOverlay(); deleteContact(); emitDeleteField();"
    />
  </div>
</template>

<script>
import { useStore } from 'vuex';
import {
  computed, reactive, watch, ref,
} from 'vue';
import Button from './Button.vue';
import { PopupCommands } from '../assets/Constants';

function setupButtonsValues(type) {
  const buttons = {
    left: '',
    right: '',
  };
  switch (type) {
    case PopupCommands.DELETE_CONTACT: {
      buttons.left = 'Cancel';
      buttons.right = 'Delete';
      break;
    }
    case PopupCommands.ADD_CONTACT: {
      buttons.left = 'Add';
      buttons.right = 'Cancel';
      break;
    }
    case PopupCommands.DELETE_FIELD: {
      buttons.left = 'Cancel';
      buttons.right = 'Delete';
      break;
    }
    default: break;
  }
  return buttons;
}

export default {
  name: 'PopupContents',
  components: { Button },
  emits: ['delete-field'],
  setup(props, { emit }) {
    const store = useStore();
    const message = computed(() => store.state.popup.message);
    const isEditable = computed(() => store.state.popup.isEditable);
    const type = computed(() => store.state.popup.type);
    const isOverlayVisible = computed(() => store.state.isOverlayVisible);
    const input = ref(null);

    const state = reactive({
      message,
      isEditable,
      type,
      buttons: {
        left: '',
        right: '',
      },
      name: '',
    });

    state.buttons = setupButtonsValues(type.value);

    watch(() => type.value,
      () => { state.buttons = setupButtonsValues(type.value); });

    watch(() => isOverlayVisible.value,
      () => {
        if (isOverlayVisible.value && isEditable.value) {
          setTimeout(() => input.value.focus());
        }
      });

    function hideOverlay() {
      store.dispatch('toggleOverlay');
    }

    function addContact() {
      if (type.value !== PopupCommands.ADD_CONTACT || state.name.trim() === '') return;
      store.dispatch('addContact', state.name.trim());
      state.name = '';
    }

    function deleteContact() {
      if (type.value !== PopupCommands.DELETE_CONTACT) return;
      store.dispatch('deleteContact', store.state.currentContact);
    }

    function emitDeleteField() {
      emit('delete-field');
    }

    return {
      state,
      input,
      hideOverlay,
      addContact,
      deleteContact,
      emitDeleteField,
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
      width: 80%;
      max-width: 50rem;
      font-size: 2rem;
      padding: 1rem;
      border-radius: 2px;
    }
  }
</style>
