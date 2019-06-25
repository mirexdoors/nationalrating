import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const API_URL = 'https://squashrating.ru/api/';
export const store = new Vuex.Store({
  state: {
    players: null,
  },
  getters: {
   players(state) {
      return state.players;
    },
    player(state) {
      return state.players.filter();
    }
  },
  mutations: {
    setPlayers(state, payload) {
      state.players = payload;
    },
  },
  actions: {
    responsePlayers({commit}) {
      const result = [];
      axios.get(API_URL)
      .then(response => {
        Object.entries(response.data.data)
        .filter(player => {
          return player[1][1];
        })
        .map(player => {
          player = player[1];
          result.push({
            place: player[1],
            name: player[3],
            summ: player[4],
            topEight: player[5],
            tournamentCnt: player[6],
            rating: player[7],
          });
        });
      });
      commit('setPlayers', result);
    },
  },
});
