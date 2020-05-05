<template>
  <div>
    <FormInput v-model="userName"></FormInput>
    <FormInput v-model="password" type="password"></FormInput>
  </div>
</template>

<script>
  import FormInput from "./FormInput";

  export default {
    name: "Form",
    data() {
      return {
        userName: 'tom',
        password: ''
      }
    },
    components: {
      FormInput
    }
  }
</script>

<style scoped>

</style>
