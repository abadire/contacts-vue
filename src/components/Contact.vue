<template>
  <div class="contact">
    <span class="contact__name"> {{name}} </span>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  props: {
    name: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
  .contact {
    display: flex;
    align-items: center;

    width: 100%;
    height: 5rem;
    padding: 0 3rem;
    background-color: whitesmoke;
    border-radius: 5px;

    color: black;
    font-size: 2rem;
    text-align: start;

    cursor: pointer;

    transition: all .2s;

    &:hover {
      box-shadow: 0 1rem 1rem #0002;
    }
  }
</style>
