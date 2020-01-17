import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex);

import count from './modules/countStore.js';
import song from './modules/songStore.js';


const store = new Vuex.Store({
    modules:{
        count,
        song
    }
});


export default store;