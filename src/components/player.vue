<template>
    <section class="player globalWrapper">
        <h2 class="player__title">{{player.name}}</h2>
        <ul class="player__statsList">
            <li class="player__statsItem">
                <div class="player__statsTitle">Место</div>
                <div class="player__statsValue">{{player.place}}</div>
            </li>
            <li class="player__statsItem">
                <div class="player__statsTitle">Место (прошлая неделя)</div>
                <div class="player__statsValue">{{player.past}}</div>
            </li>
            <li class="player__statsItem">
                <div class="player__statsTitle">Движение</div>
                <div class="player__statsValue">{{player.movement}}</div>
            </li>
            <li class="player__statsItem">
                <div class="player__statsTitle">Рейтинг</div>
                <div class="player__statsValue">{{player.rating}}</div>
            </li>
            <li class="player__statsItem">
                <div class="player__statsTitle">Сумма баллов</div>
                <div class="player__statsValue">{{player.summ}}</div>
            </li>
            <li class="player__statsItem">
                <div class="player__statsTitle">8 лучших</div>
                <div class="player__statsValue">{{player.topEight}}</div>
            </li>
            <li class="player__statsItem">
                <div class="player__statsTitle">Количество турниров</div>
                <div class="player__statsValue">{{player.tournamentCnt}}</div>
            </li>
        </ul>
    </section>
</template>

<script>

  export default {
    name: 'player',
    data: () => ({}),
    computed: {
      player() {
        if (this.$store.state.detailPlayer) {
          return this.$store.state.detailPlayer;
        }
        return false;
      },
    },
    mounted() {
    },
  }
</script>
<style scoped>
    .player {
        padding: 1rem;
        background-color: #fff;
    }

    .player__title {
        font-size: 2.5rem;
        font-weight: 400;
        text-align: left;
    }

    .player__statsList {
        width: 30%;
        padding: 0;
        list-style-type: none;
    }

    .player__statsItem {
        display: flex;
        justify-content: space-between;
        width: 100%;
        padding: .5rem 1.5rem;
        font-size: 1.2rem;
    }

    .player__statsItem:nth-child(odd) {
        background-color: rgba(0, 0, 0, 0.1);
    }

    .player__statsTitle {
        font-weight: 400;
    }
</style>