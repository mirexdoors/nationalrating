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
    detailPlayer: null
  },
  getters: {
    players(state) {
      return state.players;
    },
    detailPlayer(state) {
      return state.detailPlayer;
    },
  },
  mutations: {
    setPlayersMen(state, players) {
      state.players.men = players;
    },
    setPlayersWomen(state, players) {
      state.players.women = players;
    },
    setDetailPlayer(state, player) {
      state.detailPlayer = player;
    }
  },
  actions: {
    setDetailPlayer({commit}, player) {
      commit('setDetailPlayer', player);
    },
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
              let gender = 'women';
              if (!player[2]) {
                player[2] = '0';
              }

              if (url === 'https://squashrating.ru/api/') {
                gender = 'men';
              }
              result.push({
                place: player[0],
                past: player[1],
                movement: player[2],
                name: player[3],
                summ: player[4],
                topEight: player[5],
                tournamentCnt: player[6],
                rating: player[7],
                gender: gender,
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
