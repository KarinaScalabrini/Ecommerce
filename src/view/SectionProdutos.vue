<template>
    <div class="SectionApp"  >
        <div class="section1"></div>
        <SectionHeader2/>
        <div class="pesquisa">
            <div class="spanInput">
                <input type="text" placeholder="Search..."/><span class="bi bi-search"></span> 
            </div><span class="bi bi-sliders2"></span>
        </div>
        <div >
            <ItemsProdutos class="section2"/>
        </div>
        <CarItems/> 
    </div>
</template>

<script>
import ItemsProdutos from './ItemsSection.vue'
import SectionHeader2 from './SectionHeader2.vue'
import CarItems from './CarItems.vue'

export default {
      
components:{
    ItemsProdutos, SectionHeader2, CarItems
},

data(){
    return{
       
        }
},
methods:{
    
}
}
</script>
<style>
    .SectionApp{
        width:100%;
        margin:0px;
        top:0px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .section1{
        background-image: url('../components/imagens/headerImg.jpg');
        width:100%;
        height:45vh;
        background-repeat: no-repeat;
        background-size: cover;
        background-position:left;
    }
    .section2{
        display:flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: center;
        gap:2rem;
        margin:5% auto;
    }
    .pesquisa{
        width:50vw;
        height:5vh;
        margin: 0 auto;
        margin-top:3%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .spanInput{
        border:1px solid #C0C0C0;
        border-radius:7px;
        height:5vh;
        width:94%;
        
    }
    input{
        font-size:1.5rem;
        padding-left:2%;
        width:93%;
        height:95%;
        border-radius:8px;
        border:none;
        
    }
    .bi-sliders2{
        padding:8px;
        font-size: 25px;
        border-radius:7px;
        background-color:rgb(160, 134, 86);
        box-shadow:2px 2px 5px 2px #C0C0C0;
        height:3vh;
        margin-top:2px;
    }
    .bi-search{
        margin-left:10px;
    }
</style>