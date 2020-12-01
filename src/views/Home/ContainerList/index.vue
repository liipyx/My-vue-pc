<template>
  <div class="banner-wrap">
    <div class="carousel-wrap">
      <Carousel :carouselList="banners"></Carousel>
    </div>
  </div>
</template>

<script>
import Carousel from "../../../components/Carousel";
import { mapState, mapActions } from "vuex";

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
  components: {
    Carousel,
  },
  mounted() {
    this.getBanners();
  },
};
</script>

<style lang="less" scoped>
.banner-wrap {
  width: 1200px;
  height: 460px;
  margin: 0 auto;
  position: relative;
}
.carousel-wrap{
  width: 730px;
  height: 454px;
  background-color: thistle;
  position: absolute;
  top: 0;
  left: 210px;
  margin: 5px 0 0 5px;
}
</style>
