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
          <li></li>
        </ul>
        <div class="key-img"></div>
      </div>
      <div class="carousel-wrap">
        <Carousel :carouselList="floor.carouselList"></Carousel>
      </div>
      <div class="small-wrap">
        <div class="small"></div>
        <div class="small"></div>
      </div>
      <div class="middle"></div>
      <div class="small-wrap">
        <div class="small"></div>
        <div class="small"></div>
      </div>
    </div>
  </section>
</template>

<script>
// import { mapState, mapActions } from "vuex";
import Carousel from "../../../components/Carousel"

export default {
  name: "Floor",
  props:{
    floor:Object
  },
  components:{
    Carousel
  }
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
}
.keywords {
  width: 218px;
  height: 100%;
  background-color: ivory;
}
.words{
  height: 105px;
}
.key-img {
  width: 100%;
  height: 255px;
  background-color: lightcyan;
}

.carousel-wrap {
  width: 328px;
  height: 100%;
  background-color: lightskyblue;
}

.small-wrap {
  width: 218px;
  height: 100%;
}
.small{
  height: 50%;
  background-color: lightsteelblue;
}
.middle {
  width: 218px;
  height: 100%;
  background-color: mintcream;
}
</style>
