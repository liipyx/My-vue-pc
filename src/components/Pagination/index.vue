<template>
  <div class="pagination">
    <button
      @click="myCurrentPage = myCurrentPage - 1"
      :disabled="myCurrentPage === 1"
      :class="{ isDisabled: myCurrentPage === 1 }"
    >
      上一页
    </button>
    <button
      @click.stop="myCurrentPage = 1"
      :class="{ active: myCurrentPage === 1 }"
    >
      1
    </button>
    <button
      v-show="!(pageNum.startPage === 2 || totalPage <= pagerCount)"
      @click.stop="myCurrentPage = myCurrentPage - pageSize"
    >
      ...
    </button>
    <button
      :class="{ active: myCurrentPage === pageNum.startPage + page - 1 }"
      v-for="page in btnCount"
      :key="page"
      @click.stop="myCurrentPage = pageNum.startPage + page - 1"
    >
      {{ pageNum.startPage + page - 1 }}
    </button>
    <button
      v-show="!(pageNum.endPage > totalPage - 1)"
      @click.stop="myCurrentPage = myCurrentPage + pageSize"
    >
      ...
    </button>
    <button
      v-show="totalPage >= 2"
      :class="{ active: myCurrentPage === totalPage }"
      @click.stop="myCurrentPage = totalPage"
    >
      {{ totalPage }}
    </button>
    <button
      @click="myCurrentPage = myCurrentPage + 1"
      :disabled="myCurrentPage === totalPage"
      :class="{ isDisabled: myCurrentPage === totalPage }"
    >
      下一页
    </button>
    <button>总数：{{ total }}</button>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  data() {
    return {
      myCurrentPage: this.currentPage,
    };
  },
  props: {
    currentPage: {
      type: Number,
      default: 1,
    },
    pagerCount: {
      type: Number,
      validator(val) {
        return val >= 5 && val <= 21 && val % 2 === 1;
      },
      default: 7,
    },
    pageSize: {
      type: Number,
      default: 5,
    },
    total: {
      type: Number,
      default: 0,
    },
  },
  watch: {
    myCurrentPage(currentPage) {
      this.$emit("current-change", currentPage);
      this.myCurrentPage = currentPage;
    },
  },
  computed: {
    totalPage() {
      return Math.ceil(this.total / this.pageSize);
    },
    pageNum() {
      /* const { myCurrentPage, pagerCount, totalPages } = this;

      // 中间start-end总计的按钮数量（不包含开头和结尾）
      const count = pagerCount - 2;
      // 中间的一半
      const halfCount = Math.floor(count / 2);

      let startPage, endPage;
      // 开始计算
      if (myCurrentPage >= totalPages - halfCount) {
        // 1 ... 5 6 7 8 [9] 10
        startPage = totalPages - count;
      } else {
        // 正常情况
        startPage = myCurrentPage - halfCount;
      }

      if (startPage <= 1) {
        // 1 [2] 3 4 5 6 ...10
        // [1] 2 3 4 5 6 ...10
        startPage = 2;
      }

      // 正常情况
      endPage = startPage + count - 1;

      if (endPage >= totalPages) {
        // 1 [2] 3
        endPage = totalPages - 1;
      }

      // 返回计算结果
      return {
        startPage,
        endPage,
      }; */
      const changePageCount = this.pagerCount - 2  //7
      const halfPage = Math.floor(changePageCount / 2);  //3
      let startPage,endPage
      if (this.totalPage < this.pagerCount) {
        startPage = 2
        endPage = this.pagerCount - 1
      }else if(this.myCurrentPage - 1 <= halfPage + 1){
        startPage = 2
        endPage = this.pagerCount - 1
      }else if(this.totalPage - this.myCurrentPage - 1 <= halfPage){
        // startPage = 2
        // endPage = this.pagerCount - 1
        startPage =  this.totalPage - changePageCount;
        endPage = this.totalPage - 1;
      }else if(this.totalPage <=2 ){
        startPage = 2
        endPage = 2
      }else{
        startPage = this.myCurrentPage - halfPage;
        endPage = this.myCurrentPage + halfPage;
      }
      return {startPage,endPage}
    },
    btnCount() {
      let count = 0;
      if (
        this.totalPage - this.myCurrentPage <= this.halfPage ||
        this.totalPage - this.myCurrentPage - 1 === this.halfPage
      ) {
        count = this.pagerCount - 1;
      } else if (this.totalPage < this.pagerCount) {
        count = this.totalPage - 2;
      } else {
        count = this.pagerCount - 2;
      }
      
      return count < 0 ? 0 : count;
    },
  },
};
</script>

<style lang='less' scoped>
.pagination {
  display: flex;
  white-space: nowrap;
  font-weight: 700;
  button {
    margin: 0 5px;
    padding: 0 4px;
    font-size: 13px;
    min-width: 30px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: none;
    outline: none;
    display: block;
    background-color: #f4f4f5;
    color: #606266;
    border-radius: 2px;
  }
}

button.active {
  background-color: #409eff;
  color: #fff;
}
button.isDisabled {
  color: #ccc;
}
</style>