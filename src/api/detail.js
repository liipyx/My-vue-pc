import request from "../utils/request"

export const detailReq = (id) => {
  return request({
    method: "GET",
    url: `/item/${id}`
  })
}