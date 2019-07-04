<template>
    <h1>{{player.name}}</h1>
</template>

<script>

  export default {
    name: 'player',
    data: () => ({}),
    computed: {
      player() {
        const storePlayers = this.$store.getters.players;
        const translitName = this.$route.params.playername;
        return storePlayers.filter(elem => this.createUrl(elem.name) == translitName)[0];
      },
    },
    mounted() {},
  }
</script>