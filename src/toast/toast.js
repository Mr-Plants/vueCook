import Vue from 'vue';
import Toast from "./Toast.vue";

//创建组件实例并挂载到body
export default function create(component, props) {
  // 返回组件的实例
  const vm = new Vue({
    render(h) {
      return h(component, {props});
    }
  }).$mount(); // 此处不写挂载点


  console.log(vm)
  const comp = vm.$children[0];
  document.body.appendChild(vm.$el);
  // 增加实例的销毁方法
  comp.remove = () => {
    document.removeChild(vm.$el);
    vm.$destroy();
  }
}

export function zenToast(options) {
  const toastConstructor = Vue.extend(Toast);
  // 此处必须调用mount方法，调用之前是虚拟dom，调用后被真实挂载
  const toastInstance = new toastConstructor().$mount();
  // toastInstance.$options = options;
  Object.assign(toastInstance, parseOptions(options));

  // toastInstance.clear = () => {
  //   document.body.removeChild(toastInstance.$el);
  //   toastInstance.$destroy();
  // }

  // document.body.appendChild(toastInstance.$el);
  toastInstance.show();
  console.log(toastInstance)
  return toastInstance;
}

function parseOptions(message) {
  return isObject(message) ? message : {message};
}

function isObject(val) {
  return val !== null && typeof val === 'object';
}
