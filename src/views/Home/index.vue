<template>
  <div>
    <!-- <div class="big-container"> -->
      <CategoryList></CategoryList>
      <ContainerList></ContainerList>
      <Floor></Floor>
    <!-- </div> -->
  </div>
</template>

<script>
import CategoryList from "../../components/CategoryList";
import ContainerList from "./ContainerList";
import Floor from "./Floor";

export default {
  name: "Home",
  components: {
    CategoryList,
    ContainerList,
    Floor
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
