import Vue from 'vue';
import VueRouter from 'vue-router';
import player from '../components/player.vue';
import rating from '../components/ratingTable.vue';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/player/:gender/:playername/',
      component: player,
    },
    {
      path: '/',
      component: rating,
    },
    {
      path: '/women/',
      component: rating,
    },
  ],
});