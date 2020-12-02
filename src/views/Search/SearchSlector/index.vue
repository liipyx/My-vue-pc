<template>
  <div>
    <div class="search-selector" v-if="trademarkList.length">
      <div class="brand">
        <div class="brand-title">品牌</div>
        <div class="list-wrap">
          <ul class="brand-list">
            <li
              v-for="trademark in trademarkList"
              :key="trademark.tmId"
              @click="addBrand(`${trademark.tmId}:${trademark.tmName}`)"
            >
              {{ trademark.tmName }}
            </li>
          </ul>
        </div>
        <div class="more-button"></div>
      </div>
      <div class="attrs" v-for="attr in attrsList" :key="attr.attrId">
        <div class="attr-title">{{ attr.attrName }}</div>
        <ul class="attr-selections">
          <li v-for="(attrValue, index) in attr.attrValueList" :key="index">
            <a
              @click="
                selectProp(`${attr.attrId}:${attrValue}:${attr.attrName}`)
              "
              >{{ attrValue }}</a
            >
          </li>
        </ul>
        <div class="select-more"></div>
      </div>
    </div>
    <div class="no-result" v-else>无结果</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "SearchSlector",
  props: {
    addBrand: Function,
  },
  computed: {
    ...mapGetters(["trademarkList", "attrsList"]),
  },
  methods: {
    selectProp(attrValue) {
      this.$emit("addProp", attrValue);
    },
  },
};
</script>

<style lang="less" scoped>
.search-selector {
  width: 1200px;
  margin: 0 auto;
  box-sizing: border-box;
  border-left: 1px solid #ddd;
}
.brand {
  width: 100%;
  // height: 119px;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  display: flex;
}
.brand-title,
.attr-title {
  width: 110px;
  // height: 100%;
  background-color: #f3f3f3;
  line-height: 34px;
  padding-left: 10px;
  font-weight: bold;
  color: #666;
}
.list-wrap {
  width: 950px;
  // height: 100%;
  display: flex;
  align-items: center;
}
.brand-list {
  width: 950px;
  // height: 90px;
  display: flex;
  flex-wrap: wrap;
  margin: 15px;
  box-sizing: border-box;
  // overflow: hidden;
  li {
    width: 116px;
    height: 45px;
    padding: 5px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: bold;
    font-style: italic;
    color: indianred;
    border: 1px solid #ddd;
    margin: -1px -1px 0 0;
    cursor: pointer;
  }
}
.attrs {
  height: 33px;
  border-bottom: 1px solid #ddd;
  display: flex;
}
.attr-selections {
  width: 950px;
  display: flex;
  li {
    width: 130px;
    margin: 3px 10px;
    box-sizing: border-box;
    a {
      display: inline-block;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      cursor: pointer;
    }
  }
}
.no-result {
  width: 1200px;
  margin: 0 auto;
  text-align: center;
}
</style>
