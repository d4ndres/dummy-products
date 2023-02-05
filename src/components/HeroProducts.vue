<template>
    <div class="hero">
        <div class="message">
            <h2>Our Products: </h2>
            <Transition>
                <h2 v-if="showOne">{{ title1 }}</h2>
                <h2 v-else >{{ title2 }}</h2>
            </Transition>
        </div>
    </div>
</template>

<script>

const randInt = (max) => Math.floor( Math.random() * max ) 

export default {
    components: {
       
    },
    data(){
        return {
            title1: '',
            title2: '',
            showOne: true
        }
    },
    methods: {
        async setRandomTitle(){
            const len = this.$store.state.products.products.length
            if( len ){
                this.title2 = this.$store.state.products.products[ randInt(len) ].title
                this.title1 = this.$store.state.products.products[ randInt(len) ].title
                this.showOne = !this.showOne
            }
        }
    },

    mounted(){
        this.setRandomTitle()
        setInterval( this.setRandomTitle, 5000)


        // products(){
        //     const number = Math.floor( Math.random() *  (this.$store.state.products.products.length - 9))
        //     return this.$store.state.products.products.slice( number, number+9)
        // }
    }
}

</script>

<style scoped>
    
    @import url('@/assets/main.css');

    .v-enter-active {
        transition: all 0.8s ease-out;
        background: ;
    }

    .v-leave-active {
        transition: all 0.4s cubic-bezier(1, 0.5, 0.8, 1);
    }
    
    .v-enter-from,
    .v-leave-to {
        position: absolute;
        transform: translateX(20px);
        opacity: 0;
    }

    .hero {
        width: 100%;
        height: calc( 100vh - 115px);
        justify-content: center;
        align-items: center;
        display: flex;
        background-image: linear-gradient( to bottom, #252525 0%, #131e3d 50%, #fff) ;

    }

    .hero .message {
        overflow: hidden;
        mix-blend-mode: exclusion;
        padding: 50px;
        text-align: center;
        font-size: 1.4rem;
        color: gold;
    }

  

    .randomProduct {
        object-fit: cover;
        width: 100%;
        height: calc( ( 100vh - 115px) / 3);
        /* filter: grayscale(1) ; */
    }

</style>