<template>
  <HeaderNav></HeaderNav>
  <div class="box-limit">
    <ProductList></productList>
    <ShoppingCart></ShoppingCart>
  </div>
</template>

<script>
import ProductList from './components/ProductList.vue'
import ShoppingCart from './components/ShoppingCart.vue'
import HeaderNav from './components/HeaderNav.vue'

export default {
  name: 'App',
  components: {
    ProductList,
    ShoppingCart,
    HeaderNav

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
  color: #2c3e50;
}
.box-limit {
  width: min(1000px, 100%);
  margin: 0px auto;
  position: relative;
  overflow: hidden;
}

</style>
