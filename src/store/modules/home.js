import { categoryRequest,bannerRequest } from "../../api/home";

export default {
  state: {
    categoryList: [],
    banners:[]
  },
  getters: {},
  actions: {
    async getCategoryList({commit}) {
      const categoryList = await categoryRequest()
      commit('Get_CategoryList',categoryList)
    },
    async getBanners({ commit }) {
      const banners = await bannerRequest()
      commit('GET_BANNERS',banners)
    }
  },
  mutations: {
    Get_CategoryList(state, categoryList) {
      state.categoryList = categoryList
    },
    GET_BANNERS(state, banners) {
      state.banners = banners
    }
  },
};
