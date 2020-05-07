export default {
  methods: {
    /**
     * 在子组件中调用，为指定的父组件分发指定事件
     * @param componentName
     * @param event
     * @param params
     */
    dispatch(componentName, event, params) {
      // 如果组件没有父组件节点，就自己发派发
      let parent = this.$parent || this.$root;
      // 使用自定义option，尽量不取vue私有属性（$options._componentTag）
      let name = parent.$options.componentName;

      // 只要没有name不存在或者name不匹配，就继续往上找
      // 如果parent不存在（根结点），就不继续查找了
      while (parent && (!name && name !== componentName)) {
        parent = parent.$parent;
        if (parent) {
          name = parent.$options.componentName
        }
      }
      // 走到这里，parent只能是自己或者已经找到的
      parent.$emit.apply(event, params);
    }
  }
}
