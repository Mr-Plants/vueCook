let Vue;

class Store {
  constructor(options) {
    this.options = options;
    // 获取响应式数据
    this.state = new Vue({
      data: options.state
    })
    this.mutations = options.mutations;
    this.actions = options.actions;
  }

  /**
   * 提交mutation
   * @param mutationType
   * @param params
   */
  commit = (mutationType, params) => {
    // 取除mutation映射的方法，并执行
    // todo 当使用dispatch调用commit时this指向有问题
    const mutation = this.mutations[mutationType];
    mutation(this.state, params);
  }

  /**
   * 分发action
   * @param actionType
   * @param params
   */
  dispatch(actionType, params) {
    const action = this.actions[actionType];
    // 调用dispatch通常会返回promise或者其他信息，所以需要原样返回
    return action({commit: this.commit, state: this.state}, params);
  }
}

function install(_Vue) {
  Vue = _Vue;

  Vue.mixin({
    beforeCreate() {
      // 如果是根组件传入就绑定到原型上
      if (this.$options.store) {
        Vue.prototype.$store = this.$options.store
      }
    }
  })
}

export default {
  Store,
  install
}
