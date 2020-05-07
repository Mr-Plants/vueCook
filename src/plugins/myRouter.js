/**
 * 功能，切换路由
 * 注册全局组件（routerLink，routerView）
 * 暂不支持子路由和history模式
 */
export default class MyRouter {
  constructor(options) {
    this.options = options;
  }

  static install(_Vue) {
    // 引入Vue，提供数据监测
    this.Vue = _Vue;
    _Vue.mixin({
      beforeCreate() {
        // 根组件（App）option有router，保证只绑定一次，后续组件直接调用
        if (this.options.router) {
          _Vue.prototype.$router = this.options.router;
          this.init()
        }
      }
    })
  }

  init() {
    // 2-2 81min
  }


}
