<template>
    <div class="sectionHeader2">
        <div class="boxes" v-for="item in boxes" :key="item.id">
            <h5>{{ item }}</h5>
        </div>

    </div>
</template>
<script>

export default{
    data(){
        return{
            boxes: ['ORGANIC', 'RICH AROMA', 'MATCHA TEA', 'EARL GREY'],
        }
    }
}

</script>

<style>
.sectionHeader2{
    width:100%;
    height:25vh;
    background-color:rgb(243, 240, 240);
    display: flex;
    justify-content: space-around;
    align-items:center;
    flex-direction: row;
}
.boxes{
    width:19%;
    height:80%;
    background-color: #fff;
    box-shadow: 2px 2px 5px 2px #C0C0C0;
    font-size: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    
}
.boxes:nth-child(1){
    background-image: url('https://images.pexels.com/photos/3604314/pexels-photo-3604314.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
    background-position: 80%;
}
.boxes:nth-child(2){
    background-image: url('https://images.pexels.com/photos/3273989/pexels-photo-3273989.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
    background-position: 50%;
}
.boxes:nth-child(3){
    background-image: url('https://images.pexels.com/photos/4210370/pexels-photo-4210370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
    background-position: 10%;
}
.boxes:nth-child(4){
    background-image: url('https://images.pexels.com/photos/3737575/pexels-photo-3737575.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
    background-position: 20%;
}

img{
    width:100%;
    height:100%;
}
h5{
    position:absolute;
}
</style>