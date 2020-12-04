<template>
  <div>
    <CategoryList></CategoryList>
    <div class="all-result">
      <div class="result-wrap">
        <p>全部结果</p>
        <ul class="result-list">
          <li v-show="options.trademark">
            品牌 ： {{ options.trademark.split(":")[1]
            }}<a @click="delBrand">x</a>
          </li>
          <li v-show="options.keyword">
            {{ options.keyword }}<a @click="delKeyword">x</a>
          </li>
          <li v-show="options.categoryName">
            {{ options.categoryName }}<a @click="delCategory">x</a>
          </li>
          <li v-for="(prop, index) in options.props" :key="index">
            {{ `${prop.split(":")[2]} : ${prop.split(":")[1]}`
            }}<a @click="delProp(index)">x</a>
          </li>
        </ul>
      </div>
    </div>
    <SearchSlector @addProp="addProp" :addBrand="addBrand"></SearchSlector>
    <div class="productions-wrap">
      <div class="sort-wrap">
        <ul class="sort">
          <li
            :class="{ init: true, active: options.order.split(':')[0] === '1' }"
            @click="setOrder('1')"
          >
            <a
              >综合<i
                :class="{
                  iconfont: true,
                  'icon-arrowdown': isDown,
                  'icon-arrow-up': !isDown,
                }"
              ></i
            ></a>
          </li>
          <li><a>销量</a></li>
          <li><a>新品</a></li>
          <li><a>评价</a></li>
          <li
            :class="{
              price: true,
              active: options.order.split(':')[0] === '2',
            }"
            @click="setOrder('2')"
          >
            <a
              >价格<span
                ><i
                  :class="{
                    iconfont: true,
                    'icon-sort-asc': true,
                    priceSort: !isLight,
                  }"
                ></i
                ><i
                  :class="{
                    iconfont: true,
                    'icon-sortdesc': true,
                    priceSort: isLight,
                  }"
                ></i></span
            ></a>
          </li>
        </ul>
      </div>
      <div class="list-wrap">
        <ul class="production-list">
          <li class="production-item" v-for="good in goodsList" :key="good.id">
            <div class="img-wrap">
              <a><img class="img" :src="good.defaultImg" alt="" /></a>
            </div>
            <div class="middle">
              <p class="pro-price">￥{{ good.price }}</p>
              <p class="title">{{ good.title }}</p>
            </div>
            <div class="bottom">
              <p>已有<span>xxx</span>人评价</p>
              <div class="pro-btn">
                <a class="add-shopcart">加入购物车</a>
                <a class="collection">收藏</a>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <Pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="options.pageNo"
        :pager-count="9"
        :page-size="5"
        :total="total"
      ></Pagination>
      <!-- <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="options.pageNo"
        :pager-count="5"
        :page-sizes="[5, 10, 15, 20]"
        :page-size="5"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      >
      </el-pagination> -->
    </div>
  </div>
</template>

<script>
import CategoryList from "../../components/CategoryList";
import SearchSlector from "../Search/SearchSlector";

import Pagination from "../../components/Pagination";

import { mapGetters, mapActions } from "vuex";

