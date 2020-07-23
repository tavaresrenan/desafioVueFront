import App from './App.vue';
import Vue from 'vue';
import VueRouter from "./router/index";
import ApiService from './services/api.service';

Vue.config.productionTip = false
Vue.config.ignoredElements = ['ion-icon']

ApiService.init();

new Vue({
  render: h => h(App),
  router: VueRouter
}).$mount('#app')