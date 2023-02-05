<template>
    <header>
        <div class="navigation">
            <h1>dummy products</h1>
            <ul class="navigation__right">
                <li>
                    <svg class="heart" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16.44 3.10156C14.63 3.10156 13.01 3.98156 12 5.33156C10.99 3.98156 9.37 3.10156 7.56 3.10156C4.49 3.10156 2 5.60156 2 8.69156C2 9.88156 2.19 10.9816 2.52 12.0016C4.1 17.0016 8.97 19.9916 11.38 20.8116C11.72 20.9316 12.28 20.9316 12.62 20.8116C15.03 19.9916 19.9 17.0016 21.48 12.0016C21.81 10.9816 22 9.88156 22 8.69156C22 5.60156 19.51 3.10156 16.44 3.10156Z" ></path> </g></svg>
                </li>
                <li>
                    <svg
                        :class="{ 'cart-active': $store.state.isInCart }"
                        @click=" toggleHeartState "
                        class="cart" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 0.75H1C0.447715 0.75 0 1.19772 0 1.75V2.25C0 2.80228 0.447715 3.25 1 3.25H3.0119L5.73626 14.7312C6.18267 16.6125 7.84065 17.9508 9.76471 17.9987V18H17.5874C19.5362 18 21.2014 16.5956 21.5301 14.6747L22.7857 7.33734C22.9947 6.11571 22.0537 5 20.8143 5H5.99657L5.21623 1.7114C5.08251 1.14787 4.57918 0.75 4 0.75Z" fill="#000000"></path> <path d="M10 21C10 22.1046 9.10457 23 8 23C6.89543 23 6 22.1046 6 21C6 19.8954 6.89543 19 8 19C9.10457 19 10 19.8954 10 21Z" fill="#000000"></path> <path d="M21 21C21 22.1046 20.1046 23 19 23C17.8954 23 17 22.1046 17 21C17 19.8954 17.8954 19 19 19C20.1046 19 21 19.8954 21 21Z" ></path> </g></svg>
                </li>
            </ul>
        </div>

        <div class="search">
            <input class="search__input" type="text" v-model="inputValueSearch" placeholder="Search...">
            <button class="search__svg">
                <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M11 5C7.68629 5 5 7.68629 5 11C5 14.3137 7.68629 17 11 17C14.3137 17 17 14.3137 17 11C17 7.68629 14.3137 5 11 5ZM3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11C19 12.8487 18.3729 14.551 17.3199 15.9056L20.7071 19.2929C21.0976 19.6834 21.0976 20.3166 20.7071 20.7071C20.3166 21.0976 19.6834 21.0976 19.2929 20.7071L15.9056 17.3199C14.551 18.3729 12.8487 19 11 19C6.58172 19 3 15.4183 3 11Z" ></path> </g></svg>
            </button>
        </div>

  </header>
</template>

<script>
import { mapGetters } from 'vuex';

export default{
    computed:{

        ...mapGetters(['productMatch']),
        inputValueSearch: { 
            get() {
                return this.$store.state.search;
            },
            set(value) {
                this.$store.commit('updateSearch', value)
            }
     
        }
    },
    methods: {
        toggleHeartState(){
            this.$store.commit("toggleIsInCard")
        }
    }
}

</script>

<style scoped>
    @import url('@/assets/main.css');
    .box-limit {
        margin: 0 auto;
        max-width: min(1000px, 100%);
        
    }

    /* Naviggation */
    header{
        background-color: #252525;
        color: rgba(209, 213, 219);
        width: 100%;
        padding: 10px;
        position: sticky;
        top: 0;
        z-index: 1;
        height: 115px;
    }

    .navigation {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 5px 0;
    }
    .navigation__right {
        display: flex;
        justify-content: space-between;
        width: 80px;
        /* background: red; */
    }

    h1 {
        color: var(--vue-color);
        padding: 10px 0;
        font-size: 1.5rem;
    }



    /* search */
    .search {
        padding-bottom: 10px;
        border: solid 1px rgba(255, 255, 255, .3);
        background-color: rgba( 0, 0, 0, .3);
        margin: auto;
        padding: 5px 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-radius: 5px;
    }


    .search__input {
        background-color: transparent;
        border: none;
        color: var(--vue-color);
        font-size: 1.5rem;
        width: 70vw;
        
    }

    
    .search__svg {
        background-color: transparent;
        border: none;
    }
    .search__svg svg {
        fill: var( --vue-color);
        height: 22px;
    } 

    svg {
        width: 2rem;
        fill: transparent;
        border-radius: 10%;
        cursor: pointer;
        transition: .4s;
    }

    .heart {
        stroke: red;
    }
    .heart:hover {
        fill: rgba( 0, 0, 0, 1);
        filter: drop-shadow(0 0 15px red);
    }

    .cart{
        stroke: gold;
    }
    .cart-active{
        filter: drop-shadow(0 0 15px gold);
    }


    @media screen and ( min-width: 468px ) {

    }

</style>