import { productListRequest } from "../../api/search"

export default {
  state: {
    productionList : {
      trademarkList: [],
      attrsList: [],
      goodsList: []
    }
  },
  getters: {
    trademarkList(state) {
      return state.productionList.trademarkList
    },
    attrsList(state) {
      return state.productionList.attrsList
    },
    goodsList(state) {
      return state.productionList.goodsList
    }
  },
  actions : {
    async getProductionList({commit},data = {}) {
      const productionList = await productListRequest(data)
      commit('GET_PRODUCTIONLIST',productionList)
    }
  },
  mutations : {
    GET_PRODUCTIONLIST(state,productionList) {
      state.productionList = productionList
    }
  }
}