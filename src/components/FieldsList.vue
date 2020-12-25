<template>
  <div class="list">
    <Field
      v-for="(field, index) of list"
      :key="index"
      :field="field"
      @delete-field-prompt="passDeletePromptEvent"
    />
  </div>
</template>

<script>
import Field from './Field.vue';

export default {
  name: 'FieldList',
  components: { Field },
  props: {
    list: Array,
  },
  setup(props, { emit }) {
    function passDeletePromptEvent(field) {
      emit('delete-field-prompt', field);
    }
    return {
      passDeletePromptEvent,
    };
  },
};
</script>

<style lang="scss" scoped>
  .list {
    width: 80%;
    margin: auto;
  }
</style>
