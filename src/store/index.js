import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);


export const store = new Vuex.Store({
  state: {
    players: {
      men: null,
      women: null,
    },
  },
  getters: {
   players(state) {
      return state.players;
    }
  },
  mutations: {
    setPlayersMen(state, payload) {
      state.players.men = payload;
    },
    setPlayersWomen(state, payload) {
      state.players.women = payload;
    },
  },
  actions: {
    responsePlayers({commit}, url) {
      const result = [];
      axios.get(url)
      .then(response => {
        Object.entries(response.data.data)
        .filter(player => {
          return player[1][1];
        })
        .map(player => {
          player = player[1];
          result.push({
            place: player[0],
            name: player[3],
            summ: player[4],
            topEight: player[5],
            tournamentCnt: player[6],
            rating: player[7],
          });
        });
      });
      if (url === 'https://squashrating.ru/api/') {
        commit('setPlayersMen', result);
      } else {
        commit('setPlayersWomen', result);
      }

    },
  },
});
