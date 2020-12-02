<template>
  <div>
    <CategoryList></CategoryList>
    <div class="all-result">
      <div class="result-wrap">
        <p>全部结果</p>
        <ul class="result-list">
          <li v-show="options.trademark">
            品牌 ： {{ options.trademark.split(":")[1] }}<a @click="delBrand">x</a>
          </li>
          <li v-show="options.keyword">
            {{ options.keyword }}<a @click="delKeyword">x</a>
          </li>
          <li v-show="options.categoryName">
            {{ options.categoryName }}<a @click="delCategory">x</a>
          </li>
          <li v-for="(prop, index) in options.props" :key="index">
            {{ `${prop.split(":")[2]} : ${prop.split(":")[1]}`}}<a @click="delProp(index)">x</a>
          </li>
        </ul>
      </div>
    </div>
    <SearchSlector @addProp="addProp" :addBrand="addBrand"></SearchSlector>
  </div>
</template>

<script>
import CategoryList from "../../components/CategoryList";
import SearchSlector from "../Search/SearchSlector";

import { mapGetters, mapActions } from "vuex";

export default {
  name: "Search",
  data() {
    return {
      options: {
        category1Id: "",
        category2Id: "",
        category3Id: "",
        categoryName: "",
        keyword: "",
        order: "",
        pageNo: 1,
        pageSize: 10,
        props: [],
        trademark: "",
      },
    };
  },
  components: {
    CategoryList,
    SearchSlector,
  },
  computed: {
    ...mapGetters(["goodsList"]),
  },
  methods: {
    ...mapActions(["getProductionList"]),
    getProductions() {
      const {
        category1Id,
        category2Id,
        category3Id,
        categoryName,
      } = this.$route.query;
      const { searchText: keyword } = this.$route.params;
      const options = {
        ...this.options,
        category1Id,
        category2Id,
        category3Id,
        categoryName,
        keyword,
      };
      this.options = options;
      this.getProductionList(options);
    },
    addProp(prop) {
      console.log(prop);
      if (this.options.props.indexOf(prop) > -1) return;
      this.options.props.push(prop);
      this.getProductions();
    },
    delProp(index) {
      this.options.props.splice(index, 1);
      this.getProductions();
    },
    addBrand(trademark) {
      this.options.trademark = trademark;
      this.getProductions();
    },
    delBrand() {
      this.options.trademark = "";
      this.getProductions();
    },
    delKeyword() {
      this.options.keyword = "";
      this.$bus.$emit("clearSearchText");
      this.$router.push({
        name: "search",
        query: this.$route.query,
      });
    },
    delCategory() {
      this.options.categoryName = "";
      this.options.category1Id = "";
      this.options.category2Id = "";
      this.options.category3Id = "";
      this.$router.push({
        name: "search",
        params: this.$route.params,
      });
    },
  },
  watch: {
    $route() {
      this.getProductions();
    },
  },
  mounted() {
    this.getProductions();
  },
};
</script>

<style lang="less" scoped>
.all-result {
  width: 1200px;
  margin: 0 auto;
}
.result-wrap {
  height: 40px;
  line-height: 40px;
  display: flex;
  p {
    width: 60px;
  }
}
.result-list {
  display: flex;
  align-items: center;
  li {
    height: 22px;
    line-height: 22px;
    margin-left: 5px;
    padding: 0 4px;
    border: 1px solid #ddd;
    cursor: pointer;
  }
  a {
    font-size: 14px;
    margin: 0 5px;
  }
}
</style>
