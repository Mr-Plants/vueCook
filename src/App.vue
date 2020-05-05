<template>
  <div id="app">
    <input type="button" value="click me to showToast！" @click="showToast">
    <Form></Form>
  </div>
</template>

<script>
  import Form from "./form/Form";
  import {zenToast} from "./toast/toast";

  export default {
    name: 'App',
    methods: {
      showToast() {
        zenToast({
          title: '哈哈哈',
          message: 'wulalallala'
        });
        zenToast('妙啊')
      }
    },
    components: {
      Form
    }
  }
</script>

<style>
</style>
