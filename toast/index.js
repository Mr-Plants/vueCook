import Vue from 'vue';
import Toast from "./Toast";

//创建组件实例并挂载到body
export default function create(options) {
  // 返回组件的实例
  const vm = new Vue({
    render(h) {
      return
    }
  }).$mount(); // 此处不写挂载点

}
