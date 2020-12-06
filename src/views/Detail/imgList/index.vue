<template>
  <div class="list-container">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in skuImageList" :key="item.id">
          <img :src="item.imgUrl" @click="updateImgIndex(index)" />
        </div>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination"></div>

      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
  </div>
</template>

<script>
import Swiper, { Navigation } from "swiper";
Swiper.use([Navigation]);

export default {
  name: "imgList",
  props: {
    skuImageList: Array,
    updateImgIndex:Function
  },
  watch: {
    skuImageList() {
      this.$nextTick(() => {
        new Swiper(".swiper-container", {
          slidesPerView: 5,
          spaceBetween: 10,
          slidesPerGroup: 5,
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        });
      });
    },
  }
};
</script>

<style lang="less" scoped>
.list-container {
  width: 412px;
  height: 51px;
}
.swiper-container {
  width: 402px;
  margin: 0;
  padding:2px 10px;
  box-sizing: border-box;
  .swiper-wrapper {
    .swiper-slide {
      text-align: center;
      img {
        width: 50px;
        border: 1px solid #ccc;
      }
    }
  }
}
.swiper-button-prev,
.swiper-button-next {
  width: 10px;
  height: 50px;
  top: 24px;
  border: 1px solid #ccc;
  &::after {
    font-size: 12px;
  }
}
.swiper-button-prev {
  left:0;
}
.swiper-button-next{
  right: 0;
}
</style>
