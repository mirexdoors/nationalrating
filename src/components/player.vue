<template>
<h1>{{$route.params.name}}</h1>
</template>

<script>

  export default {
    name: 'player',
    data: () => ({
     player: {}
    }),
  }
</script>