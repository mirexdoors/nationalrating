<template>
    <ul v-if="players && players.length">
        <li>
            <div>#</div>
            <div>Игрок</div>
            <div>Сумма баллов</div>
            <div>8 лучших</div>
            <div>Турниры</div>
            <div>Рейтинг</div>
        </li>
        <li v-for="player of players">
            <div>{{player.place}}</div>
            <div>{{player.name}}</div>
            <div>{{player.summ}}</div>
            <div>{{player.topEight}}</div>
            <div>{{player.tournamentCnt}}</div>
            <div>{{player.rating}}</div>
        </li>
    </ul>
</template>

<script>
  import axios from 'axios';

  const API_URL = 'https://squashrating.ru/api/';
  export default {
    name: 'ratingTable',
    props: {},
    data: () => ({
      players: [
        // {
        //   id: 1,
        //   name: 'Михаил Прокудин',
        //   summ: 6417,
        //   topEight: 6417,
        //   tournamentCnt: 9,
        //   rating: 802.13,
        // },
      ],
    }),
    created() {
      axios.get(API_URL)
        .then(response => {
            const players = Object.entries(response.data.data);
            this.players = players
              .filter(player => {
                return player[1][1];
              })
              .map(player => {
                player = player[1];
                return {
                  place: player[1],
                  name: player[3],
                  summ: player[4],
                  topEight: player[5],
                  tournamentCnt: player[6],
                  rating: player[7],
                }
              });
          }
        )
      ;
    }
  }
</script>

<style scoped>
    ul {
        list-style-type: none;
    }

    li {
        display: flex;
        justify-content: flex-start;
    }
</style>
