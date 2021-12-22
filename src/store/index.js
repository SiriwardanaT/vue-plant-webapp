import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    product: 0,
    test: 0,
    CartList :[]
  },
  mutations: {
    UPDATE_CART: (state, payload) => {
      state.product = payload;
    },
    ADD_TO_CART :(state , payload ) =>{
      //   let  localStorageCart = [];
      //  localStorageCart = JSON.parse(localStorage.getItem("CartList"));
      // if(state.CartList.length === 0){
      //      state.CartList = [state.CartList,...localStorageCart];
      // }
      if(JSON.parse(localStorage.getItem("CartList") != null)){
        state.CartList = JSON.parse(localStorage.getItem("CartList"))
      }
      state.CartList.push({"id":payload.id,"name":payload.name,"qun":1,"price":payload.price})
      state.product = state.product + payload.qun;

      localStorage.setItem("qun",state.product);
      localStorage.setItem("CartList",JSON.stringify(state.CartList));
    }

  },
  actions: {
    UPDATE_CART: ({ commit }, { payload }) => {
      commit("UPDATE_CART", payload);
    },
    ADD_TO_CART:({commit}, {payload})=>{
       commit("ADD_TO_CART",payload);
    }

  },
  modules: {},
});
