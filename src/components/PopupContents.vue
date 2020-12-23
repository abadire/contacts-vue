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
    <Button :value="state.buttons.right" type="danger" @click="hideOverlay(); deleteContact();"/>
  </div>
</template>

<script>
import { useStore } from 'vuex';
import {
  computed, reactive, watch, ref,
} from 'vue';
import Button from './Button.vue';

function setupButtonsValues(type) {
  const buttons = {
    left: '',
    right: '',
  };
  switch (type) {
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
  return buttons;
}

export default {
  name: 'PopupContents',
  components: { Button },
  setup() {
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

    const idx = computed(() => store.state.index);
    function addContact() {
      if (type.value !== 'add' || state.name.trim() === '') return;
      const contact = {
        name: state.name.trim(),
        index: idx.value,
      };
      store.dispatch('addContact', contact);
      state.name = '';
    }

    function deleteContact() {
      if (type.value !== 'delete') return;
      store.dispatch('deleteContact', store.state.currentContact);
    }

    return {
      state,
      input,
      hideOverlay,
      addContact,
      deleteContact,
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
      border-radius: 2px;
    }
  }
</style>
