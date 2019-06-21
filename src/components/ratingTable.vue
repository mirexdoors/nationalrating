<template>
    <div class="rating globalWrapper">
        <ul class="rating__list" v-if="players && players.length">
            <li class="rating__item rating__item_headers">
                <div class="rating__item-content rating__item-content_place">#</div>
                <div class="rating__item-content rating__item-content_name">Игрок</div>
                <div class="rating__item-content">Сумма баллов</div>
                <div class="rating__item-content">8 лучших</div>
                <div class="rating__item-content">Турниры</div>
                <div class="rating__item-content">Рейтинг</div>
            </li>
            <li class="rating__item" v-for="(player, index) of players" v-bind:key="player.name">
                <div class="rating__item-content rating__item-content_place">
                    <router-link class="rating__item-link" :to="createUrl(player.name)">{{index + 1}}</router-link>
                </div>
                <div class="rating__item-content rating__item-content_name">
                    <router-link class="rating__item-link" :to="createUrl(player.name)">{{player.name}}</router-link>
                </div>
                <div class="rating__item-content">
                    <router-link class="rating__item-link" :to="createUrl(player.name)">{{player.summ}}</router-link>
                </div>
                <div class="rating__item-content">
                    <router-link class="rating__item-link" :to="createUrl(player.name)">{{player.topEight}}
                    </router-link>
                </div>
                <div class="rating__item-content">
                    <router-link class="rating__item-link" :to="createUrl(player.name)">{{player.tournamentCnt}}
                    </router-link>
                </div>
                <div class="rating__item-content">
                    <router-link class="rating__item-link" :to="createUrl(player.name)">{{player.rating}}</router-link>
                </div>
            </li>
        </ul>
    </div>

</template>

<script>
  import axios from 'axios';

  const API_URL = 'https://squashrating.ru/api/';
  export default {
    name: 'ratingTable',
    props: {},
    data: () => ({
      players: [],
    }),
    methods: {},
    mounted() {
      this.players = getPlayers(API_URL);
    }
  }

  const getPlayers = (url) => {
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
          place: player[1],
          name: player[3],
          summ: player[4],
          topEight: player[5],
          tournamentCnt: player[6],
          rating: player[7],
        });
      });
    });
    return result;
  }
</script>

<style scoped>
    .globalWrapper {
        margin: 0 80px;
    }

    .rating__list {
        width: 100%;
        list-style-type: none;
    }

    .rating__item {
        display: flex;
        justify-content: flex-start;
        font-size: 18px;
    }

    .rating__item:nth-child(odd) {
        background-color: rgba(0, 0, 0, 0.1);
    }

    .rating__item.rating__item_headers {
        color: #ffc107;
        font-weight: 600;
        background-color: #333;
    }

    .rating__item-link {
        display: block;
        padding: 15px;
        color: #333;
        text-decoration-line: none;
    }

    .rating__item-content {
        width: 15%;
        text-align: start;
    }

    .rating__item_headers .rating__item-content {
        padding: 15px;
    }

    .rating__item-content_place {
        width: 5%;
        padding-left: 10px;
        font-weight: 600;
    }

    .rating__item-content_name {
        width: 35%;
    }
</style>
