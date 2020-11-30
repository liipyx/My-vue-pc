<template>
  <div class="container">
    <div class="img-container">
      <div class="block">
        <el-carousel trigger="click" height="455px">
          <!-- <el-carousel-item v-for="item in nums" :key="item">
        <h3 class="small">
        <img src="./images/banner1.jpg" alt="">
        <img :src="`./images/banner${item}.jpg`">
        <img :src="item" alt="">
        </h3>
        </el-carousel-item> -->

          <!-- <el-carousel-item v-for="item in img" :key="item">
          <h3 class="small" v-html="item"></h3>
        </el-carousel-item> -->

          <el-carousel-item v-for="item in imgUrls" :key="item.id">
            <h3 class="small">
              <img :src="item.url" alt="" />
            </h3>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
  </div>
</template>

<script>
import imgUrl1 from "./images/banner1.jpg";
import imgUrl2 from "./images/banner2.jpg";
import imgUrl3 from "./images/banner3.jpg";
import imgUrl4 from "./images/banner4.jpg";

export default {
  name: "ContainerList",
  data() {
    return {
      imgUrls: [
        { id: 1, url: imgUrl1 },
        { id: 2, url: imgUrl2 },
        { id: 3, url: imgUrl3 },
        { id: 4, url: imgUrl4 },
      ],
      /* nums:[1,2.3,4],
      urls:["./images/banner1.jpg","./images/banner2.jpg","./images/banner3.jpg","./images/banner4.jpg"],
      imgs: [
        "<img scr='./images/banner1.jpg'></img>",
        "<img scr='./images/banner2.jpg'></img>",
        "<img scr='./images/banner3.jpg'></img>",
        "<img scr='./images/banner4.jpg'></img>",
      ], */
    };
  },
};
</script>

<style lang="less" scoped>
.container{
  width: 1200px;
  margin: 0 auto;
  position: relative;
}
.img-container {
  width: 730px;
  height: 454px;
  background-color: thistle;
  position: absolute;
  top: 0;
  left: 210px;
  margin: 5px 0 0 5px;
}
.small img {
  width: 100%;
}
</style>
