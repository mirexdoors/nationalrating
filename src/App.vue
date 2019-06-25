<template>
    <div id="app">
        <header-block/>
        <router-view />
    </div>
</template>

<script>
  import headerBlock from './components/headerBlock';
  import ratingTable from './components/ratingTable';
  import player from './components/player';

  export default {
    name: 'app',
    components: {
      headerBlock,
      ratingTable,
      player,
    },
    mounted() {
      this.$store.dispatch('responsePlayers');
    }
  }
</script>

<style>
    * {
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
