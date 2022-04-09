import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store =  new Vuex.Store({
  //data
  state: {
    count:0
  },
 //method
  mutations:{
    increment(state,n:number){
      state.count += n;
    }
  }

})
console.log(store.state.count);
store.commit('increment',10);
console.log(store.state.count);

export default store;