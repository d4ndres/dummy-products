import { createStore } from 'vuex'
import products from './products'
import cart from './cart'


export default createStore({
  state: {
    

  },
  getters: {
    availableProducts( state ){
      return state.products.filter( product => product.inventory > 0 )
    },
  },
  mutations: {
  },
  actions: {

  },
  modules: {
    products,
    cart
  }
})
