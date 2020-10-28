import Vue from 'vue'
import App from './App.vue'
import './quasar'
import store from './vuexStore/index';
Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
