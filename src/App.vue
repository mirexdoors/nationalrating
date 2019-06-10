<template>
  <div id="app">
    <header-block />
    <rating-table />
  </div>
</template>

<script>
  import headerBlock from './components/header-block';
  import ratingTable from './components/ratingTable';

export default {
  name: 'app',
  components: {
    headerBlock,
    ratingTable
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
