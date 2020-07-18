import api from '../../utility/api.utility'


const state = {
  urlSummary: {},
}

const getters = {
  getAllUrl: (state: any) => state.urlSummary,
};

const mutations = {
  SET_URL_SUMMARY(state: any, listurl: any) {
    state.urlSummary = listurl
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

}
export default {
  state,
  actions,
  getters,
  mutations
};
