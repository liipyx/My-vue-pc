<template>
  <div class="order-content">
    <div class="title">
      <h3>我的订单</h3>
    </div>
    <div class="chosetype">
      <table>
        <thead>
          <tr>
            <th width="29%">商品</th>
            <th width="31%">订单详情</th>
            <th width="13%">收货人</th>
            <th>金额</th>
            <th>状态</th>
            <th>操作</th>
          </tr>
        </thead>
      </table>
    </div>
    <div class="orders">

      <table class="order-item" v-for="record in records" :key="record.id">
        <thead>
          <tr>
            <th colspan="5">
              <span class="ordertitle">{{record.createTime}}订单编号：{{record.outTradeNo}} 
                <span class="pull-right delete">
                  <img src="./images/delete.png">
                </span>
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in record.orderDetailList" :key="item.id">
            <td width="60%">
              <div class="typographic">
                <img style="width: 100px; height: 100px;" :src="item.imgUrl">
                <a href="#" class="block-text">{{item.skuName}}</a>
                <span>x{{item.skuNum}}</span>
              </div>
            </td>
            <!-- 
              子模板: 组件<temlate>内部的<template>
                    它在模板解决过程中存在, 不会显示到页面上(不会改变原本的标签结构)
              利用它可以做什么? 可以通过来来统一控制多个标签
            -->
            <template v-if="index===0">
              <td :rowspan="record.orderDetailList.length" width="8%" class="center">{{record.consignee}}</td>
              <td :rowspan="record.orderDetailList.length" width="13%" class="center">
                <ul class="unstyled">
                  <li>总金额¥{{record.totalAmount}}</li>
                  <li>{{record.paymentWay==='ONLINE' ? '在线支付' : '货到付款'}}</li>
                </ul>
              </td>
              <td :rowspan="record.orderDetailList.length" width="8%" class="center">
                <a href="#" class="btn">{{record.processStatus==='UNPAID' ? '未支付' : '已支付'}}</a>
              </td> 
              <td :rowspan="record.orderDetailList.length" width="13%" class="center">
                <ul class="unstyled">
                  <li>
                    <a href="javascript:">评价|晒单</a>
                  </li>

                </ul>
              </td>
            </template>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- <Pagination 
      :currentPage="page"
      :pageSize="limit"
      :total="total"
      :showPageNo="5"
      @currentChange="getOrders"
    /> -->

    <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :pager-count="5"
        :page-sizes="[5, 10, 15, 20]"
        :page-size="5"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      >
      </el-pagination>
  </div>
</template>

<script>
import {orderListRequest} from "../../../api/order"
// import Pagination from "../../../components/Pagination"

export default {
  name: 'MyOrder',
  data(){
    return{
      currentPage:1,
      pageSize:5,
      total:0,
      records:[]
    }
  },
  methods:{
    async getOrders(){
      const records = await orderListRequest(this.currentPage,this.pageSize)
      this.records = records.records
      this.currentPage = records.current
      this.limit = records.size
      this.total = records.total
    },
    async handleCurrentChange(currentPage){
      this.currentPage=currentPage
      this.getOrders()
    },
    async handleSizeChange(pageSize){
      this.pageSize = pageSize
      this.getOrders()
    }
  },
  async mounted(){
    this.getOrders()
  },
  components:{
    // Pagination
  }
}
</script>

<style lang="less" scoped>
  //订单部分
  .order-content {
    margin: 0 20px;
    color: #666;

    //标题
    .title {
      margin-bottom: 22px;
      border: 1px solid #ddd;

      h3 {
        padding: 12px 10px;
        font-size: 15px;
        background-color: #f1f1f1;

      }
    }

    //表头
    .chosetype {
      margin-bottom: 15px;
      color: #666;

      table {
        border: 1px solid #e6e6e6;
        border-collapse: separate;
        border-radius: 2px;
        width: 100%;
        max-width: 100%;
        border-spacing: 0;

        th {
          padding: 6px 8px;
          color: #666;
          font-weight: 700;
          vertical-align: bottom;
          background-color: #f4f4f4;
          line-height: 18px;
          border-bottom: 1px solid #e6e6e6;
          font-size: 12px;
          text-align: left;
        }
      }
    }

    // 表单内容
    .orders {
      font-size: 12px;

      a {
        &:hover {
          color: #4cb9fc;
        }
      }

      table {
        border: 1px solid #e6e6e6;
        border-collapse: collapse;
        border-radius: 2px;
        width: 100%;
        margin-bottom: 18px;
        max-width: 100%;

        th {
          padding: 6px 8px;
          line-height: 18px;
          text-align: left;
          vertical-align: bottom;
          background-color: #f4f4f4;
          font-size: 12px;
          color: #666;

          .pull-right {
            float: right;
            cursor: pointer;

            img {
              margin-right: 10px;
              vertical-align: middle;
            }
          }
        }

        td {
          font-size: 12px;
          color: #666;
          padding: 6px 8px;
          line-height: 18px;
          text-align: left;
          vertical-align: middle;
          border: 1px solid #e6e6e6;

          &.center {
            text-align: center;
          }

          .typographic {
            img {
              float: left;
              margin-right: 10px;
            }

            a {
              float: left;
              min-width: 80px;
              max-width: 250px;
              color: #e1251b;

              &.service {
                color: #666;
              }
            }

            span {
              float: left;
              min-width: 80px;
              max-width: 250px;
              text-align: center;
            }

          }
        }

      }
    }

    // 分页
    .choose-order {
      .pagination {
        margin: 38px 0;

        ul {
          font-size: 0;
          display: inline-block;

          li {
            display: inline-block;
            padding: 4px 9px;
            font-size: 14px;
            border: 1px solid #e0e9ee;

            &.prev,
            &.next {
              background-color: #fafafa;
            }

            &.prev {
              border-right-color: #28a3ef;
            }

            &.page {
              border-color: #28a3ef;
              border-left: 0;

              &.actived {
                background-color: #28a3ef;

                a {
                  color: #fff;
                }

              }
            }
          }
        }

        div {
          display: inline-block;
          font-size: 14px;
          color: #333;
        }
      }
    }
  }
</style>