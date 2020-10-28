import Vuex from 'vuex';
import Vue from 'vue';
import schedule from './modules/schedule';
// BRING ALL MODULES AND COMBINE THEM TOGETHER

// LOAD VUEX
Vue.use(Vuex)

// CREATE STORE
export default new Vuex.Store({
    modules: {
        schedule
    }
});