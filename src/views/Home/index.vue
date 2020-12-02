<template>
  <div>
    <!-- <div class="big-container"> -->
    <CategoryList></CategoryList>
    <ContainerList></ContainerList>
    <Floor v-for='floor in floors' :key="floor.id" :floor="floor"></Floor>
    <!-- </div> -->
  </div>
</template>

<script>
import CategoryList from "../../components/CategoryList";
import ContainerList from "./ContainerList";
import Floor from "./Floor";

import { mapState, mapActions } from "vuex";

export default {
  name: "Home",
  components: {
    CategoryList,
    ContainerList,
    Floor,
  },
  computed: {
    ...mapState({
      floors: (state) => state.home.floors,
    }),
  },
  methods: {
    ...mapActions(["getFloors"]),
  },
  mounted() {
    this.getFloors();
    this.$bus.$emit('clearSearchText')
  },
};
</script>

<style lang="less" scoped>
/* .big-container {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  position: relative;
} */
</style>
