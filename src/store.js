import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    user: null,
  },
  mutations: {
    setUser(state, userId) {
      this.state.user = userId;
    },
    outUser(state) {
      this.state.user = null;
    },
  },
});

export default store;
