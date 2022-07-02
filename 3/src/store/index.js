import { createStore } from 'vuex'
import axios from 'axios'
// import apiUrl from '../config.js'

export default createStore({
  state: {
    categories: [
      'casual',
      'fashion'
    ],
    photos: []
  },
  mutations: {
    UPDATE_CATEGORIES (state, data) {
      state.categories = data
    },
    UPDATE_PHOTOS (state, data) {
      state.photos = data
    }
  },
  actions: {
    async fetchCategories ({ commit }) {
      const res = await axios.get('http://localhost:8000/api/categories')
      commit('UPDATE_CATEGORIES', res.data)
    },
    async fetchPhotos ({ commit }, page) {
      const res = await axios.get(`http://localhost:8000/api/photos/${page}`)
      commit('UPDATE_PHOTOS', res.data)
    },
    async fetchCategoryPhotos ({ commit }, { category, page }) {
      const res = await axios.get(`http://localhost:8000/api/photos/${category}/${page}`)
      commit('UPDATE_PHOTOS', res.data)
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
