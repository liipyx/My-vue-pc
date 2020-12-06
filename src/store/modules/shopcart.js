import { shopcartListRequest,addShopcartRequest,/* goodsCheckRequest,delGoodsRequest */ } from "../../api/shopcart"

export default {
  state: {
    shopcartList:[]
  },
  getters: {
    
  },
  actions : {
    async getShopcartList({commit}) {
      const shopcartList = await shopcartListRequest()
      commit('GET_SHOPCART_LIST',shopcartList)
    },
    async addShopcart({commit},{skuId ,skuNum }) {
      await addShopcartRequest(skuId,skuNum)
      console.log(commit)
    }
  },
  mutations : {
    GET_SHOPCART_LIST(state, shopcartList) {
      state.shopcartList = shopcartList
    }
  }
}