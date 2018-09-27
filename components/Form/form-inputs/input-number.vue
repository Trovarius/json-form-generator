<template>
  <input 
    v-model="data[label]"
    type="number">
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default() {
        return {};
      }
    },
    label: { type: String, default: "" }
  }
};
</script>

<style>
</style>
