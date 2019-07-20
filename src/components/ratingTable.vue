<template>
    <section class="rating">
        <div class="rating__filter globalWrapper">
            <input name="query" aria-placeholder="Найти игрока" placeholder="Найти игрока" class="rating__filterInput"
                   v-model="searchQuery">
        </div>
        <div class="globalWrapper">
            <ul class="rating__list" v-if="filterPlayers && filterPlayers.length">

                <li class="rating__item rating__item_headers">
                    <div class="rating__item-content rating__item-content_place">#</div>
                    <div class="rating__item-content rating__item-content_name">Игрок</div>
                    <div class="rating__item-content">Сумма баллов</div>
                    <div class="rating__item-content">8 лучших</div>
                    <div class="rating__item-content">Турниры</div>
                    <div class="rating__item-content">Рейтинг</div>
                </li>
                <li class="rating__item" v-for="player of filterPlayers" v-bind:key="player.name">
                    <div class="rating__item-content rating__item-content_place">
                        <router-link class="rating__item-link" :to="translit(player.name, true)">{{player.place}}
                        </router-link>
                    </div>
                    <div class="rating__item-content rating__item-content_name">
                        <router-link class="rating__item-link" :to="translit(player.name, true)">{{player.name}}
                        </router-link>
                    </div>
                    <div class="rating__item-content">
                        <router-link class="rating__item-link" :to="translit(player.name, true)">{{player.summ}}
                        </router-link>
                    </div>
                    <div class="rating__item-content">
                        <router-link class="rating__item-link" :to="translit(player.name, true)">{{player.topEight}}
                        </router-link>
                    </div>
                    <div class="rating__item-content">
                        <router-link class="rating__item-link" :to="translit(player.name, true)">{{player.tournamentCnt}}
                        </router-link>
                    </div>
                    <div class="rating__item-content">
                        <router-link class="rating__item-link" :to="translit(player.name)">{{player.rating}}
                        </router-link>
                    </div>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>

  export default {
    name: 'ratingTable',
    props: {},
    data: () => ({
      searchQuery: '',
    }),
    methods: {},
    computed: {
      filterPlayers() {
        let storePlayers = this.$store.getters.players.men;
        if (this.$route.path === '/women/') {
          storePlayers = this.$store.getters.players.women;
        }

        if (this.searchQuery.length === 0) {
          return storePlayers;
        }
        return storePlayers.filter(item => {
          return item.name.includes(this.searchQuery);
        });
      },
    },
    /*set player in store*/
    beforeRouteLeave(to, from, next) {
      const playerName = to.params.playername;
      /*find player in vuex*/
      const detailPlayer = this.filterPlayers.filter(item => {
        if (this.translit(item.name) === playerName) return item;
      })[0];

      if (detailPlayer) {
        this.$store.dispatch('setDetailPlayer', detailPlayer);
      }
      next();
    }
  }
</script>

<style scoped>

    .rating__filter {
        background-color: #333;
        padding: 1rem 0;
    }

    .rating__filterInput {
        width: 100%;
        padding: 0 1.5rem;
        line-height: 2;
        font-size: 18px;
    }

    .rating__filterInput:active, .rating__filterInput:focus {
        outline-color: #ffc107;
        -moz-outline-color: #ffc107;
        outline-offset: -3px;
        outline-style: solid;
        outline-width: 2px;
    }

    .rating__list {
        width: 100%;
        margin: 0;
        padding: 0;
        list-style-type: none;
        background-color: #fff;
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
