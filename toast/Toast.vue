<template>
  <div class="overlay">
    <h3>{{title}}</h3>
    <p>{{desc}}</p>
  </div>
</template>

<script>
  export default {
    name: "Toast",
    data() {
      return {
        title: String,
        desc: String
      }
    }
  }
</script>

<style scoped>

</style>
