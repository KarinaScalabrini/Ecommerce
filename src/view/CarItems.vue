<template>
    <div>
        <div>Items: {{ items }}</div>
        <h1>Valor Total: {{ total }}</h1>
        <h3>Quantidade de items: {{ quantidade }}</h3>
    </div>
</template>
<script>
export default {
    data(){
        return{
            total:0,
            items: [],
            quantidade:0,

        }
    }
}
</script>
<style>

</style>