import Vue from 'vue'
import Vuex from 'vuex'
import url from './module/url.module'

Vue.use(Vuex)
const debug = process.env.VUE_APP_NODE_ENV !== 'production';

export default new Vuex.Store({
    state: {},
    getters: {},
    mutations: {},
    modules: {
        url,
    },
    strict: debug,
});
