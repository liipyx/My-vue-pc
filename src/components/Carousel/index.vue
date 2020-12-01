<template>
  <div class="swiper-container" ref="swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="item in carouselList" :key="item.id">
        <img :src="item.imgUrl" alt="" />
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>

    <!-- 如果需要滚动条 -->
    <div class="swiper-scrollbar"></div>
  </div>
</template>

<script>
import Swiper, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/swiper-bundle.min.css";
Swiper.use([Navigation, Pagination, Autoplay]);

export default {
  name: "Carousel",
  props: {
    carouselList: {
      type: Array,
      required: true,
    },
  },
  methods: {
    initSwiper() {
      new Swiper(this.$refs.swiper, {
        loop: true, // 循环模式选项

        // 如果需要分页器
        pagination: {
          el: ".swiper-pagination",
          clickable : true
        },

        autoplay: {
          delay: 2000,
        },

        // 如果需要前进后退按钮
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    },
  },
  watch: {
    carouselList() {
      if (this.swiper) return;
      this.$nextTick(() => {
        this.initSwiper();
      });
    },
  },
  mounted() {
    this.initSwiper();
  },
};
</script>

<style lang="less" scoped>
/* .swiper-container {
  width: 730px;
  height: 454px;
  background-color: thistle;
  position: absolute;
  top: 0;
  left: 210px;
  margin: 5px 0 0 5px;
}
.swiper-slide {
  overflow: hidden;
  height: 455px;
  img {
    width: 100%;
  }
} */
.swiper-container {
  width: 100%;
  height: 100%;
}
.swiper-slide {
  overflow: hidden;
  height: 100%;
  img {
    width: 100%;
  }
}
</style>
