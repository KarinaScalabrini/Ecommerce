import { createApp } from 'vue'
import App from './App.vue'
import SectionApp from './view/SectionProdutos'
import HeaderApp from './view/HeaderApp'
import FooterApp from './view/FooterApp'





  const myApp = createApp(App)

  myApp.component('Header-app', HeaderApp)
  myApp.component('Footer-app', FooterApp)
  myApp.component('Section-app', SectionApp)

  myApp.mount('#app')
  
