<template>
    <h1></h1>
</template>

<script>

  export default {
    name: 'player',
    data: () => ({}),
    computed: {
      player() {
        return this.$store.getters.detailPlayer;
        // const storePlayers = this.$store.getters.players;
        // const translitName = this.$route.params.playername;
        // return storePlayers.filter(elem => this.createUrl(elem.name) == translitName)[0];
      },
    },
    mounted() {},
  }
</script>