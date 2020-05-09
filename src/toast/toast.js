import Vue from 'vue';
import Toast from "./Toast.vue";

export function zenToast(options) {
  if (zenToast.target) {
    zenToast.target.clear();
  }
  const toastConstructor = Vue.extend(Toast);
  const toastInstance = new toastConstructor();
  // 此处甚是精妙，细品
  Object.assign(toastInstance, parseOptions(options));
  // 此处调用mount方法，调用之前是虚拟dom，调用后被挂载
  toastInstance.$mount();

  toastInstance.clear = () => {
    document.body.removeChild(toastInstance.$el);
    toastInstance.$destroy();
    zenToast.target = null;
  }

  document.body.appendChild(toastInstance.$el);
  zenToast.target = toastInstance;
  return toastInstance;
}

function parseOptions(message) {
  return isObject(message) ? message : {message};
}

function isObject(val) {
  return val !== null && typeof val === 'object';
}

['success', 'fail'].forEach(type => {
  zenToast[type] = options => {
    options = parseOptions(options);
    options.type = type;
    zenToast(options)
  }
})

