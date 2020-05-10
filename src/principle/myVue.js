class MyVue {
  constructor(options) {
    // 将实例属性设置为$开头
    this.$options = options;
    this.$data = options.data;
    this.$el = options.el;
    // 创建响应式数据
    this.observe(this.$data);
    new Compile(this, this.$el);
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
      MyVue.depKey += key;
      this.defineReactive(data, key, data[key]);
      this.proxyData(key);
      // this.observe(data[key])
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
   * 为每一个key（非引用类型）劫持数据
   * @param obj
   * @param key
   * @param val
   */
  defineReactive(obj, key, val) {
    const dep = new Dep();
    Object.defineProperty(obj, key, {
      get() {
        // console.log('get：' + key)
        // 当页面中需要用到key（获取key的值）的地方，就会被当成key的watcher放进dep
        Dep.target && dep.addDep(Dep.target);
        return val;
      },
      set(v) {
        if (val !== v) {
          val = v;
          dep.notify();  // 值发生变化，通知观察者（watcher）更新
          // console.log('set：' + key);
        }

      }
    })
    // 递归
    this.observe(val);
  }
}


/**
 * 收集watcher，统一管理某个key的watcher
 * todo 典型的发布订阅模式
 * 当有人订阅时就将订阅者塞入订阅者队列
 * 发布时就通知所有订阅者更新
 */
class Dep {
  // 当前操作的watcher实例
  static target;

  constructor() {
    this.watchers = [];
  }

  /**
   * 收集依赖（数据观察者）
   * @param watcher
   */
  addDep(watcher) {
    this.watchers.push(watcher);
  }

  /**
   * 通知watcher数据更新了
   */
  notify() {
    this.watchers.forEach(watcher => {
      watcher.update();
    })
  }

}

/**
 * 数据观察者，用来建立dom和data.key的关联，
 * 一个key可能有多个watcher（在页面中被多次使用）
 */
class Watcher {
  // vm实例干嘛的？？？
  constructor(vm, key, cb) {

    this.vm = vm;
    this.key = key;
    this.cb = cb;

    Dep.target = this;
    // 读取一下key的值，触发getter，收集依赖
    this.vm[this.key];
    // 清空target指向
    Dep.target = null;
  }

  update() {
    this.cb && this.cb();
  }
}
