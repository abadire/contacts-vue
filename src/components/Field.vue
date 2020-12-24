<template>
    <div class="field">
      <div class="field__name">{{name}}</div>
      <span v-if="value" class="field__delim">:</span>
      <div v-if="value" class="field__value">Value</div>
      <div class="field__buttons">
        <Button class="field__icons" v-if="value"  icon="delete_forever" type="icon-red"/>
        <Button class="field__icons" icon="edit" type="icon-green"/>
      </div>
  </div>
</template>

<script>
import Button from './Button.vue';

export default {
  components: { Button },
  name: 'Field',
  props: {
    name: String,
    value: String,
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

    &__buttons {
      min-width: 15%;
      display: flex;
      flex-direction: row-reverse;
      justify-content: space-between;
    }
  }
</style>
