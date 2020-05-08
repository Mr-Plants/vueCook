class MyVue {
  constructor(options) {
    // 将实例属性设置为$开头
    this.$options = options;
    this.$data = options.data;
    // 创建响应式数据
    this.observe(this.$data);
  }

  /**
   * 创建响应式数据
   * @param data
   */
  observe(data) {
    if (!data || typeof data !== "object") {
      return
    }

    Object.keys(data).forEach(key => {
      this.defineReactive(data, key, data[key]);
      this.proxyData(key);
    })
  }

  /**
   * app.$data.name=app.name
   * 将数据代理到this实例上
   * @param key
   */
  proxyData(key) {
    Object.defineProperty(this, key, {
      get() {
        return this.$data[key];
      },
      set(v) {
        this.$data[key] = v;
      }
    })
  }

  /**
   * 劫持数据
   * @param obj
   * @param key
   * @param val
   */
  defineReactive(obj, key, val) {
    Object.defineProperty(obj, key, {
      get() {
        console.log('get：' + key)
        return val;
      },
      set(v) {
        val = v;
        console.log('set：' + key);
      }
    })
    // 递归
    this.observe(val);
  }
}
