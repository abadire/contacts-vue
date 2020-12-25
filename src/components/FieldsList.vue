<template>
  <div class="list">
    <Field
      v-for="(field, index) of list"
      :key="index"
      :contact="contact"
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
    contact: Object,
  },
};
</script>

<style lang="scss" scoped>
</style>
