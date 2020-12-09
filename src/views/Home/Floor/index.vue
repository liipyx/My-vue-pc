<template>
  <section class="floor">
    <div class="title">
      <p class="big_title">{{ floor.name }}</p>
      <ul class="sub-title">
        <li
          class="sub-item"
          v-for="(item, index) in floor.navList"
          :key="index"
        >
          {{ item.text }}
        </li>
      </ul>
    </div>
    <div class="imgLIst">
      <div class="keywords">
        <ul class="words">
          <li v-for="(keyword, index) in floor.keywords" :key="index">
            {{ keyword }}
          </li>
        </ul>
        <div class="key-img">
          <img v-lazy="floor.imgUrl" alt="">
        </div>
      </div>
      <div class="carousel-wrap">
        <Carousel :carouselList="floor.carouselList"></Carousel>
      </div>
      <div class="small-wrap">
        <div class="small">
          <img v-lazy="floor.recommendList[0]" alt="">
        </div>
        <div class="small">
          <img v-lazy="floor.recommendList[1]" alt="">
        </div>
      </div>
      <div class="middle">
        <img v-lazy="floor.bigImg" alt="">
      </div>
      <div class="small-wrap">
        <div class="small">
          <img v-lazy="floor.recommendList[2]" alt="">
        </div>
        <div class="small">
          <img v-lazy="floor.recommendList[3]" alt="">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// import { mapState, mapActions } from "vuex";
import Carousel from "../../../components/Carousel";

export default {
  name: "Floor",
  props: {
    floor: Object,
  },
  components: {
    Carousel,
  },
  /* computed: {
    ...mapState({
      floor: (state) => state.home.floors[0],
    }),
  },
  methods: {
    ...mapActions(["getFloors"]),
  },
  mounted() {
    this.getFloors();
  }, */
};
</script>

<style lang="less" scoped>
.floor {
  width: 1200px;
  line-height: 48px;
  margin: 20px auto 0;
}
.title {
  height: 48px;
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid indianred;
  color: indianred;
}
.big_title {
  font-size: 20px;
  font-weight: bold;
}
.sub-title {
  display: flex;
  align-items: center;
}
.sub-item {
  height: 14px;
  line-height: 14px;
  padding: 0 10px;
  & ~ .sub-item {
    border-left: 1px solid indianred;
  }
}

.imgLIst {
  height: 360px;
  display: flex;
  img{
    width: 100%;
    height: 100%;
  }
}
.keywords {
  width: 218px;
  height: 100%;
  background-color:#f7f7f7;
}
.words {
  height: 80px;
  padding: 15px 0;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
  li {
    width: 83px;
    height: 26px;
    line-height: 26px;
    margin: 0 10px;
    text-align: center;
    border-bottom: 1px solid #e4e4e4;
  }
}
.key-img {
  width: 100%;
  height: 250px;
  background-color: lightcyan;
}

.carousel-wrap {
  width: 328px;
  height: 100%;
  // background-color: lightskyblue;
}

.small-wrap {
  width: 218px;
  height: 100%;
}
.small {
  height: 50%;
  background-color: lightsteelblue;
}
.middle {
  width: 218px;
  height: 100%;
  background-color: mintcream;
}
</style>
