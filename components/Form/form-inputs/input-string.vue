<template>
  <input 
    v-model="data"
    type="text" >
</template>

<script>
export default {
  props: { data: { type: String, default: "" } }
};
</script>

<style>
</style>
