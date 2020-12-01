<template>
  <div class="container">
    <div class="img-container">
      <div class="block">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="item in banners" :key="item.id">
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
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Swiper, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/swiper-bundle.min.css";

Swiper.use([Navigation, Pagination, Autoplay]);

export default {
  name: "ContainerList",
  computed: {
    ...mapState({
      banners: (state) => state.home.banners,
    }),
  },
  methods: {
    ...mapActions(["getBanners"]),
  },
  async mounted() {
    await this.getBanners();
    this.$nextTick(() => {
      new Swiper(".swiper-container", {
        loop: true, // 循环模式选项

        // 如果需要分页器
        pagination: {
          el: ".swiper-pagination",
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
    });
  },
};
</script>

<style lang="less" scoped>
.container {
  width: 1200px;
  height: 460px;
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
.swiper-slide {
  overflow: hidden;
  height: 455px;
  img {
    width: 100%;
  }
}
</style>
