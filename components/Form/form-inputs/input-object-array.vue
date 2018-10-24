<template>
  <div>
    <fieldset>
      <button @click="addNewObject()">+ new</button>

      <div 
        v-for="(value, index) in data[label]"
        :key="index">
        <form-generator 
          :data="data[label][index]"/>
      </div>
    </fieldset>
  </div>
</template>

<script>
import formGenerator from "../form-generator";

export default {
  name:"InputObjectArray",
  components:{
    formGenerator
  },
  props: {
    data: {
      type: Object,
      default() {
        return {};
      }
    },
    label: { type: String, default: "" }
  },
  methods: {
    addNewObject(){
      let baseObject = Object.assign({}, this.data[this.label][0]);

      this.data[this.label].push(baseObject)
    }
  }
};
</script>

<style>
</style>

