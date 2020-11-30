import axios from "axios";
import { Message } from "element-ui";

import NProgress from "nprogress";
import "nprogress/nprogress.css";

const instance = axios.create({
  baseURL: "/mock",
  headers: {},
});

instance.interceptors.request.use((config) => {
  NProgress.start();
  return config;
});

instance.interceptors.response.use(
  (response) => {
    NProgress.done();
    if (response.data.code === 200) {
      Message.success("请求成功");
      return response.data.data;
    }
    const message = response.data.message;
    Message.error(message);
    return Promise.reject(response.data.message);
  },
  (err) => {
    NProgress.done();
    const message = err.message || "网络错误";
    Message.error(message);
    return Promise.reject(message);
  }
);

export default instance;
