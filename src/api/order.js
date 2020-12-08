import request from "../utils/request"

export const orderTradeRequest = () => {
  return request({
    method: "GET",
    url: "/order/auth/trade"
  })
}