<template>
    <div 
        class="layout"
        :class="{ 'layout-right': $store.state.isInCart }">
        <h2>Shopping Cart</h2>
        <ul>
            <li class="intemCart" v-for="product in products" :key="product">
                <img :src="product.thumbnail" alt="">
                <div class="about">
                    <p class="about__title">{{ product.title }}</p>
                    <p>{{ setCurrency( product.quantity * product.price )  }}</p>
                    <div class="quantity">
                        <p>
                            Quantity: {{ product.quantity }} 
                        </p>
                        <div>
                            <button
                                @click="addProductToCartFromCart(product)"
                            >+</button>
                            <button
                                @click="removeProdcutCart(product)"
                            >-</button>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
        <div class="checkout"
            v-show="!!products[0] || checkoutStatus "
        >
            <p v-show="checkoutStatus">{{ checkoutStatus }}</p>
            <p> Total: {{ total }} </p>
            <button @click="checkout">
                <span>Checkout</span>   
                
            </button>
        </div>
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
                return this.$store.state.cart.checkoutStatus;
            },

        },
        watch:{
            checkoutStatus( state ){
                if( state == 'success'){
                    setTimeout( () => {
                        this.$store.commit("toggleIsInCard")
                        this.$store.commit("initStateIsInCart")
                    }, 500)
                }
                
            }
        },
        methods: {
            ...mapActions({ 
                checkout: 'checkout',
                addProductToCartFromCart: 'addProductToCartFromCart',
                removeProdcutCart: 'removeProdcutCart'
            }),
            setCurrency( number ){
                return currency( number, "$", 2)
            }
        }
    }

</script>
<style scoped>

    .layout{
        position:fixed;
        background-color: #fff;
        top: 115px;
        bottom: 0;
        right: 0;
        left: 0;
        transition: .6s;
        transform: translateX( 100vw );
        z-index: 2;
    }
    .layout-right{
        transform: translateX(0);
        overflow-y: auto;
        scroll-behavior: smooth;
    }

    .intemCart{
        position: relative;
        height: 100px;
        display: flex;
        justify-content: space-between;
        /* align-items: center; */
        flex-direction: row-reverse;
        border-bottom: solid 1px #000;

    }
    .intemCart .about {
        padding: 10px;
        text-align: left;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: flex-start;
        width: 100%;
    }
    .about__title{
        font-size: 1.2rem;
    }
    .intemCart img {
        object-fit: cover;
        height: 100%;
        width: 150px;
    }
    .checkout {
        padding: 10px 0;
        font-size: 1.5rem;
        bottom: 0;
        
    }
    .checkout button {
        margin-top: 5px;
        background-color: rgb(255, 229, 82);
        font-size: 1.5rem;
        padding: 10px 20px;
    }

    .quantity {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }
    .quantity button{
        font-size: 1.1rem;
        width: 25px;
        height: 25px;
        margin-left: 10px;
        /* line-height: 1rem; */
    }
</style>