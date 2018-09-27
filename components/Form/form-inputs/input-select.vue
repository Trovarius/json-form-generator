<template>
  <div>
    <select>
      <option 
        v-for="(value, index) in data[label]"
        :key="index">
        {{ value }}
      </option>
    </select>
  </div>
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
