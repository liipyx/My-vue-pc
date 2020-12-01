import request from "../utils/request";
import mockRequest from "../utils/mockRequest";

export const categoryRequest = () => {
  return request({
    method: "GET",
    url: "/product/getBaseCategoryList",
  });
};

export const bannerRequest = () => {
  return mockRequest({
    method: "GET",
    url: "/banners",
  });
};

export const floorRequest = () => {
  return mockRequest({
    method: "GET",
    url:"/floors"
  })
}

