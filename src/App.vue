<template>
  <div id="app">
    <h2>toast</h2>
    <button @click="showToast">click me to showToast！</button>

    <h2>form</h2>
    <Form :model="model" :rules="rules" ref="loginForm">
      <FormItem label="用户名" prop="userName">
        <FormInput v-model="model.userName"></FormInput>
      </FormItem>

      <FormItem label="密码" prop="password">
        <FormInput v-model="model.password" type="password"></FormInput>
      </FormItem>
      <!--可以不包含label和prop-->
      <FormItem>
        <button @click="onLogin">登陆</button>
      </FormItem>
    </Form>

    <h2>router</h2>
    <RouterTest></RouterTest>

    <h2>store</h2>
    <StoreTest></StoreTest>
  </div>
</template>

<script>
  import Form from "./form/Form";
  import {zenToast} from "./toast/toast";
  import FormItem from "./form/FormItem";
  import FormInput from "./form/FormInput";
  import RouterTest from "./my-router/RouterTest";
  import StoreTest from "./my-store/StoreTest";

  export default {
    name: 'App',
    methods: {
      showToast() {
        // setInterval(() => {
        zenToast({
          closeOnClick: true,
          message: Math.random()
        })
        // }, 1000)
      },
      onLogin() {
        this.$refs.loginForm.validate().then(
          () => {
            console.log('登陆成功')
          },
          err => {
            console.log('登陆失败，' + err.errors[0].message)
            // console.log(err)
          }
        )
      }
    },
    data() {
      return {
        model: {
          userName: 'tom',
          password: ''
        },
        rules: {
          userName: [
            {
              required: true,
              message: '用户名必填'
            }
          ],
          password: [
            {
              required: true,
              message: '密码必填'
            }
          ]
        }
      }
    },
    components: {
      Form,
      FormItem,
      FormInput,
      RouterTest,
      StoreTest
    }
  }
</script>

<style>
</style>
