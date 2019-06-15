import Vue from 'vue';
import App from './App.vue';
import router from './routes';
import {createUrl} from "./mixins/mixins";

Vue.config.productionTip = false;

Vue.mixin({
  methods: {
    createUrl
  }
});

new Vue({
  router,
  render: h => h(App),

}).$mount('#app');
