<template>
    <header>
        <div class="box-limit">
            <h1>dummy products</h1>
            <nav>
                <input type="text">
                <ul>
                    <li>
                        fil
                    </li>
                    <li>
                        lof
                    </li>
                    <li>
                        cart
                    </li>
                </ul>
            </nav>
        </div>
  </header>
</template>

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
        /* padding: 0 0 20px; */
        font-size: 1.5rem;
        padding-bottom: 15px;
    }

    nav, ul {
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
        min-width: 30vw;

    }
    li{
        /* margin: 0 20px; */
    }
    input {
        background-color: rgba( 0, 0, 0, .3);
        border: solid 1px rgba(255, 255, 255, .3);
        color: rgba(67, 203, 161);
        padding: 5px 10px;
        width: max(40vw, 310px);
        border-radius: 10px;
        font-size: 1.5rem;
    }

</style>