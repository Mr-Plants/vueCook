<template>
  <div>
    <!--    校验发生在formItem中，需要input通知他校验-->
    <label v-if="label">{{label}}</label>
    <slot></slot>
    <p class="error-message" v-if="errorMessage">{{errorMessage}}</p>
  </div>
</template>

<script>
  import Schema from 'async-validator';

  export default {
    name: "FormItem",
    // 使用自定义option，尽量不取vue私有属性（$options._componentTag）
    componentName: "FormItem",
    // 注入后可以拿到form实例
    inject: ['form'],
    props: {
      label: {
        type: String,
        default: ''
      },
      prop: String
    },
    data() {
      return {
        errorMessage: ''
      }
    },
    mounted() {

      // todo 为什么一定要放到这个生命周期？
      // 初始化监听校验事件
      this.$on('validate', () => {
        this.validate();
      })

      // this.form.$on('validate', () => {
      //   this.validate();
      // })
    },
    methods: {
      validate() {
        const value = this.form.model[this.prop];
        const rules = this.form.rules[this.prop];

        const desc = {
          [this.prop]: rules
        }
        const source = {
          [this.prop]: value
        }
        const schema = new Schema(desc);
        // return promise<Object>
        return schema.validate(source, err => {
          if (err) {
            this.errorMessage = err[0].message;
          } else {
            this.errorMessage = '';
          }
        })
      }
    }
  }
</script>

<style scoped>
  .error-message {
    color: red;
  }
</style>
