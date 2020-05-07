<template>
  <div>
    <p>count：{{$store.state.count}}</p>
    <button @click="countAdd">count ++</button>
    <button @click="asyncCountAdd">asyncCount ++</button>
  </div>
</template>

<script>
  export default {
    name: "StoreTest",
    methods: {
      countAdd() {
        this.$store.commit('countAdd', 2);
      },
      async asyncCountAdd() {
        const res = await this.$store.dispatch('asyncCountAdd', 4);
        if (res === 'ok') {
          console.log('add success！')
        }
      }
    }
  }
</script>

<style scoped>

</style>
