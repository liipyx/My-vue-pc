<template>
  <section class="floor">
    <div class="title">
      <p class="big_title">{{floor.name}}</p>
      <ul class="sub-title">
        <li class="sub-item" v-for="(item,index) in floor.navList" :key="index">{{item.text}}</li>
      </ul>
    </div>
    <div class="imgLIst"></div>
  </section>
</template>

<script>
import {mapState,mapActions} from "vuex"

export default {
  name: 'Floor',
  computed:{
    ...mapState({
      floor : state=>state.home.floors[0]
    })
  },
  methods:{
    ...mapActions(['getFloors'])
  },
  mounted(){
    this.getFloors()
  }
}
</script>

<style lang="less" scoped>
.floor{
  width: 1200px;
  height: 48px;
  line-height: 48px;
  margin: 20px auto 0;
  border-bottom: 2px solid indianred;
}
.title{
  display: flex;
  justify-content: space-between;
  color: indianred;
}
.big_title{
  font-size: 20px;
  font-weight: bold;
}
.sub-title{
  display: flex;
  align-items: center;
}
.sub-item{
  height: 14px;
  line-height: 14px;
  padding: 0 10px;
  &~.sub-item{
    border-left: 1px solid indianred;
  }
}
</style>
