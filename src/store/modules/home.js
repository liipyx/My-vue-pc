import { categoryRequest } from "../../api/home";

export default {
  state: {
    categoryList : []
  },
  getters: {},
  actions: {
    async getCategoryList({commit}) {
      const categoryList = await categoryRequest()
      commit('Get_CategoryList',categoryList)
    }
  },
  mutations: {
    Get_CategoryList(state, categoryList) {
      state.categoryList = categoryList
    }
  },
};
