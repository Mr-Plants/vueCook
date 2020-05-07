<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>

  export default {
    name: "Form",
    componentName: "Form",
    // 子孙带跨代需要访问数据，可以通过provide访问form实例
    provide() {
      return {
        form: this
      }
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
        const tasks = this.$children.filter(item => item.prop).map(item => item.validate());
        return Promise.all(tasks);
      }
    }
  }
</script>

<style scoped>

</style>
