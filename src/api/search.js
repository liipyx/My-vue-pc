import request from "../utils/request"

export const productListRequest = (data) => {
  return request({
    method: "POST",
    url: "/list",
    data
  })
}