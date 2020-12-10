import request from "../utils/request"

export const orderTradeRequest = () => {
  return request({
    method: "GET",
    url: "/order/auth/trade"
  })
}

export const submitOrderRequest = (tradeNo,consignee,consigneeTel,deliveryAddress,paymentWay,orderComment,orderDetailList) => {
  return request({
    method: "POST",
    url: `/order/auth/submitOrder?tradeNo=${tradeNo}`,
    data: {
      consignee,
      consigneeTel,
      deliveryAddress,
      paymentWay,
      orderComment,
      orderDetailList
    }
  })
}

export const orderPayRequest = (orderId) => {
  return request({
    method: "GET",
    url: `/payment/weixin/createNative/${orderId}`,
  })
}

export const payStateRequest = (orderId) => {
  return request({
    method: "GET",
    url: `/payment/weixin/queryPayStatus/${orderId}`,
  })
}

export const orderListRequest = (page,limit) => {
  return request({
    method: "GET",
    url: `/order/auth/${page}/${limit}`,
  })
}