export default {
  name: "Search",
  data() {
    return {
      options: {
        category1Id: "",
        category2Id: "",
        category3Id: "",
        categoryName: "",
        keyword: "",
        order: "1:desc",
        pageNo: 1,
        pageSize: 5,
        props: [],
        trademark: "",
      },
      isDown: true,
      isLight: true,
    };
  },
  components: {
    CategoryList,
    SearchSlector,
    Pagination,
  },
  computed: {
    ...mapGetters(["goodsList", "total"]),
  },
  methods: {
    ...mapActions(["getProductionList"]),
    getProductions(pageNo = 1) {
      const {
        category1Id,
        category2Id,
        category3Id,
        categoryName,
      } = this.$route.query;
      const { searchText: keyword } = this.$route.params;
      const options = {
        ...this.options,
        category1Id,
        category2Id,
        category3Id,
        categoryName,
        keyword,
        pageNo,
      };
      this.options = options;
      this.getProductionList(options);
    },
    addProp(prop) {
      if (this.options.props.indexOf(prop) > -1) return;
      this.options.props.push(prop);
      this.getProductions();
    },
    delProp(index) {
      this.options.props.splice(index, 1);
      this.getProductions();
    },
    addBrand(trademark) {
      if (this.options.trademark) return;
      this.options.trademark = trademark;
      this.getProductions();
    },
    delBrand() {
      this.options.trademark = "";
      this.getProductions();
    },
    delKeyword() {
      this.options.keyword = "";
      this.$bus.$emit("clearSearchText");
      this.$router.push({
        name: "search",
        query: this.$route.query,
      });
    },
    delCategory() {
      this.options.categoryName = "";
      this.options.category1Id = "";
      this.options.category2Id = "";
      this.options.category3Id = "";
      this.$router.push({
        name: "search",
        params: this.$route.params,
      });
    },
    //分页器
    handleCurrentChange(pageNo) {
      this.options.pageNo = pageNo;
      this.getProductions(pageNo);
    },
    handleSizeChange(pageSize) {
      this.options.pageSize = pageSize;
      this.getProductions();
    },
    //排序
    setOrder(order) {
      let [orderNumber, orderType] = this.options.order.split(":");
      if (orderNumber === order) {
        //综合
        if (orderNumber === "1") {
          this.isDown = !this.isDown;
          orderType = this.isDown === true ? "desc" : "asc";
        }
        //价格
        if (orderNumber === "2") {
          this.isLight = !this.isLight;
          orderType = this.isLight === true ? "desc" : "asc";
        }
      } else {
        orderNumber = order;
        if (order === "1") {
          this.isLight = true;
          orderType = this.isDown === true ? "desc" : "asc";
        } else {
          this.isDown = true;
          orderType = this.isLight === true ? "desc" : "asc";
        }
        /* this.isDown = true;
        this.isLight = true
        orderNumber = order;
        //综合
        if (orderNumber === "1") {
          orderType = this.isDown === true? "desc" : "asc"
        }
        //价格
        if (orderNumber === "2") {
          orderType = this.isLight === true? "desc" : "asc"
        } */
      }
      this.options.order = `${orderNumber}:${orderType}`;
      this.getProductions();

      console.log(this.options.order);
    },
  },
  watch: {
    $route() {
      this.getProductions();
    },
  },
  mounted() {
    this.getProductions();
  },
};
</script>

<style lang="less" scoped>
.all-result {
  width: 1200px;
  margin: 0 auto;
}
.result-wrap {
  height: 40px;
  line-height: 40px;
  display: flex;
  p {
    width: 60px;
  }
}
.result-list {
  display: flex;
  align-items: center;
  li {
    height: 22px;
    line-height: 22px;
    margin-left: 5px;
    padding: 0 4px;
    border: 1px solid #ddd;
    cursor: pointer;
  }
  a {
    font-size: 14px;
    margin: 0 5px;
  }
}
.productions-wrap {
  width: 1200px;
  margin: 10px auto 0;
}
.sort-wrap {
  border: 1px solid #ccc;
}
.sort {
  display: flex;
  align-items: center;
  li {
    display: flex;
    align-items: center;
  }
  .init {
    a {
      display: flex;
      align-items: center;
    }
  }
  .active {
    background-color: indianred;
    a {
      color: #fff;
    }
    .iconfont {
      color: rgb(231, 227, 227);
    }
    .priceSort {
      color: #fff;
    }
  }
  .price {
    a {
      display: flex;
    }
    span {
      display: flex;
      flex-direction: column;
      padding-right: 5px;
    }
    i {
      position: absolute;
    }
  }
  a {
    display: block;
    padding: 15px;
    cursor: pointer;
  }
  .iconfont {
    font-size: 12px;
    color: #ccc;
  }
}

.list-wrap {
  margin-top: 20px;
}
.production-list {
  width: 1200px;
  display: flex;
  flex-wrap: wrap;
}
.production-item {
  // width: 240px;
  height: 400px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.img {
  width: 215px;
  height: 215px;
}
.middle {
  width: 215px;
  height: 48px;
  display: flex;
  flex-direction: column;
}
.pro-price {
  font-size: 18px;
  font-weight: bold;
  color: indianred;
}
.bottom {
  width: 215px;
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  p {
    font-size: 13px;
    font-weight: bold;
    color: #a7a7a7;
  }
  span {
    color: lightblue;
  }
}
.pro-btn {
  display: flex;
  justify-content: space-between;
}
.add-shopcart,
.collection {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 24px;
  cursor: pointer;
}
.add-shopcart {
  width: 90px;
  border: 1px solid indianred;
}
.collection {
  width: 85px;
  border: 1px solid #8c8c8c;
}
</style>
