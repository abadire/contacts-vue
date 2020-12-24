<template>
  <div class="list">
    <Field
      v-for="(field, index) of fieldList"
      :key="index"
    />
  </div>
</template>

<script>
import { useStore } from 'vuex';
import { computed } from 'vue';
import Field from './Field.vue';

export default {
  name: 'FieldList',
  components: { Field },
  props: {
    index: String,
  },
  setup(props) {
    const store = useStore();
    const fieldList = computed(
      () => store.state.contacts.find((el) => el.index === props.index).fields,
    );

    return {
      fieldList,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
