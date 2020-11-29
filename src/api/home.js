import request from "../utils/request";

export const categoryRequest = () => {
  return request({
    method: "GET",
    url: "/product/getBaseCategoryList",
  });
};
