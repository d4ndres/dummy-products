
import shop from '@/api/shop'

export default {
  state: {
    // {id, quantiry}
    cart: [],
    checkoutStatus: null
  },
  getters: {
    cartProduct( state, getters, rootstate ){
      return state.cart.map( cartItem => {
        const product = rootstate.products.products.find( product => product.id === cartItem.id )
        return {
          title: product.title,
          price: product.price,
          quantity: cartItem.quantity,
          thumbnail: product.thumbnail,
          id: product.id
        }
      })
    },
    cartTotal( state, getters ){
      return  getters.cartProduct.reduce( (total, itemCart) => total + itemCart.price * itemCart.quantity, 0)
    },
    isOnCart( state ) {
      return product => {
        return !!state.cart.find( item => item.id == product.id)
      }
    },
    getCuantity( state ){
      return product => {
        const item = state.cart.find( item => item.id == product.id)
        return item ? item.quantity : null
      }
    },

  },
  actions: {

    addProductToCart( {state, commit, getters }, product){

      if ( !getters.productIsInStock(product) ) return;

      const cartItem = state.cart.find( item => item.id === product.id )

      if( !cartItem ) {
        commit('pushProductToCart', product.id)
      } else {
        commit('incrementItemQuantity', cartItem)
      }

      commit('decrementProductInventory', product)
    },

    checkout( {state, commit} ){
      shop.buyProducts( 
        state.cart,
        () => {
          commit('emptyCart')
          commit('setCheckoutStatus', 'success')
        },
        () => {
          commit('setCheckoutStatus', 'fail')
        }
        
      )
    },
    addProductToCartFromCart( {rootState, dispatch }, itemCart ){
      const product = rootState.products.products.find( product => product.id == itemCart.id)
      dispatch('addProductToCart', product)
    },
    removeProdcutCart( {state, commit, rootState}, itemCart){
      const index = state.cart.findIndex( item => item.id == itemCart.id)
      commit('removeProdcutCart', index)
      const product = rootState.products.products.find( product => product.id == itemCart.id)
      commit('addProductProduct', product)
      

    }
  },

  mutations: {
    pushProductToCart( state, productId){
      state.cart.push({
        id: productId,
        quantity: 1
      })
    },
    
    incrementItemQuantity( state, cartItem ){
      cartItem.quantity++
    },
    emptyCart( state ){
      state.cart = []
    },
    setCheckoutStatus(state, status){
      state.checkoutStatus = status
    },
    removeProdcutCart( state, index){
      if(state.cart[index].quantity == 1) 
        state.cart.splice( index, 1 )
      else
        state.cart[index].quantity--
    }

  }

}