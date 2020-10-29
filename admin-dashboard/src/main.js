import Vue from 'vue'
import {routes} from './router/index'
import VueRouter from 'vue-router'
import App from './App.vue'
import './quasar'
import store from './vuexStore/index';

Vue.config.productionTip = false

Vue.use(VueRouter);

let router = new VueRouter({mode: 'history', routes})
new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
