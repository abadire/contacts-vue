<template>
    <div class="field">
      <div class="field__name">Name</div>
      <span class="field__delim">:</span>
      <div class="field__value">Value</div>
      <div class="field__buttons">buttons</div>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
  .field {
    display: flex;

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
  }

</style>
