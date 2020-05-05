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
        this.clear();
        document.body.appendChild(this.$el);
      },
      clear() {
        // 首次执行clear没有元素
        if(this)document.body.removeChild(this.$el);
        this.$destroy();
      }
    },
    beforeDestroy() {
      // 清定时器
    }
  }
</script>

<style scoped>

</style>
