<template>
  <div class="overlay">

  </div>
</template>

<script>
  export default {
    name: "Toast",
    props: {
      title: {
        type: String,
        default: ''
      },
      message: {
        type: String,
        default: ''
      }
    },
    methods:{
      show(){

      }
    }
  }
</script>

<style scoped>

</style>
