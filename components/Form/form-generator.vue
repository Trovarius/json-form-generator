<template>
  <fieldset>
    <legend>
      <button @click="formEvents().showAddForm()">+ new</button>
    </legend>
    <div v-if="showAddForm">
      <select 
        v-model="addFields.type">
        <option value="string">String</option>
        <option value="number">Number</option>
        <option value="date">Date</option>
        <option value="array">Array</option>
        <option value="object">Object</option>
      </select>
      <input 
        v-model="addFields.label" 
        placeholder="label" >  
      <input 
        v-model="addFields.value"  
        placeholder="value" >  
      <button @click="formEvents().addField()">+</button>
    </div>
  
    <div class="form-generation">
      <div  
        v-for="(value, key) in getData" 
        :key="key">
        <label :for="key">{{ key }}</label> 
        <component 
          :is="getInputType(getData[key])" 
          :data="getData"
          :label="key"/>
      </div>
    </div>
  </fieldset>
</template>

<script>
import inputString from "./form-inputs/input-string";
import inputDate from "./form-inputs/input-date";
import inputNumber from "./form-inputs/input-number";
import inputSelect from "./form-inputs/input-select";
import inputBoolean from "./form-inputs/input-boolean";

export default {
  name: "FormGenerator",
  components: {
    inputString,
    inputDate,
    inputNumber,
    inputSelect,
    inputBoolean
  },
  props: {
    data: {
      type: Object,
      default() {
        return {};
      }
    },
    label: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      showAddForm: false,
      addFields: {
        type: "string",
        label: null,
        value: null
      }
    };
  },
  computed: {
    getData() {
      return this.label ? this.data[this.label] : this.data;
    }
  },
  methods: {
    formEvents() {
      return {
        showAddForm: () => (this.showAddForm = !this.showAddForm),
        addField: () => {
          Object.defineProperty(this.data, "a", { value: 37 });
        },
        addedField: () => {
          this.$emit("addedField");
        }
      };
    },
    isValidDate(value) {
      var dateWrapper = new Date(value);
      return !isNaN(dateWrapper.getDate());
    },
    getInputType(value) {
      if (typeof value === "boolean") return "input-boolean";

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

  float: clear;
}

.form-generation label {
  width: 50%;
  display: block;
}
</style>
