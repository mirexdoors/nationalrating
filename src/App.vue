<template>
  <div id="app">
    <header-block />
    <rating-table />
    <router-view></router-view>
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
    player
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
