<template>
  <input 
    v-model="data"
    type="date" >
</template>

<script>
export default {
  props: { data: { type: String, default: "" } }
};
</script>

<style>
</style>
