<template>
    <div class="field">
      <span
        type="text"
        class="field__input"
        ref="inputName"
        :contenteditable="isEditable"
        :class="{'field__input--editable': isEditable}"
        @keydown="saveNameEnter"
      >{{name || field.name}}</span>
      <span v-if="!name" class="field__delim">:</span>
      <div
        v-if="!name"
        class="field__input"
        ref="inputValue"
        :contenteditable="isEditable"
        :class="{'field__input--editable': isEditable}"
      >{{field.value}}</div>
      <div class="field__buttons">
        <Button
          class="field__icons"
          v-if="!name && !isEditable"
          icon="delete_forever"
          type="icon-red"
          @click="emitDeletePrompt"
        />
        <Button
          class="field__icons"
          v-if="!isEditable"
          icon="edit"
          type="icon-green"
          @click="toggleEdit"
        />
        <Button
          class="field__icons"
          v-if="isEditable"
          icon="cancel"
          type="icon-red"
          @click="cancelInput"
        />
        <Button
          class="field__icons"
          v-if="isEditable"
          icon="done"
          type="icon-green"
          @click="saveName"
        />
      </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import Button from './Button.vue';

export default {
  components: { Button },
  name: 'Field',
  props: {
    name: String,
    field: Object,
  },
  emits: ['save-name', 'delete-field'],
  setup(props, { emit }) {
    const isEditable = ref(false);
    const inputName = ref(null);
    const inputValue = ref(null);

    function toggleEdit() {
      isEditable.value = !isEditable.value;
      if (isEditable.value) {
        setTimeout(() => {
          inputName.value.focus();
          const range = new Range();
          range.setStart(inputName.value, 0);
          if (inputName.value.firstChild) {
            range.setEnd(inputName.value, 1);
          }
          document.getSelection().empty();
          document.getSelection().addRange(range);
        }, 200);
      } else {
        document.getSelection().empty();
      }
    }

    function saveName() {
      emit('save-name', inputName.value.textContent);
      toggleEdit();
    }

    function cancelInput() {
      if (props.name) {
        inputName.value.textContent = props.name;
      } else {
        inputName.value.textContent = props.field.name;
        inputValue.value.textContent = props.field.value;
      }
      toggleEdit();
    }

    function saveNameEnter(event) {
      if (inputName.value.textContent === '') {
        event.preventDefault();
        cancelInput();
      } else if (event.code === 'Enter') {
        event.preventDefault();
        saveName();
      }
    }

    function emitDeletePrompt() {
      emit('delete-field');
    }

    return {
      inputName,
      inputValue,
      isEditable,
      toggleEdit,
      saveNameEnter,
      saveName,
      cancelInput,
      emitDeletePrompt,
    };
  },
};
</script>

<style lang="scss" scoped>
  .field {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    max-height: 5rem;
    padding: 1rem 3rem;
    margin-bottom: 1rem;
    background-color: $contact-background;
    border-radius: 5px;

    color: $contact-font;
    font-size: 2rem;
    font-weight: 600;
    text-align: start;

    transition: all .2s ease-out;

    &:hover {
      box-shadow: 0 .5rem 1rem #0003;
    }

    &__input {
      background-color: $contact-background-light;
      padding: .3rem;
      border-radius: 2px;
      border-bottom: 2px solid transparent;
      transition: all .2s;

      &--editable {
        background-color: white;
        border-bottom: 2px solid royalblue;
      }

      &:focus {
        outline: none;
      }
    }

    &__buttons {
      min-width: 15%;
      display: flex;
      flex-direction: row-reverse;
      justify-content: space-between;
    }
  }
</style>
