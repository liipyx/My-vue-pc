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
        <div class="check">
          <input
            type="checkbox"
            :checked="good.isChecked === 1 ? true : false"
            @click="togolCheck(good.skuId, $event)"
          />
        </div>
        <div class="img-wrap">
          <div class="img">
            <img :src="good.imgUrl" />
          </div>
          <p class="good-name">{{ good.skuName }}</p>
        </div>
        <div class="price">{{ good.skuPrice }}</div>
        <div class="count-btn-wrap">
          <div class="count-btn">
            <button
              @click="updataCount(good.skuId, -1)"
              :disabled="good.skuNum <= 1"
            >
              -
            </button>
            <input
              type="text"
              ref="countInp"
              :value="good.skuNum"
              @change="updata(good.skuId, good.skuNum, $event)"
              @input="inputCount($event)"
            />
            <button
              @click="updataCount(good.skuId, 1)"
              :disabled="good.skuNum >= 100"
            >
              +
            </button>
          </div>
        </div>
        <div class="total-price">{{ good.skuNum * good.cartPrice }}</div>
        <div class="handle-btn">
          <a @click="del(good.skuId)">删除</a>
          <a>移到收藏</a>
        </div>
      </li>
    </ul>
    <div class="bottom">
      <div class="left">
        <input
          type="checkbox"
          v-model="allChecked"
          @click="allCheckTogol(!allChecked)"
        />全选
        <p>删除选中的商品</p>
        <p>移到我的关注</p>
        <p>清除下架商品</p>
      </div>
      <div class="right">
        <p>已选择 {{ totalCount }} 件商品</p>
        <p>总价（不含运费） ： {{ totalPrice }}</p>
        <button @click="toTrade">结算</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";

export default {
  name: "ShopCart",
  data() {
    return {
      allChecked: false,
    };
  },
  computed: {
    ...mapState({
      shopcartList: (state) => state.shopcart.shopcartList,
      allCheck: (state) => state.shopcart.allCheck,
    }),
    totalCount() {
      return this.shopcartList
        .filter((good) => good.isChecked === 1)
        .reduce((p, c) => p + c.skuNum, 0);
    },
    totalPrice() {
      return this.shopcartList
        .filter((good) => good.isChecked === 1)
        .reduce((p, c) => p + c.skuPrice * c.skuNum, 0);
    },
  },
  methods: {
    ...mapActions(["getShopcartList", "addShopcart", "goodsCheck", "delGoods"]),
    ...mapMutations(["ALL_CHECKED"]),
    async updataCount(skuId, skuNum) {
      this.formatCount();
      await this.addShopcart({ skuId, skuNum });
      // this.getShopcartList();
    },
    updata(skuId, skuNum, e) {
      // if(+e.target.value === skuNum) return
      this.addShopcart({ skuId, skuNum: e.target.value - skuNum });
    },
    inputCount(e) {
      if (e.target.value <= 1) {
        e.target.value = 1;
      } else if (e.target.value >= 100) {
        e.target.value = 100;
      }
      e.target.value = e.target.value.replace(/\D+/g, "");
    },
    async togolCheck(skuId, e) {
      const isChecked = e.target.checked === true ? 1 : 0;
      await this.goodsCheck({ skuId, isChecked });
      this.allChecked = this.allCheck;
    },
    allCheckTogol(checked) {
      const isChecked = checked === true ? 1 : 0;
      this.ALL_CHECKED(isChecked);
    },
    del(skuId) {
      if (confirm("你确定删除此商品吗？")) {
        this.delGoods(skuId);
      }
    },
    //一上来就判断是否全选的函数
    /* allCheck(){
      console.log(this.shopcartList.reduce((p,c)=>{
        return p + c.isChecked
      },0) === this.shopcartList.length)
      this.allChecked = this.shopcartList.reduce((p,c)=>{
        return p + c.isChecked
      },0) === this.shopcartList.length? true : false
    }, */
    toTrade() {
      this.$router.push("/trade");
    },
  },
  mounted() {
    this.getShopcartList();
    // this.allCheck()
    this.allChecked =
      this.shopcartList.reduce((p, c) => {
        return p + c.isChecked;
      }, 0) === this.shopcartList.length
        ? true
        : false;
  },
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
.cart-list {
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
  img {
    width: 82px;
  }
}
.good-name {
  margin-left: 10px;
}
.price {
  width: 160px;
}
.count-btn-wrap {
  width: 190px;
  input {
    width: 30px;
    height: 28px;
    border: 1px solid #ccc;
    outline: none;
    text-align: center;
    margin-right: -1px;
  }
  button {
    width: 20px;
    height: 30px;
    border: 1px solid #ccc;
    outline: none;
    margin-right: -1px;
  }
}
.count-btn {
  display: flex;
  align-items: center;
}
.total-price {
  width: 175px;
}
.handle-btn {
  width: 175px;
  display: flex;
  flex-direction: column;
  a {
    cursor: pointer;
  }
}
.bottom {
  width: 1200px;
  height: 52px;
  border: 1px solid #ccc;
  margin-top: 15px;
  padding: 0 0 0 10px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.left,
.right {
  display: flex;
}
.left {
  p {
    margin-left: 20px;
    color: #666;
  }
}
.right {
  align-items: center;
  p {
    margin-right: 20px;
  }
  button {
    width: 96px;
    height: 52px;
    font-size: 18px;
    color: #fff;
    background-color: indianred;
    border: none;
    outline: none;
  }
}
</style>
