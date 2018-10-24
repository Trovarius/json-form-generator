<template>
  <fieldset>
    <label >{{ getParent }}</label> 
    <div class="form-generation">
      <div  
        v-for="(value, key) in getData" 
        :key="key">
        <label :for="key">{{ key }}</label> 
        <component 
          :is="getInputType(getData[key])" 
          :data="getData"
          :label="key"
          :parent="getParent"/>
      </div>
    </div>
    <button @click="addFormShow()">+ new</button>
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
      <button @click="addField()">+</button>
    </div>
  </fieldset>
</template>

<script>
import inputString from "./form-inputs/input-string";
import inputDate from "./form-inputs/input-date";
import inputNumber from "./form-inputs/input-number";
import inputSelect from "./form-inputs/input-select";
import inputBoolean from "./form-inputs/input-boolean";
import inputObjectArray from "./form-inputs/input-object-array";

export default {
  name: "FormGenerator",
  components: {
    inputString,
    inputDate,
    inputNumber,
    inputSelect,
    inputBoolean,
    inputObjectArray
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
    },
    parent: {
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
    },
    getParent() {
      return this.label ? `${this.parent || ""}.${this.label}` : "";
    }
  },
  methods: {
    addField() {
      this.$store.commit("addField", {
        path: this.getParent,
        key: this.addFields.label,
        value: this.addFields.value
      });

      this.addFormShow();
    },
    addFormShow() {
      this.showAddForm = !this.showAddForm;
    },
    isNumeric(value) {
      let isNumeric = /^[-+]?(\d+|\d+\.\d*|\d*\.\d+)$/;
      return isNumeric.test(value);
    },
    isValidDate(value) {
      var dateWrapper = new Date(value);
      return !isNaN(dateWrapper.getDate());
    },
    getInputType(value) {
      if (typeof value === "boolean") return "input-boolean";

      if (typeof value === "number" || this.isNumeric(value))
        return "input-number";

      if (Array.isArray(value) && value.length && typeof value[0] === "object")
        return "input-object-array";

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
