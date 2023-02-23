<template >
    <div >
        <article  v-for="item in produtosF" :key="item.id">
            <img :src='item.url'/>
            <div class="itemProduto">
                <p class="bi bi-plus-circle"  @click="adicionarNovoProduto(item)"></p>
                <h2>{{produtoName = item.name  }}</h2> 
                <h1>{{preco =  item.valor }}</h1>
                
            </div>
            
        </article>
      
    </div>
</template>

<script>

import { useStore } from 'vuex'


export default {
    setup(){
        const store = useStore()
        
        
        function adicionarNovoProduto(item) {

         store.commit('adicionarProduto', item);
            
        }
        return {
            adicionarNovoProduto,
            
        }
        
    },
    data(){
        return{
            produtosF:[{ name:'Colorless Facial ', valor: 2.50 , url:'https://images.pexels.com/photos/2622187/pexels-photo-2622187.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},{ name:'Facial Sunscreen', valor: 1.50, url: 'https://images.pexels.com/photos/4110350/pexels-photo-4110350.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} ,{ name: 'Sunscreen Kids ', valor: 10.50, url:'https://images.pexels.com/photos/5927774/pexels-photo-5927774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} ,{ name:'Urucum Sunless', valor: 14.30 , url:'https://images.pexels.com/photos/7175383/pexels-photo-7175383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} ,{ name:'Bleaching Powder', valor: 5.50, url:'https://images.pexels.com/photos/6621465/pexels-photo-6621465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} ],
            carrinho:  [],
            quantidade: 0,
            produtoName:'',
            total: 0,
            
         
        }
    }, 
    created(){ 
    
    
    },
    updated(){
        
    },
    methods:{
       
    
    
     }
}

</script>
<style>
    
   /* h1{
    margin-bottom:8%;
    text-align: center;
   }
   h2{
    margin-bottom:5%;
   }
   p{
    margin-top:0px;
    margin-bottom: 0%;
   } */
   .itemProduto{
    position:absolute;
    
   }
    article{
        width:30vh;
        height:30vh;
        box-shadow: 2px 2px 5px 2px #C0C0C0;
        border-radius:8px;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;

        
    }
    .bi-plus-circle{
        font-size:35px;
        color:rgb(58, 54, 50);
        margin-bottom:0px;
    }
    .valores{
        font-size:20px;
        font-weight:700;

    }
    /* p , h1 , h2{
        position:absolute;
        
    } */
    

</style>