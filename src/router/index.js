import Vue from "vue";
import VueRouter from "vue-router";

import store from "../store"

import Home from "../views/Home";
import Login from "../views/Login";
import Register from "../views/Register";
import Search from "../views/Search";
import Detail from "../views/Detail"
import AddCartSuccess from "../views/AddCartSuccess"
import ShopCart from "../views/ShopCart"
import Trade from "../views/Trade"
import Pay from "../views/Pay"
import Center from "../views/Center"

const push = VueRouter.prototype.push;
VueRouter.prototype.push = function(location, onComplete, onAbort = () => {}) {
  push.call(this, location, onComplete, onAbort);
};
const replace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function(location, onComplete, onAbort = () => {}) {
  replace.call(this, location, onComplete, onAbort);
};

Vue.use(VueRouter);

const router = new VueRouter({
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
      meta: {
        isFooterHide: true,
      },
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
    {
      name: 'detail',
      path: '/detail/:id',
      component:Detail
    },
    {
      name: 'addCartSuccess',
      path: '/addCartSuccess',
      component: AddCartSuccess,
      /* beforeEnter: (to, from, next) => {
        console.log(store.state)
        if (from.name === "detail" && store.state.shopcart.skuName) {
          return next()
        }
        next("/shopcart")
      } */
    },
    {
      name: 'shopcart',
      path: '/shopcart',
      component:ShopCart
    },
    {
      name: 'trade',
      path: '/trade',
      component: Trade
    },
    {
      name: 'pay',
      path: '/pay',
      component: Pay
    },
    {
      name: 'center',
      path: '/center',
      component: Center
    }
  ],
  scrollBehavior() {
    return {
      x: 0,
      y: 0
    }
  }
});

const permissionPaths = ["/trade","/pay","/center"]
router.beforeEach((to, from, next) => {
  if (permissionPaths.indexOf(to.path) > -1 && !store.state.user.token) {
    next("/login")
  }
  next()
})

export default router
