<template>
  <div>
    <Header></Header>
    <Router-view></Router-view>
    <!-- <Footer v-if="$route.path !== '/register' && $route.path !== '/login'"></Footer> -->
    <Footer v-if="!$route.meta.isFooterHide"></Footer>
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="less" scoped>
</style>
