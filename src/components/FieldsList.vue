<template>
  <div class="list">
    <Field
      v-for="(field, index) of list"
      :key="index"
      :field="field"
      @delete-field-prompt="passDeletePromptEvent"
      @edit-field="passEditFieldEvent"
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
    function passEditFieldEvent(payload) {
      emit('edit-field', payload);
    }
    return {
      passDeletePromptEvent,
      passEditFieldEvent,
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
