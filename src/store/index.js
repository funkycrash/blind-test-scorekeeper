import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    players: [
      { id: 1, name: 'Player', score: 0 },
      { id: 2, name: 'player', score: 0 },
      { id: 3, name: 'player', score: 0 },
      { id: 4, name: 'player', score: 0 },
      { id: 5, name: 'player', score: 0 },
    ],
  },
  mutations: {},
  actions: {},
  modules: {},
  getters: {
    numberOfPlayers: function(state) {
      return state.players.length
    },
    getIndexedPlayers: function(state) {
      return state.players.reduce(
        (acc, item) => ((acc[item.id] = item), acc),
        {},
      )
    },
  },
})
