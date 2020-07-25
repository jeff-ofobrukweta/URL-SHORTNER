import Vue from 'vue'
import Vuex from 'vuex'
import url from './module/url.module'

Vue.use(Vuex)
const debug = process.env.VUE_APP_NODE_ENV !== 'production';


// basse state , mutations and actions leave here ...
export default new Vuex.Store({
    state: {
        loader:true,
    },
    getters: {
        getloading: (state: any) => state.loader,
    },
    mutations: {
        SET_LOADER(state: any, boolstate: boolean) {
            state.loader = boolstate
        },
    },
    modules: {
        url,
    },
    strict: debug,
});
