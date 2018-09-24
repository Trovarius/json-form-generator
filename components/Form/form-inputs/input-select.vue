<template>
  <input 
    v-model="data"
    type="text" >
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style>
</style>
