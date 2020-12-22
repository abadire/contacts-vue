<template>
  <div class="contact">
    <span class="contact__name"> {{name}} </span>
    <div class="contact__buttons">
      <Button value="View" type="confirm" />
      <Button value="Delete" type="danger"/>
    </div>
  </div>
</template>

<script>
import Button from './Button.vue';

export default {
  name: 'Contact',
  components: { Button },
  props: {
    name: String,
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
    background-color: whitesmoke;
    border-radius: 5px;

    color: #555;
    font-size: 2rem;
    font-weight: 600;
    text-align: start;

    transition: all .2s ease-out;

    &:hover {
      box-shadow: 0 1rem 1rem #0002;
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
