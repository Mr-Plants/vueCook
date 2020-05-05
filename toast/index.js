import Vue from 'vue';
import Toast from "./Toast";

//创建组件实例并挂载到body
export default function create(name, props) {
  // 返回组件的实例
  const vm = new Vue({
    render(h) {
      return h(name, {props});
    }
  }).$mount(); // 此处不写挂载点

  console.log(vm)
  const comp = vm.$children[0];
  document.body.appendChild(vm.$el)
  // 增加实例的销毁方法
  comp.remove = () => {
    document.removeChild(vm.$el);
    vm.$destroy();

  }
}
