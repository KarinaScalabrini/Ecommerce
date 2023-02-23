<template >
    <div class="carrinho" >
        <div class="item" v-for="card in prod"  :key="card.id"  ><img class="imgItem"  :src="card.url" />{{ card.name }} <span class="bi bi-dash-circle-fill"></span></div>
        <h1>Valor Total:{{ quant }}</h1>
        <h3>Quantidade de items: </h3>
    </div>
</template>
<script>

import { computed } from 'vue'
import { useStore } from 'vuex'


export default {
    data(){
        return{
            
        }
    },
    setup(){
        const store = useStore()
        const prod = computed(() => store.getters.produtos)
        const quant = computed(() => store.getters.getQuantidade)
        return {
             prod,
             quant
                      
        }
       
    },
    mounted(){
        
    },
    create(){
       
        
    },
    methods:{

        // remover(i,e){
        //     const el= e.target.parentNode;
        //     el.parentNode.removeChild(el);
        //     this.$emit('removerCarrinho', i)
        //     this.itemF.forEach((elemento, index)=>{
        //      //   console.log(el.innerText, elemento.name)
        //         if(el.innerText === elemento.name){
                    
        //             console.log(this.itemF,index)
        //         }
        //     })
        }
    }

</script>
<style>

    .carrinho{
        width:60vw;
        border:1px solid #d1cdcd;
        border-radius:8px;
        background-color:rgb(243, 240, 240);
        display: flex;
        align-items: center;
        flex-direction: column;
        margin: 0 auto;
        
    }
    .imgItem{
        width:70px;
        height:60px;
    }
    .item{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 1em;
        margin-top: 15px;
        background-color: rgb(219, 216, 216);
        width: 60%;
        border-radius: 8px;
        box-shadow: 2px 2px 5px 2px #c0c0c0;
    }
    .bi-dash-circle-fill{
        font-size: 25px;
        

    }

</style>