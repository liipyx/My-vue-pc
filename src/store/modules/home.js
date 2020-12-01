import { categoryRequest,bannerRequest ,floorRequest} from "../../api/home";

export default {
  state: {
    categoryList: [],
    banners: [],
    floors: []
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
    },
    async getFloors({ commit }) {
      const floors = await floorRequest()
      commit('GET_FLOORS',floors)
    }
  },
  mutations: {
    Get_CategoryList(state, categoryList) {
      state.categoryList = categoryList
    },
    GET_BANNERS(state, banners) {
      state.banners = banners
    },
    GET_FLOORS(state, floors) {
      state.floors = floors
    }
  },
};
