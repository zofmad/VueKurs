import { createStore } from 'vuex'
import axios from 'axios'
import apiUrl from '../config.js'

export default createStore({
  state: {
    categories: [
      'casual',
      'fashion'
    ]
  },
  mutations: {
    UPDATE_CATEGORIES (state, data) {
      state.categories = data
    }
  },
  actions: {
    async fetchCategories ({ commit }) {
      const res = await axios.get(`${apiUrl}/categories`)
      commit('UPDATE_CATEGORIES', res.data)
    }
  },
  getters: {
    categoriesAmount (state) {
      return state.categories.length
    }
  },
  modules: {
  }
})
