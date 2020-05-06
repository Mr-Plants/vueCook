<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>

  export default {
    name: "Form",
    // 子孙带跨代需要访问数据，可以通过provide访问form实例
    provide() {
      return {
        form: this
      }
    },
    data() {
      return {}
    },
    props: {
      model: {
        type: Object,
        require: true
      },
      rules: {
        type: Object
      }
    },
    methods: {
      validate() {
        // 执行到了这里
        const tasks = this.$children.filter(item => item.prop).map(item => item.validate());
        return Promise.all(tasks);
      }
    }
  }
</script>

<style scoped>

</style>
