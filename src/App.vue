<template>
    <div id="app">
        <header-block/>
        <keep-alive>
            <router-view/>
        </keep-alive>
        <up-button />
    </div>
</template>

<script>
  import headerBlock from './components/headerBlock';
  import UpButton from "./components/upButton";

  const API_URL_MEN = 'https://squashrating.ru/api/';
  const API_URL_WOMEN = 'https://squashrating.ru/api/?isWomen=true';

  export default {
    name: 'app',
    components: {
      UpButton,
      headerBlock,
    },
    mounted() {
      if (!this.$route.path.includes('player')) {
        const apiUrl = getApiUrl(this.$route.path);
        this.$store.dispatch('responsePlayers', apiUrl);
      }
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
        position: relative;
    }

    .globalWrapper {
        margin: 0 12rem;
    }
    @media all and (max-width: 1169px) {
        .globalWrapper {
            margin: 0 9rem;
        }
    }
    @media all and (max-width: 990px) {
        .globalWrapper {
            margin: 0 7rem;
        }
    }
    @media all and (max-width: 768px) {
        .globalWrapper {
            margin: 0 4rem;
        }
    }
    @media all and (max-width: 640px) {
        .globalWrapper {
            margin: 0 2rem;
        }
    }
    @media all and (max-width: 520px) {
        .globalWrapper {
            margin: 0 2rem;
        }
        .isMobileHidden {
            display: none;
        }
    }
    @media all and (max-width: 360px) {
        .isMobileHidden-xs {
            display: none;
        }
    }
</style>
