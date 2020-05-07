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
      while (parent&&parent.$options.name){

      }
    }
  }
}
