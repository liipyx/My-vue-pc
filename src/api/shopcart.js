import request from "../utils/request"

export const shopcartListRequest = () => {
  return request({
    method: "GET",
    url: "/cart/cartList",
  })
}
export const addShopcartRequest = (skuId,skuNum) => {
  return request({
    method: "POST",
    url: `/cart/addToCart/${skuId}/${skuNum}`,
  })
}

export const goodsCheckRequest = (skuId,isChecked) => {
  return request({
    method: "GET",
    url: `/cart/checkCart/${skuId}/${isChecked}`,
  })
}

export const delGoodsRequest = (skuId) => {
  return request({
    method: "DELETE",
    url: `/cart/deleteCart/${skuId}`,
  })
}