<template>
  <HeaderNav></HeaderNav>
  <ShoppingCart></ShoppingCart>
  <HeroProducts></HeroProducts>
  <ProductList></productList>
 
</template>

<script>
import ProductList from './components/ProductList.vue'
import ShoppingCart from './components/ShoppingCart.vue'
import HeaderNav from './components/HeaderNav.vue'
import HeroProducts from './components/HeroProducts.vue'

export default {
  name: 'App',
  components: {
    ProductList,
    ShoppingCart,
    HeaderNav,
    HeroProducts

  }
}
</script>

<style>
@import url('@/assets/main.css');

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
