import api from '../../utility/api.utility'


const state = {
  urlSummary: {},
  urlDetails: {},
}

const getters = {
  getAllUrl: (state: any) => state.urlSummary,
  getsingleUrl: (state: any) => state.urlDetails,
}

const mutations = {
  SET_URL_SUMMARY(state: any, listurl: any) {
    state.urlSummary = listurl
  },
  SET_CREATED_URL(state: any, url: any) {
    state.urlDetails = url
  },
}

const actions = {
  GET_URL_LIST_SUMMARY: async ({ commit, rootState }: any, payload: any) => {
    const { page } = payload
    await new Promise(resolve => api.get(`/fetch?${page}`, payload).then(
      (resp) => {
        if (resp.status >= 200 && resp.status < 400) {
          commit('SET_URL_SUMMARY', resp.data)
          resolve(true)
          return true
        }
        resolve(false)
      },
      (err) => {
        resolve(false)
        throw new Error(err)
      }
    ));
  },
  POST_URL_SUMMARY: async ({ commit, rootState }: any, payload: any) => {
    await new Promise(resolve => api.post('/', payload, null).then(
      (resp) => {
        if (resp.status >= 200 && resp.status < 400) {
          commit('SET_CREATED_URL', resp)
          resolve(true)
          return true
        }
        resolve(false)
      },
      (err) => {
        resolve(false)
        throw new Error(err)
      }
    ));
  },

}
export default {
  state,
  actions,
  getters,
  mutations
};
