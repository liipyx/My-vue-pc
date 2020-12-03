import Vue from "vue";
import App from "./App.vue";

import router from "./router";
import store from "./store"

import "./styles/reset.css";
import "./styles/index.css";
import "./styles/iconfont.css"

import './plugins/element.js'

import "./mock/mockServer"

Vue.config.productionTip = false;

new Vue({
  beforeCreate() {
    Vue.prototype.$bus = this
  },
  render: (h) => h(App),
  router,
  store
}).$mount("#app");
