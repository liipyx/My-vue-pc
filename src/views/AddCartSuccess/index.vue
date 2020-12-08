<template>
  <div class="success-wrap">
    <div class="add-cart-success">
      <div class="tips">
        <span class="iconfont icon-icon-check-empty"></span
        >商品已成功加入购物车!
      </div>
      <div class="cart-wrap">
        <div class="cart-good">
          <div class="good-img">
            <img :src="skuUrl" alt="" />
          </div>
          <div class="good-info">
            <p class="good-title">{{ skuName }}</p>
            <p class="good-attr">颜色：五彩斑斓的黑 数量：{{ skuNum }}</p>
          </div>
        </div>
        <div class="cart-btns">
          <button>查看商品详情</button>
          <router-link to="/shopcart"
            ><button>去购物车结算 ></button></router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "addCartSuccess",
  computed: {
    ...mapState({
      skuNum: (state) => state.shopcart.skuNum,
      skuName: (state) => state.shopcart.skuName,
      skuUrl: (state) => state.shopcart.skuUrl,
    }),
  },
  beforeRouteEnter:(to,from,next)=>{
    next(vm=>{
      console.log(from)
      if(vm.skuName){
        return next()
      }
      next("/shopcart")
    })
  }
};
</script>

<style lang="less" scoped>
.success-wrap {
  background-color: #f4f4f4;
}
.add-cart-success {
  width: 1200px;
  margin: 0 auto;
}
.tips {
  height: 30px;
  line-height: 30px;
  font-size: 16px;
  padding: 10px 0;
  display: flex;
  align-items: center;
  color: cadetblue;
}
.icon-icon-check-empty {
  font-size: 30px;
  margin-right: 5px;
}
.cart-wrap {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
}
.good-img {
  width: 60px;
  height: 60px;
  border: 1px solid #ccc;
  img {
    width: 100%;
  }
}
.cart-good {
  display: flex;
}
.good-info {
  margin-left: 20px;
}
.good-title {
  height: 28px;
  line-height: 28px;
  font-size: 14px;
}
.good-attr {
  color: #aaa;
}
.cart-btns {
  button {
    padding: 7px 36px;
    font-size: 15px;
    border: 1px solid #ccc;
    outline: none;
    margin-left: -1px;
  }
}
</style>
