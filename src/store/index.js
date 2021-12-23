import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    quntity: 0,
    CartList :[]
  },
  mutations: {
    UPDATE_CART: (state) => {
      const currentItemqun = localStorage.getItem('qun');
      state.quntity = Number(currentItemqun);
      
    },
    ADD_TO_CART :(state , payload ) =>{
  
      if(JSON.parse(localStorage.getItem("CartList") != null)){
        state.CartList = JSON.parse(localStorage.getItem("CartList"))
      }
      state.CartList.push({"id":payload.id,"name":payload.name,"qun":1,"price":payload.price})
      state.quntity += payload.qun;
      //add new quntity and list to localstorage
      localStorage.setItem("qun",state.quntity);
      localStorage.setItem("CartList",JSON.stringify(state.CartList));
    },

    UPDATE_CART_PRODUCT : (state , payload )=>{
      state.quntity = payload.qun
      // Set Item list and qunatity when update quntity
      localStorage.setItem("CartList",JSON.stringify(payload.list));
      localStorage.setItem("qun",payload.qun);
    }
  
  },

  actions: {
    UPDATE_CART: ({ commit }) => {
      commit("UPDATE_CART");
    },
    ADD_TO_CART:({commit}, {payload})=>{
       commit("ADD_TO_CART",payload);
    },
    UPDATE_CART_PRODUCT : ({commit} , payload)=>{
        commit("UPDATE_CART_PRODUCT",payload)
    }

  },
  modules: {},
});
