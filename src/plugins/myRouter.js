/**
 * 功能，切换路由
 * 注册全局组件（routerLink，routerView）
 * 暂不支持子路由和history模式
 */
let Vue;
export default class MyRouter {
  constructor(options) {
    this.options = options;
    this.routeMap = {};
    // todo 源码中如何实现
    this.app = new Vue({
      data() {
        return {
          currentRoute: '/'
        }
      }
    })
  }

  static install(_Vue) {
    // 引入Vue，提供数据监测
    Vue = _Vue;
    Vue.mixin({
      beforeCreate() {
        // 此处this指向vue实例
        // 根组件（App）option有router，保证只绑定一次，后续组件直接调用
        if (this.$options.router) {
          Vue.prototype.$router = this.$options.router;
          // 当找到根组件时，初始化
          this.$options.router.init();
        }
      }
    })
  }

  init() {
    // 初始化全局事件
    this.bindEvents();
    // 初始化路由映射
    this.createRouteMap();
    // 创建全局组件
    this.createComponents();
  }

  createRouteMap() {
    this.options.routes.forEach(item => {
      this.routeMap[item.path] = item;
    })
  }

  bindEvents() {
    // todo 后续业务代码再监听hashchange事件怎么搞？官方如何实现
    window.addEventListener('hashchange', () => {
      this.onHashChange();
    });
    window.addEventListener('load', () => {
      this.onHashChange();
    })
  }

  createComponents() {
    Vue.component('router-link', {
      props: {
        to: String
      },
      render(h) {
        //  目标是<a href='to'>xxxx</a>
        // todo 此处this指向的Proxy是个啥？
        console.log(this)
        return h('a', {
          attrs: {
            href: '#' + this.to
          }
        }, this.$slots.default)
      }
    })

    Vue.component('router-view', {
      // 使用箭头函数使this指向router实例
      render: (h) => {
        const activeComponent = this.routeMap[this.app.currentRoute].component;
        return h(activeComponent);
      }
    })
  }

  onHashChange() {
    // 触发响应式数据的变化，其他组件可以知道变更
    this.app.currentRoute = window.location.hash.slice(1) || '/';
  }
}
