<template>
<div class="table">
  <el-table
      :data="tableData"
      style="width: 100%"
      ref="table"
      >
      <el-table-column
        prop="date"
        label="日期"
        width="180"
        v-if="isShow">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
    <button @click="test">按钮</button>
</div>
    
</template>

<script>
export default {
  name: 'Test',
  data(){
    return{
      tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }],
      isShow:true
    }
  },
  methods:{
    test(){
      
    }
  }
}
</script>

<style lang="less" scoped>
.table{
  width: 1200px;
  margin: 0 auto;
}
</style>
