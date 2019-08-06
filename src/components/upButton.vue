<template>
    <button v-on:click="scrollUp" class="upButton">↑</button>
</template>

<script>
  export default {
    name: "up-button",
    methods: {
      scrollUp() {
        let position = document.body.scrollTop || window.pageYOffset;
        const timer = setInterval(function () {
          if (position > 0)
            window.scroll(0, position -= 5);
          else
            clearInterval(timer);
        }, 5);
      }
    }
  }
</script>

<style scoped>
    .upButton {
        position: fixed;
        bottom: 5%;
        right: 15%;
        width: 60px;
        height: 60px;
        padding-bottom: 35px;
        font-weight: 600;
        border: 0;
        color: #ffc107;
        background: #333;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border-radius: 50%;
        cursor: pointer;
    }

    .upButton:after, .upButton:before {
        content: '';
        display: block;
        position: absolute;
        background-color: #ffc107;
        width: 5px;
        height: 5px;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border-radius: 50%;
    }

    .upButton:after {
        left: 35%;
        top: 60%;
    }

    .upButton:before {
        left: 60%;
        top: 56%;
    }
</style>