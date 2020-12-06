<template>
  <div>
    <CategoryList></CategoryList>
    <section class="con">
      <div class="left">
        <div class="category-view">
          <ul class="view-list">
            <li>{{ categoryView.category1Name }}</li>
            <li>{{ categoryView.category2Name }}</li>
            <li>{{ categoryView.category3Name }}</li>
          </ul>
        </div>
        <div class="main">
          <Zoom :currentImgIndex="currentImgIndex"></Zoom>
          <imgList
            :skuImageList="skuInfo.skuImageList"
            :updateImgIndex="updateImgIndex"
          ></imgList>
        </div>
      </div>
      <div class="right">
        <div class="info">
          <h3>{{ skuInfo.skuName }}</h3>
          <p class="sub-title">{{ skuInfo.skuDesc }}</p>
          <div class="highlight">
            <div class="price">
              <div class="light-title">价 格</div>
              <div class="price-num">
                <span>￥</span><em>{{ skuInfo.price }}</em
                ><span>降价通知</span>
              </div>
            </div>
            <div class="promote">
              <div class="light-title">促 销</div>
              <div class="promote-info">
                <span class="red">加价购</span
                ><span class="promot-describe"
                  >满999.00另加20.00元，或满1999.00另加30.00元，或满2999.00另加40.00元，即可在购物车换购热销商品</span
                >
              </div>
            </div>
          </div>
          <div class="support">
            <p>支 持</p>
            <p>以旧换新，闲置手机回收 4G套餐超值抢 礼品购</p>
          </div>
          <div class="address">
            <p>配 送 至</p>
            <p>广东省 深圳市 宝安区</p>
          </div>
        </div>
        <div class="attr">
          <div
            class="per-attr"
            v-for="attrType in spuSaleAttrList"
            :key="attrType.id"
          >
            <p>{{ attrType.saleAttrName }}</p>
            <div v-for="attrs in attrType.spuSaleAttrValueList" :key="attrs.id">
              {{ attrs.saleAttrValueName }}
            </div>
          </div>
        </div>
        <div class="add-cart">
          <el-input-number
            v-model="skuNum"
            controls-position="right"
            :min="1"
            :max="100"
          ></el-input-number>
          <div class="add-btn" @click="addShopcart">加入购物车</div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

import CategoryList from "../../components/CategoryList";
import Zoom from "./Zoom";
import imgList from "./imgList";

export default {
  name: "Detail",
  data() {
    return {
      currentImgIndex: 0,
      skuNum: 1,
    };
  },
  computed: {
    ...mapGetters(["skuInfo", "categoryView", "spuSaleAttrList"]),
  },
  methods: {
    ...mapActions(["getDetailInfo", "addShopcart"]),
    updateImgIndex(index) {
      this.currentImgIndex = index;
    },
    async addShopcart() {
      try {
        await this.addShopcart({ 
          skuId: this.skuInfo.id, 
          skuNum: this.skuNum 
          });
        this.$router.push(`/addCartSuccess?skuNum=${this.skuNum}`);
      } catch (err) {
        console.log(err);
      }
    },
  },
  mounted() {
    this.getDetailInfo(this.$route.params.id);
  },
  components: {
    CategoryList,
    Zoom,
    imgList,
  },
};
</script>

<style lang="less" scoped>
.category-view {
  height: 33px;
  margin: 10px 0;
  display: flex;
  align-items: center;
}
.view-list {
  display: flex;
  align-items: center;
  li {
    & ~ li::before {
      content: "/";
      margin: 0 5px;
      color: #ccc;
    }
  }
}
.con {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
/* .main {
  width: 400px;
} */
.right {
  width: 700px;
  margin-top: 53px;
}
.info {
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
  h3 {
    margin-top: 15px;
  }
  .sub-title {
    margin-top: 15px;
    color: indianred;
  }
}
.highlight {
  padding: 10px 10px;
  margin-top: 20px;
  background-color: linen;
}
.price,
.promote {
  display: flex;
  margin: 7px;
  line-height: 26px;
}
.price-num {
  color: indianred;
  em {
    font-size: 24px;
    font-weight: bold;
  }
}
.light-title {
  margin-right: 15px;
}
.promote-info {
  width: 500px;
  .red {
    padding: 3px;
    color: #fff;
    background-color: indianred;
  }
  .promot-describe {
    color: #ccc;
  }
}
.support,
.address {
  display: flex;
  margin-top: 20px;
  p:last-child {
    margin-left: 20px;
    color: #ccc;
  }
}
.per-attr {
  height: 30px;
  line-height: 30px;
  margin-top: 13px;
  display: flex;
  p {
    margin-right: 20px;
  }
  div {
    margin: 0 5px;
    padding: 0 10px;
    border: 1px solid #ccc;
  }
}
.add-cart {
  margin-top: 10px;
  display: flex;
  .el-input__inner {
    width: 40px;
  }
}

.add-btn {
  height: 40px;
  line-height: 40px;
  font-size: 16px;
  padding: 0 20px;
  color: #fff;
  background-color: indianred;
  cursor: pointer;
}
</style>
