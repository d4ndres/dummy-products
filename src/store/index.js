import { createStore } from 'vuex'
import products from './products'
import cart from './cart'


export default createStore({
  state: {
    search: '',
    isInCart: false
  },
  getters: {
    availableProducts( state ){
      return state.products.filter( product => product.inventory > 0 )
    },
    productMatch( state ){
      return state.products.products.filter( product => product.lowercaseTitle.includes( state.search ) )
    }
  },
  mutations: {
    updateSearch( state, value ){
      state.search = value
    },
    toggleIsInCard(state){
      state.isInCart = !state.isInCart
      console.log(  state.isInCart )
    }
  },
  actions: {

  },
  modules: {
    products,
    cart
  }
})
