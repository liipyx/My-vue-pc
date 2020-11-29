<template>
  <div class="category">
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
    <ul class="category-father">
      <li class="category-child" v-for='categorys in categoryList' :key='categorys.categoryId'>
        <a class="categorys">{{categorys.categoryName}}</a>
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
.category{
  width: 210px;
  height: 454px;
}
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
.category-father{
  width: 210px;
  height: 459px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: #f7f7f7;
  position: relative;
  a{
    cursor: pointer;
  }
}
.category-child{
  width: 100%;
  font-size: 14px;
  flex-grow: 1;
  display: flex;
  align-items: center;
  /* &:hover .subdivide{
    display: flex;
  } */
  &:hover{
    background-color: #ccc;
    .subdivide{
      display: flex;
    }
  }
}
.categorys{
  margin-left: 20px;
}
.subdivide{
  width: 735px;
  height: 458px;
  background-color: snow;
  border: 1px solid #ccc;
  position: absolute;
  top: 0;
  left: 210px;
  display: flex;
  flex-direction: column;
  z-index: 999;
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
