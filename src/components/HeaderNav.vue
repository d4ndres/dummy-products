<template>
    <header>
        <div class="box-limit">
            <h1>dummy products</h1>
            <nav>
                <input type="text" v-model="inputValueSearch">
                <ul>

                    <li>
                        <svg class="heart" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16.44 3.10156C14.63 3.10156 13.01 3.98156 12 5.33156C10.99 3.98156 9.37 3.10156 7.56 3.10156C4.49 3.10156 2 5.60156 2 8.69156C2 9.88156 2.19 10.9816 2.52 12.0016C4.1 17.0016 8.97 19.9916 11.38 20.8116C11.72 20.9316 12.28 20.9316 12.62 20.8116C15.03 19.9916 19.9 17.0016 21.48 12.0016C21.81 10.9816 22 9.88156 22 8.69156C22 5.60156 19.51 3.10156 16.44 3.10156Z" ></path> </g></svg>
                    </li>
                    <li>
                        <svg 
                            @click=" toggleHeartState "
                            class="cart" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 0.75H1C0.447715 0.75 0 1.19772 0 1.75V2.25C0 2.80228 0.447715 3.25 1 3.25H3.0119L5.73626 14.7312C6.18267 16.6125 7.84065 17.9508 9.76471 17.9987V18H17.5874C19.5362 18 21.2014 16.5956 21.5301 14.6747L22.7857 7.33734C22.9947 6.11571 22.0537 5 20.8143 5H5.99657L5.21623 1.7114C5.08251 1.14787 4.57918 0.75 4 0.75Z" fill="#000000"></path> <path d="M10 21C10 22.1046 9.10457 23 8 23C6.89543 23 6 22.1046 6 21C6 19.8954 6.89543 19 8 19C9.10457 19 10 19.8954 10 21Z" fill="#000000"></path> <path d="M21 21C21 22.1046 20.1046 23 19 23C17.8954 23 17 22.1046 17 21C17 19.8954 17.8954 19 19 19C20.1046 19 21 19.8954 21 21Z" ></path> </g></svg>
                    </li>
                </ul>
            </nav>
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
    header{
        background-color: #252525;
        color: rgba(209, 213, 219);
        width: 100%;
    }
    .box-limit {
        margin: 0 auto;
        max-width: min(1000px, 100%);
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        
    }

    h1 {
        color: rgba(67, 203, 161);
        padding: 10px 0;
        font-size: 2.3rem;

    }

    nav {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column-reverse;
        width: 100%;
        padding: 10px;
    }
    
    ul {
        display: flex;
        justify-content: space-between;
        width: max(30vw, 280px);
        padding-bottom: 10px;
    }

    input {
        background-color: rgba( 0, 0, 0, .3);
        border: solid 1px rgba(255, 255, 255, .3);
        color: rgba(67, 203, 161);
        width: max(280px, 40vw);
        padding: 0px 10px;
        /* width: max(40vw, 300px); */
        border-radius: 10px;
        font-size: 1.5rem;
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
    .cart:hover{
        filter: drop-shadow(0 0 15px gold);
    }


    @media screen and ( min-width: 468px ) {
        nav {
            justify-content: space-around;
            flex-direction: row;
        }
        ul {
            justify-content: space-around;
            
        }
    }

</style>