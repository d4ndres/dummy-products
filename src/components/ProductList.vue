<template>
    <div >
        <!-- <h2>Product List</h2> -->
        

        <LoaderX v-if="loading" />
        <ul v-else class="products">


            <ProductCard 
              v-for="product in productMatch" 
              :key="product" 
              :product="product"></ProductCard>

        </ul>
    </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'
import currency from '@/currency.js'
import LoaderX from '@/components/LoaderX.vue'
import ProductCard from './ProductCard.vue'

export default{
    data() {
        return {
            loading: false,
            search: ''
        }
    },
    methods: {
        ...mapActions(['addProductToCart']),
        // addProductToCart( product ){
        //     this.$store.dispatch('addProductToCart', product)
        // }
        currency( price ){
          return currency( price, "$", 2 )
        }
    },
    computed:{
        ...mapState({
          products: state => state.products.products
        }),
        ...mapGetters(['productIsInStock', 'productMatch']),
    },
    created(){
        this.loading = true
        this.$store.dispatch('fetchProducts')
        .then( () => this.loading = false)
    },
    components: {
      LoaderX,
      ProductCard
    }
}

</script>

<style scoped>
    .products {
        display: grid;
        gap: 1rem;
        grid-template-columns: repeat( auto-fit, minmax(320px, 1fr) );
        grid-auto-columns: 500px;
        list-style: none;
    }
</style>