import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    product: 0,
    test: 0,
  },
  mutations: {
    UPDATE_CART: (state, payload) => {
      state.product = payload;
    },
  },
  actions: {
    UPDATE_CART: ({ commit }, { payload }) => {
      commit("UPDATE_CART", payload);
    },
  },
  modules: {},
});
