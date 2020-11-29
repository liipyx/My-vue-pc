<template>
  <div>
    <div class="categoryBar">
      <div class="categoryList-wrap">
        <div class="all">全部商品分类</div>
        <ul class="categoryList">
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
    <div class="big-container">
      <ul class="category-father">
        <li class="category-child" v-for='categorys in categoryList' :key='categorys.categoryId'>
          <a>{{categorys.categoryName}}</a>
          <div class="subdivide">
            <div class="subdivide-list" v-for='child in categorys.categoryChild' :key='child.categoryId'>
              <h6 class="subdivide-item subdivide-title"><a>{{child.categoryName}}</a></h6>
              <ul class="subdivide-wrap">
                <li class="subdivide-item" v-for='grandson in child.categoryChild' :key='grandson.categoryId'><a>{{grandson.categoryName}}</a></li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { categoryRequest } from "../../api/home";
export default {
  name: "CategoryList",
  data(){
    return {
      categoryList:[]
    }
  },
  async mounted() {
    this.categoryList = await categoryRequest()
    console.log(this.categorys,this.child)
  },
};
</script>

<style lang="less" scoped>
.categoryBar {
  width: 100%;
  height: 45px;
  border-bottom: 2px solid indianred;
}
.categoryList-wrap {
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
.categoryList {
  display: flex;
  li {
    margin: 0 20px;
    font-size: 16px;
  }
}
.big-container {
  width: 1200px;
  margin: 0 auto;
  a{
    cursor: pointer;
  }
}
.category-father{
  width: 210px;
  height: 454px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: #f7f7f7;
  position: relative;
}
.category-child{
  margin-left: 20px;
  font-size: 14px;
  &:hover .subdivide{
    display: flex;
  }
}
.subdivide{
  width: 730px;
  height: 454px;
  background-color: snow;
  position: absolute;
  top: 0;
  left: 210px;
  display: flex;
  flex-direction: column;
  display: none;
}
.subdivide-list{
  display: flex;
  font-size: 12px;
  margin: 8px 0;
}
.subdivide-item{
  padding: 0 5px;
  margin: 3px 0;
}
.subdivide-wrap{
  width: 550px;
  display: flex;
  flex-wrap: wrap;
  li{
    border-left: 1px solid #ccc;
  }
}
</style>
