<template>
    <div id="app">
        <header-block/>
        <keep-alive>
            <router-view/>
        </keep-alive>
    </div>
</template>

<script>
  import headerBlock from './components/headerBlock';

  const API_URL_MEN = 'https://squashrating.ru/api/';
  const API_URL_WOMEN = 'https://squashrating.ru/api/?isWomen=true';

  export default {
    name: 'app',
    components: {
      headerBlock,
    },
    mounted() {
      const apiUrl = getApiUrl(this.$route.path);
      this.$store.dispatch('responsePlayers', apiUrl);
    },
    updated() {
      const apiUrl = getApiUrl(this.$route.path);
      if ((!this.$store.getters.players.men && apiUrl === API_URL_MEN) || (!this.$store.getters.players.women && apiUrl === API_URL_WOMEN))
        this.$store.dispatch('responsePlayers', apiUrl);
    }
  }

  const getApiUrl = (path) => {
    let apiUrl = API_URL_MEN;
    if (path === '/women/') {
      apiUrl = API_URL_WOMEN;
    }
    return apiUrl
  }
</script>

<style>
    * {
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }

    body {
        margin: 0;
        background-color: #333;
    }

    #app {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
    }

    .globalWrapper {
        margin: 0 80px;
    }
</style>
