<template>
  <div>
    <!--  将props以外的属性直接继承绑定，不包含class和style-->
    <input :value="value" @input="onInput" v-bind="$attrs">
  </div>
</template>

<script>
  export default {
    inheritAttrs: false,  // 避免外层容器继承其他属性
    name: "FormInput",
    inject: ['form'],
    props: {
      value: {
        type: String,
        default: ''
      }
    },
    methods: {
      onInput(e) {
        //数据通过父组件传入，子组件通知父组件改变数据，符合vue单向数据流思想
        this.$emit('input', e.target.value);
        // 触发父组件校验事件，父组件监听（不健壮）
        this.$parent.$emit('validate');
        console.log(this.$parent.$options.componentName)
        // 直接让表单实例触发校验事件
        // this.form.$emit('validate');
      }
    }
  }
</script>

<style scoped>

</style>
