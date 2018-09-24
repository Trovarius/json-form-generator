<template>
  <div class="form-generation">
    <div 
      v-for="(value, key) in data" 
      :key="key">
      <label :for="key">{{ key }}</label>
      <component 
        :is="getInputType(value)" 
        :data="value"/>
    </div>
  </div>
</template>

<script>
import inputString from "./form-inputs/input-string";
import inputDate from "./form-inputs/input-date";
import inputNumber from "./form-inputs/input-number";
import inputSelect from "./form-inputs/input-select";

export default {
  name: "FormGenerator",
  components: {
    inputString,
    inputDate,
    inputNumber,
    inputSelect
  },
  props: {
    data: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    isValidDate(value) {
      var dateWrapper = new Date(value);
      return !isNaN(dateWrapper.getDate());
    },
    getInputType(value) {
      if (typeof value === "number") return "input-number";

      if (Array.isArray(value)) return "input-select";

      if (this.isValidDate(value)) return "input-date";

      if (typeof value === "object") return "form-generator";

      return "input-string";
    }
  }
};
</script>

<style>
.form-generation {
  margin: 3%;
}
</style>
