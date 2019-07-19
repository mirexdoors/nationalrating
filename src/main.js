import Vue from 'vue';
import App from './App.vue';
import {store} from "./store/index";
import router from './routes';
import {translit} from "./mixins/mixins";

Vue.config.productionTip = false;

Vue.mixin({
  methods: {
    translit
  }
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
