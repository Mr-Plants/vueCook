<template>
  <div class="overlay">
    <h3>{{title}}</h3>
    <p>{{message}}</p>
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
    methods: {
      show() {

      },
      hide() {

      }
    }
  }
</script>

<style scoped>

</style>
