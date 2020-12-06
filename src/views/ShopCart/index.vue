<template>
  <div class="shop-cart">
    <div class="all-goods">全部商品</div>
    <div class="cart-head">
      <p class="all">全部</p>
      <p class="goods">商品</p>
      <p class="price-title">单价（元）</p>
      <p class="count">数量</p>
      <p class="all-price">小计（元）</p>
      <p class="handle">操作</p>
    </div>
    <ul class="cart-list">
      <li class="cart-item" v-for="good in shopcartList" :key="good.id">
        <div class="check" value="good.isChecked"><input type="checkbox" /></div>
        <div class="img-wrap">
          <div class="img">
            <img :src="good.imgUrl" />
          </div>
          <p class="good-name">{{good.skuName}}</p>
        </div>
        <div class="price">{{good.skuPrice}}</div>
        <div class="count-btn">
          <el-input-number
            size="mini"
            v-model="good.skuNum"
            :min="1"
            :max="10"
            label="描述文字"
          ></el-input-number>
        </div>
        <div class="total-price">{{good.skuNum * good.cartPrice}}</div>
        <div class="handle-btn">
          <a href="">删除</a>
          <a href="">移到收藏</a>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import {mapState,mapActions} from "vuex"

export default {
  name: "ShopCart",
  data() {
    return {
      skuNum: 1,
    };
  },
  computed:{
    ...mapState({
      shopcartList:(state)=>state.shopcart.shopcartList
    })
  },
  methods: {
    ...mapActions(['getShopcartList'])
  },
  mounted(){
    this.getShopcartList()
  }
};
</script>

<style lang="less" scoped>
.shop-cart {
  width: 1200px;
  margin: 0 auto;
}
.all-goods {
  font-size: 14px;
  font-weight: bold;
  margin: 10px 0;
}
.cart-head {
  padding: 10px;
  display: flex;
  justify-content: space-between;
  background-color: #f5f5f5;
  border: 1px solid #ddd;
  .all {
    width: 60px;
  }
  .goods {
    width: 320px;
  }
  .price-title {
    width: 160px;
  }
  .count {
    width: 190px;
  }
  .all-price {
    width: 175px;
  }
  .handle {
    width: 175px;
  }
  .cart-list {
    margin-top: 15px;
  }
}
.cart-list{
  margin-top: 15px;
}
.cart-item {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border: 1px solid #ddd;
  margin-top: -1px;
}
.check {
  width: 60px;
}
.img-wrap {
  width: 320px;
  display: flex;
}
.img {
  width: 82px;
  height: 82px;
  img{
    width: 82px;
  }
}
.good-name {
  margin-left: 10px;
}
.price {
  width: 160px;
}
.count-btn {
  width: 190px;
}
.total-price {
  width: 175px;
}
.handle-btn {
  width: 175px;
  display: flex;
  flex-direction: column;
}
</style>
