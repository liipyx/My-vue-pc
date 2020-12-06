import { detailReq } from "../../api/detail"

export default {
  state: {
    detailInfo: {
      categoryView: {},
      spuSaleAttrList: [],
      skuInfo: {}
    }
  },
  getters: {
    categoryView(state) {
      return state.detailInfo.categoryView
    },
    spuSaleAttrList(state) {
      return state.detailInfo.spuSaleAttrList
    },
    skuInfo(state) {
      return state.detailInfo.skuInfo
    }
  },
  actions: {
    async getDetailInfo({commit},id) {
      const detailInfo = await detailReq(id)
      commit('DETAIL_INFO',detailInfo)
    }
  },
  mutations: {
    DETAIL_INFO(state,detailInfo) {
      state.detailInfo = detailInfo
    }
  }
}