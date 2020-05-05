<template>
  <div id="app">
    <input type="button" value="click me" @click="showToast">
  </div>
</template>

<script>
  import {zenToast} from "./toast";
  // import Toast from "./Toast";

  export default {
    name: 'App',
    methods: {
      showToast() {
        // create(Toast,{
        //   title:'blll',
        //   message:'sosososo'
        // })
        zenToast({
          title:'哈哈哈',
          message:'wulalallala'
        });
        zenToast('妙啊')
      }
    }
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
