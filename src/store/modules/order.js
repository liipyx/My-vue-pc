import { submitOrderRequest } from "../../api/order"

export default {
  state: {
    orderId:0
  },
  getters: {
    
  },
  actions: {
    async submitOrder({commit},{tradeNo,consignee,consigneeTel,deliveryAddress,paymentWay,orderComment,orderDetailList}) {
      const orderId = await submitOrderRequest(tradeNo,consignee,consigneeTel,deliveryAddress,paymentWay,orderComment,orderDetailList)
      commit("SUBMIT_ORDER",orderId)
    }
  },
  mutations: {
    SUBMIT_ORDER(state, orderId) {
      state.orderId = orderId
    }
  }
}