<template>
  
  <div >
    <HeaderApp/>
    <SectionApp/>
    <FooterApp/>
  </div>
</template>

<script>
import HeaderApp from './view/HeaderApp.vue'
import SectionApp from './view/SectionProdutos'
import FooterApp from './view/FooterApp'

export default {
  name: 'App',
  components: { 
    HeaderApp,
    SectionApp,
    FooterApp
  }

}
</script>

<style>
#newApp{
  width:100vw;
  height:100vh;
  margin:0px;
  padding:0px;
}
</style>
