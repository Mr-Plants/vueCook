import myStore from '../plugins/myStore'
import Vue from "vue";

Vue.use(myStore);

export default new myStore.Store({
  state: {
    count: 0
  },
  mutations: {
    countAdd(state, value) {
      state.count += value;
    }
  },
  actions: {
    asyncCountAdd({commit}, params) {
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log(this)
          commit('countAdd', params);
          resolve('ok');
        }, 1000)
      })
    }
  }
})
