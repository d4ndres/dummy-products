<template>
    <li class="box">
        <figure>
          <img :src=" product.thumbnail " :alt=" product.id ">
        </figure>
        <div class="content">
          <p>
            {{ product.title }}
          </p>
          <p class="stock">
            On Stock: {{ product.inventory }}
          </p>
          <div>
          <p>{{ currency( product.price ) }}</p>
          <button
            class="btn"
            :class="{ onCart : isOnCart(product)}"
            :disabled="!productIsInStock(product)"
            @click="addProductToCart(product)">
              {{ getCuantity(product) }}
          </button>
          </div>
        </div>


    </li>   
</template>

<script>
import { mapActions, mapGetters  } from 'vuex';

import currency from '@/currency.js'

export default {
  props:{
    product: Object
  },
  computed:{
    ...mapGetters(['productIsInStock','isOnCart','getCuantity'])
  },
  methods: {
    ...mapActions(['addProductToCart']),

    currency( price ){
      return currency( price, "$", 2 )
    }
  }
}

</script>

<style scoped>
  /* .box {
    width: min(375px, 100%);
    margin: 20px 0;
    position: relative;
  }*/
  figure{
    line-height: 0;
  }
  img {
    height: 200px;
    width: 100%;
    object-fit: cover;
  }
  .content {
    border-top: solid .5px #000;
    padding: 10px 20px 20px;
    text-align: left;
    font-size: 1rem;
    background: rgba(255, 255, 255, 0.4);
    /* position: absolute;
    left: 0;
    right: 0;
    bottom: 0; */
  }
  .btn {
    background-color: tomato;
    font-size: 1rem;
    border: solid lightcoral 1px;
    color: #fff;
    padding: 3px;
    cursor: pointer;
    transition: .6s;
    min-width: 100px;
    
  }
  .btn::after{
    content: 'Add to cart';
  }

  .onCart {
    background-color: lightgreen;
    border: solid #000 1px;
  }
  .onCart::after{
    content: '  In cart';
  }

  .content > * {
    margin-top: 10px;
  }
  .content div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .stock {
    /* font-size: .9rem; */
  }

</style>