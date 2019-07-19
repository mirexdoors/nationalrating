<template>
    <h1></h1>
</template>

<script>

  export default {
    name: 'player',
    data: () => ({}),
    computed: {
      player() {
        if (this.$store.getters.detailPlayer) {
          return this.$store.getters.detailPlayer;
        };
      },
    },
    mounted() {},
  }
</script>