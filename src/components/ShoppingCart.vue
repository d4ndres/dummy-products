<template>
    <div 
        class="layout"
        :class="{ 'layout-right': $store.state.isInCart }">
        <h1>Shopping Cart</h1>
        <ul>
            <li v-for="product in products" :key="product">
                {{ product.title }} - {{ product.price }} - {{ product.quantity }}
            
            </li>
        </ul>
        <p>
            Total: {{ total }}
        </p>
        <button 
            @click="checkout">Checkout</button>
        <p v-show="checkoutStatus">{{ checkoutStatus }}</p>
    </div>
</template>

<script>
    import currency from '@/currency.js'
    import { mapActions } from 'vuex'

    export default{
        computed: {
            products(){
                return this.$store.getters.cartProduct
            },
            total() {
                return currency( this.$store.getters.cartTotal, "$", 2 )
            },
            checkoutStatus(){
                return this.$store.state.checkoutStatus;
            },

        },
        methods: {
            ...mapActions({ 
                checkout: 'checkout'
            })
        }
    }

</script>
<style scoped>

    .layout-right{

        transform: translateX( 0vw);
    }


</style>