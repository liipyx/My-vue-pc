<template>
  <div class="category-container">
    <div class="category">
      <div class="categoryBar">
        <div class="categoryBarList-wrap">
          <div
            class="list-wrap"
            @mouseenter="inSearchShow = true"
            @mouseleave="inSearchShow = false"
          >
            <div class="all">全部商品分类</div>
            <transition name="grow">
              <ul
                v-show="inHomeShow || inSearchShow"
                class="category-father"
                @click="goSearch"
              >
                <li
                  class="category-child"
                  v-for="categorys in categoryList"
                  :key="categorys.categoryId"
                >
                  <a
                    class="categorys"
                    :data-categoryName="categorys.categoryName"
                    :data-categoryId="categorys.categoryId"
                    :data-categoryLevel="1"
                    >{{ categorys.categoryName }}</a
                  >
                  <div class="subdivide">
                    <div
                      class="subdivide-list"
                      v-for="child in categorys.categoryChild"
                      :key="child.categoryId"
                    >
                      <h6 class="subdivide-item subdivide-title">
                        <a
                          :data-categoryName="child.categoryName"
                          :data-categoryId="child.categoryId"
                          :data-categoryLevel="2"
                          >{{ child.categoryName }}</a
                        >
                      </h6>
                      <ul class="subdivide-wrap">
                        <li
                          class="subdivide-item"
                          v-for="grandson in child.categoryChild"
                          :key="grandson.categoryId"
                        >
                          <a
                            :data-categoryName="grandson.categoryName"
                            :data-categoryId="grandson.categoryId"
                            :data-categoryLevel="3"
                            >{{ grandson.categoryName }}</a
                          >
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              </ul></transition
            >
          </div>
          <ul class="BarList">
            <li>服装城</li>
            <li>美妆馆</li>
            <li>尚品汇超市</li>
            <li>全球购</li>
            <li>闪购</li>
            <li>团购</li>
            <li>有趣</li>
            <li>秒杀</li>
          </ul>
        </div>
      </div>
      <!-- <div class="categoryList"> -->
      <!-- <ul v-show='inHomeShow || inSearchShow' class="category-father" @click="goSearch">
        <li
          class="category-child"
          v-for="categorys in categoryList"
          :key="categorys.categoryId"
        >
          <a
            class="categorys"
            :data-categoryName="categorys.categoryName"
            :data-categoryId="categorys.categoryId"
            :data-categoryLevel="1"
            >{{ categorys.categoryName }}</a
          >
          <div class="subdivide">
            <div
              class="subdivide-list"
              v-for="child in categorys.categoryChild"
              :key="child.categoryId"
            >
              <h6 class="subdivide-item subdivide-title">
                <a
                  :data-categoryName="child.categoryName"
                  :data-categoryId="child.categoryId"
                  :data-categoryLevel="2"
                  >{{ child.categoryName }}</a
                >
              </h6>
              <ul class="subdivide-wrap">
                <li
                  class="subdivide-item"
                  v-for="grandson in child.categoryChild"
                  :key="grandson.categoryId"
                >
                  <a
                    :data-categoryName="grandson.categoryName"
                    :data-categoryId="grandson.categoryId"
                    :data-categoryLevel="3"
                    >{{ grandson.categoryName }}</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ul> -->
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
// import { categoryRequest } from "../../api/home";
import { mapState, mapActions } from "vuex";
export default {
  name: "CategoryList",
  data() {
    return {
      inHomeShow: this.$route.path === "/",
      inSearchShow: false,
    };
  },
  /* data(){
    return {
      categoryList:[]
    }
  }, */
  /* async mounted() {
    this.categoryList = await categoryRequest()
    console.log(this.categorys,this.child)
  }, */
  computed: {
    ...mapState({
      categoryList: (state) => state.home.categoryList,
    }),
  },
  methods: {
    ...mapActions(["getCategoryList"]),
    goSearch(e) {
      const { categoryname, categoryid, categorylevel } = e.target.dataset;

      //如果点的不是a标签就return
      if (!categoryname) return;
      //点击之后隐藏列表
      this.inSearchShow = false
      
      // this.$router.push(`/search?categoryName=${categoryname}&category${categorylevel}Id=${categoryid}`)
      const location = {
        name: "search",
        query: {
          categoryName: categoryname,
          [`category${categorylevel}Id`]: categoryid,
        }
      }
      //判断又没params参数
      /* if(this.$route.params){
        location.params = this.$route.params
      } */
      location.params = this.$route.params //不判断也可？
      this.$router.push(location);
    },
  },
  mounted() {
    this.getCategoryList();
  },
};
</script>

<style lang="less" scoped>
.category-container {
  width: 100%;
  height: 45px;
  border-bottom: 2px solid indianred;
}
.category {
  /* width: 210px;
  height: 454px; */
  // width: 100%;
  width: 1200px;
  margin: 0 auto;
  position: relative;
}
/* .categoryBar {
  width: 100%;
  height: 45px;
  border-bottom: 2px solid indianred;
} */
.categoryBarList-wrap {
  width: 1200px;
  height: 45px;
  line-height: 45px;
  margin: 0 auto;
  display: flex;
}
.all {
  background-color: indianred;
  font-size: 14px;
  font-weight: bold;
  width: 210px;
  color: #fff;
  text-align: center;
}
.category-father {
  width: 210px;
  height: 459px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: #f7f7f7;
  position: absolute;
  z-index: 999;
  left: 0;
  top: 47px;
  a {
    cursor: pointer;
  }
  &.grow-enter {
    height: 0;
  }
  &.grow-enter-active {
    transition: height .1s;
    overflow: hidden;
  }
  &.grow-enter-to {
    height: 459px;
  }
}
.category-child {
  width: 100%;
  height: 14px;
  line-height: 14px;
  font-size: 14px;
  flex-grow: 1;
  display: flex;
  align-items: center;
  &:hover {
    background-color: #ccc;
    .subdivide {
      display: flex;
    }
  }
}
.BarList {
  display: flex;
  li {
    margin: 0 20px;
    font-size: 16px;
  }
} /* 
.categoryList {
  width: 1200px;
  margin: 0 auto;
  display: flex;
} */
/* .category-father {
  width: 210px;
  height: 459px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: #f7f7f7;
  position: absolute;
  left: 0;
  top: 47px;
  a {
    cursor: pointer;
  }
} */
/* .category-child {
  width: 100%;
  font-size: 14px;
  flex-grow: 1;
  display: flex;
  align-items: center;
  // &:hover .subdivide{
  //   display: flex;
  // }
  &:hover {
    background-color: #ccc;
    .subdivide {
      display: flex;
    }
  }
} */
.categorys {
  margin-left: 20px;
}
.subdivide {
  width: 735px;
  height: 458px;
  background-color: snow;
  border: 1px solid #ccc;
  position: absolute;
  top: 0;
  left: 210px;
  display: flex;
  flex-direction: column;
  z-index: 99999;
  display: none;
}
.subdivide-list {
  display: flex;
  font-size: 12px;
  margin: 8px 0;
}
.subdivide-item {
  padding: 0 5px;
  margin: 3px 0;
}
.subdivide-wrap {
  width: 550px;
  display: flex;
  flex-wrap: wrap;
  li {
    border-left: 1px solid #ccc;
  }
}
</style>
