<template>
  <div class="content">
    <div class="json">
      <h4>json</h4>
      <code> {{ form }} </code>
      <textarea 
        v-model="jsonToString" 
        rows="50" 
        cols="100"/>
    </div>
    <div class="form">
      <h4>form</h4>
      <form-generator 
        :data="form" />
    </div>
  </div>
</template>

<script>
import formGenerator from "~/components/Form/form-generator";

export default {
  components: {
    formGenerator
  },
  data() {
    return {
      form: this.$store.state.json
    };
  },
  computed: {
    jsonToString() {
      return JSON.stringify(this.form);
    }
  },
  methods: {
    updateState() {
      //this.$store.commit("updateState", this.data);
    }
  }
};
</script>

<style>
.content {
  display: block;
  width: 100%;
}

.json,
.form {
  display: block;
  border-right: solid 1px;
  width: 45%;
  margin: 2%;
  padding: 1%;
  float: left;
  height: 100%;
}
</style>
