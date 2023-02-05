const URL = 'https://dummyjson.com/products'

export default {
  state: {
    products: [],
  },
  getters: {
    productIsInStock( ) {
      return (product) => {
        return product.inventory > 0
      }
    }
  },
  actions: {
    fetchProducts({commit}){
      return new Promise( (resolve ) => {
        fetch(URL)
        .then( res => res.json() )
        .then( res => {
          const products = res.products.map( product => {
            product.inventory = product.stock
            product.lowercaseTitle = product.title.toLowerCase()
            return product
          })
          commit('setProducts', products)
          resolve()
        })

      })
    },
  },
  mutations: {
    setProducts(state, products){
      state.products = products
    },
    
    decrementProductInventory(state, product){
      product.inventory--
    },
    addProductProduct(state, product){
      product.inventory++
    }
    
  }
}