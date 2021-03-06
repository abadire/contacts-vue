<template>
  <div class="contact" :class="{'contact--hovered': state.isExpanded}">
    <span class="contact__name"> {{name}} </span>
    <div class="contact__buttons" @click="passCurrentContact">
      <Button value="View" type="confirm" :to="{name: `Edit`, params: {index: contact.index}}"/>
      <Button
        value="Delete"
        type="danger"
        @click="showOverlay(); toggleExpand();"
      />
    </div>
  </div>
</template>

<script>
import { reactive, watch } from 'vue';
import { useStore } from 'vuex';
import Button from './Button.vue';
import { PopupCommands } from '../assets/Constants';

export default {
  name: 'Contact',
  components: { Button },
  props: {
    name: String,
    contact: Object,
  },
  setup(props) {
    const state = reactive({
      isExpanded: false,
    });
    const store = useStore();

    function showOverlay() {
      store.dispatch('showOverlay', PopupCommands.DELETE_CONTACT);
    }

    function toggleExpand() {
      state.isExpanded = !state.isExpanded;
    }

    function passCurrentContact() {
      store.dispatch('setCurrentContact', props.contact);
    }

    // We use 'watch' to collapse a contact only after the popup close
    watch(() => store.state.isOverlayVisible,
      () => {
        if (state.isExpanded && !store.state.isOverlayVisible) {
          toggleExpand();
        }
      });

    return {
      showOverlay,
      state,
      toggleExpand,
      passCurrentContact,
    };
  },
};
</script>

<style lang="scss" scoped>
  .contact {
    display: flex;
    flex-direction: column;
    overflow: hidden;

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

    &:hover,
    &--hovered {
      box-shadow: 0 .5rem 1rem #0003;
      max-height: 10rem;
    }

    &__name {
      margin-top: .3rem;
      flex-basis: 100%;
      display: flex;
      height: 4rem;
    }

    &__buttons {
      display: flex;
      justify-content: space-around;
    }
  }
</style>
