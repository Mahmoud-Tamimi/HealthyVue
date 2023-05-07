import { createStore } from 'vuex'

export default createStore({
  state: {
    search: 'Mahmoud'
  },
  getters: {
  },
  mutations: {
    Clicked () {
      alert('test component')
    }
  },
  actions: {
  },
  modules: {
  }
})
