import api from '../../api/imgur';
import { router } from '../../main';

const state = {
  images: []
};

const getters = {
  allImages: state => state.images
};

const actions = {
  async fetchImages({ rootState, commit }) {
    const resp = await api.fetchImages(rootState.auth.token)
    commit('setImages', resp.data.data)
  },
  async uploadImages({ rootState }, images) {
    await api.uploadImages(rootState.auth.token, images)
    router.push('/');
  }
};

const mutations = {
  setImages: (state, images) => {
    state.images = images;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
