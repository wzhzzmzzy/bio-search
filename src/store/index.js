import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showAppDrawer: null,
    showHistory: false,
    searchText: '',
    searchHistory: []
  },
  mutations: {
    TOGGLE_APP_DRAWER (state) {
      state.showAppDrawer = !state.showAppDrawer
    },
    SET_HISTORY_VISIBLE (state, { visible }) {
      state.showHistory = visible
    },
    SET_SEARCH_TEXT (state, { text }) {
      state.searchText = text
    },
    INIT_SEARCH_HISTORY (state) {
      const oldHistory = localStorage.getItem('searchHistory')
      if (oldHistory) {
        state.searchHistory = JSON.parse(oldHistory)
      }
    },
    CLEAR_SEARCH_HISTORY (state) {
      state.searchHistory = []
      localStorage.setItem('searchHistory', '[]')
    },
    ADD_SEARCH_HISTORY (state, { target }) {
      state.searchHistory.unshift({
        target,
        searchText: state.searchText,
        time: new Date().valueOf()
      })
      localStorage.setItem('searchHistory', JSON.stringify(state.searchHistory))
    }
  },
  actions: {
  },
  modules: {
  }
})
