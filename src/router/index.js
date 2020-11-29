import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home";
import Login from "../views/Login";
import Register from "../views/Register";
import Search from "../views/Search";
// import PhoneLogin from "../views/Login/PhoneLogin";

const push = VueRouter.prototype.push;
VueRouter.prototype.push = function(location, onComplete, onAbort = () => {}) {
  push.call(this, location, onComplete, onAbort);
};
const replace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function(location, onComplete, onAbort = () => {}) {
  replace.call(this, location, onComplete, onAbort);
};

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/home:user?",
      component: Home,
    },
    {
      path: "/login",
      component: Login,
      /* meta: {
        isFooterHide: true,
      }, */
      /* children: [
        {
          path: "phoneLogin",
          component: PhoneLogin,
          meta: {
            isFooterHide: true,
          },
        },
      ], */
    },
    {
      path: "/register",
      component: Register,
      meta: {
        isFooterHide: true,
      },
    },
    {
      name: "search",
      path: "/search/:searchText?",
      component: Search,
    },
  ],
});
