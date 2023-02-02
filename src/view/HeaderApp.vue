<template>
    <div class="HeaderApp">
        <ul>
            <li>HOME</li>
            <li>SHOP</li>
            <li>ABOUT US</li>
            <li>BLOG</li>
            <li>CONTACT US</li>
        </ul>
        <ul>
            <li>LOGIN</li>
            <li>SEARCH</li>
            <li class="bi bi-cart3"><i id="cart" class="addCart" >{{ preco }}</i></li>
        </ul>

    </div>
</template>

<script>

export default {
    data(){
        return{
            numero: '',
            preco: 0,
        }
    }

    

}


</script>
<style>
    .bi-cart3{
        font-size:25px;
        margin-right:25px;
    }
    .HeaderApp{
        max-width:99vw;
        height:6vh;
        background-color:rgb(243, 240, 240);
        display:flex;
        justify-content:space-between;

    }
    .addCart{
        width:18px;
        height:18px;
        border-radius:15px;
        background-color: black;
        position:absolute;
        right:15px;
    }
    ul{
        display:flex;
        flex-direction: row;
        gap:3em;
    }
    li{
        list-style-type: none;
        font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    }
</style>