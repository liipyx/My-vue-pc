import {
  shopcartListRequest,
  addShopcartRequest,
  goodsCheckRequest,
  delGoodsRequest,
} from "../../api/shopcart";

export default {
  state: {
    shopcartList: [],
    skuNum: 1,
    skuName: "",
    skuUrl: "",
    allCheck: false,
  },
  getters: {},
  actions: {
    async getShopcartList({ commit }) {
      const shopcartList = await shopcartListRequest();
      commit("GET_SHOPCART_LIST", shopcartList);
    },
    async addShopcart({ commit }, { skuId, skuNum, skuName, skuUrl }) {
      await addShopcartRequest(skuId, skuNum);
      commit("ADD_SHOPCART", { skuId, skuNum, skuName, skuUrl });
    },
    async goodsCheck({ commit }, { skuId, isChecked }) {
      await goodsCheckRequest(skuId, isChecked);
      commit("GOODS_CHECK", { skuId, isChecked });
    },
    async delGoods({ commit }, skuId) {
      await delGoodsRequest(skuId)
      commit("DEL_GOODS",skuId)
    }
  },
  mutations: {
    GET_SHOPCART_LIST(state, shopcartList) {
      state.shopcartList = shopcartList;
    },
    ADD_SHOPCART(state, { skuId, skuNum, skuName, skuUrl }) {
      state.shopcartList.map((good) => {
        if (good.skuId === skuId) {
          good.skuNum += skuNum;
        }
        return good;
      });
      state.skuNum = skuNum;
      state.skuName = skuName;
      state.skuUrl = skuUrl;
    },
    GOODS_CHECK(state, { skuId, isChecked }) {
      state.shopcartList.map((good) => {
        if (good.skuId === skuId) {
          good.isChecked = isChecked;
        }
        return good;
      });
      state.allCheck =
        state.shopcartList.reduce((p, c) => {
          return p + c.isChecked;
        }, 0) === state.shopcartList.length
          ? true
          : false;
    },
    ALL_CHECKED(state, isChecked) {
      state.shopcartList.map((good) => {
        good.isChecked = isChecked;
        return good;
      });
      state.allCheck =
        state.shopcartList.reduce((p, c) => {
          return p + c.isChecked;
        }, 0) === state.shopcartList.length
          ? true
          : false;
    },
    DEL_GOODS(state,skuId) {
      state.shopcartList = state.shopcartList.filter(good=>good.skuId !== skuId)
    }
  },
};
