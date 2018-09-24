<template>
  <input 
    v-model="data"
    type="number">
</template>

<script>
export default {
  props: { data: { type: Number, default: 0 } }
};
</script>

<style>
</style>
