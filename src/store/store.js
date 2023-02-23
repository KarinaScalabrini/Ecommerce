

import { createStore } from 'vuex'

const store = createStore({
  state: {
    produtos: [],
    quantidade: 0
  },
  mutations: {
    adicionarProduto(state, novoProduto) {
      state.produtos.push(novoProduto);
    },
  },
  getters: {
    getProdutos(state) {
      return state.produtos
    },
    getQuantidade(state){
        //  state.produtos.forEach(element => {
        //    state.quantidade +=  element.valor
        //   console.log(element.valor)
        // });
        
        
         console.log(state.quantidade)
        return state.quantidade
    }
  },
  actions: {
    
  },
  modules: {
    // Adicionar módulos aqui
  }
})

export default store




