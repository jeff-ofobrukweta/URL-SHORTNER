import Vue from 'vue'
import Vuex from 'vuex'
import url from './module/url.module'

Vue.use(Vuex)
const debug = process.env.VUE_APP_NODE_ENV !== 'production';


// basse state , mutations and actions leave here ...
export default new Vuex.Store({
    state: {
        loader:false,
        createloding:false,
        deleteloding:false,
    },
    getters: {
        getloading: (state: any) => state.loader,
        getcreateloading: (state: any) => state.createloding,
        deleteloading: (state: any) => state.deleteloding,
    },
    mutations: {
        SET_LOADER(state: any, boolstate: boolean) {
            state.loader = boolstate
        },
        SET_CREATE_LOADER(state: any, loading: boolean) {
            state.createloding = loading
        },
        SET_DELETED_LOADER(state: any, loading: boolean) {
            state.deleteloding = loading
        },
    },
    modules: {
        url,
    },
    strict: debug,
});
