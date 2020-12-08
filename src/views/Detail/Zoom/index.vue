<template>
  <div class="img-wrap">
    <div class="middle" @mouseenter="enter" @mousemove="move" @mouseleave="leave" ref="middle">
      <img :src="skuInfo.skuImageList?skuInfo.skuImageList[currentImgIndex].imgUrl : skuInfo.skuDefaultImg" alt="" />
      <div :class="{mask:true,maskActive:maskShow}" ref="mask"></div>
    </div>
    <div :class="{big:true,bigActive:bigShow}">
      <img :src="skuInfo.skuImageList?skuInfo.skuImageList[currentImgIndex].imgUrl : skuInfo.skuDefaultImg" alt="" ref="bigImg" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Zoom",
  data(){
    return {
      mImgUrl:"",
      bImgUrl:"",

      mouseToImg:{},
      mouseToMask:{
        x:100,
        y:100
      },
      resultPoint:{},
      maskShow:false,
      bigShow:false
    }
  },
  props:{
    currentImgIndex:Number
  },
  computed: {
    ...mapGetters(["skuInfo"]),
  },
  methods:{
    enter(e){
      this.maskShow=true
      this.bigShow=true
      const mouseToImg = {
        x:e.offsetX,
        y:e.offsetY
      }
      this.mouseToImg = mouseToImg
      this.$refs.mask.style.left = this.mouseToImg.x - this.mouseToMask.x + 'px'
      this.$refs.mask.style.top = this.mouseToImg.y - this.mouseToMask.y + 'px'

      const resultPoint = {
        x:this.mouseToImg.x - this.mouseToMask.x,
        y:this.mouseToImg.y - this.mouseToMask.y
      }
      if(resultPoint.x <= 0){
        resultPoint.x = 0
      }else if(resultPoint.x >= this.$refs.middle.clientWidth){
        resultPoint.x = this.$refs.middle.clientWidth
      }
      if(resultPoint.y <= 0){
        resultPoint.y = 0
      }else if(resultPoint.y >= this.$refs.middle.clientHeight){
        resultPoint.y = this.$refs.middle.clientHeight
      }

      this.resultPoint = resultPoint

      this.$refs.mask.style.left = this.resultPoint.x + 'px'
      this.$refs.mask.style.top = this.resultPoint.y + 'px'
      
      this.$refs.bigImg.style.left = -2*( this.resultPoint.x) + 'px'
      this.$refs.bigImg.style.top = -2*( this.resultPoint.y) + 'px'
    },
    move(e){
      const mouseToImg = {
        x:e.clientX - this.$refs.middle.getBoundingClientRect().left,
        y:e.clientY - this.$refs.middle.getBoundingClientRect().top
      }
      this.mouseToImg = mouseToImg
      
      const resultPoint = {
        x:this.mouseToImg.x - this.mouseToMask.x,
        y:this.mouseToImg.y - this.mouseToMask.y
      }
      if(resultPoint.x <= 0){
        resultPoint.x = 0
      }else if(resultPoint.x >= this.$refs.middle.clientWidth-this.$refs.mask.clientWidth){
        resultPoint.x = this.$refs.middle.clientWidth-this.$refs.mask.clientWidth
      }
      if(resultPoint.y <= 0){
        resultPoint.y = 0
      }else if(resultPoint.y >= this.$refs.middle.clientHeight-this.$refs.mask.clientHeight){
        resultPoint.y = this.$refs.middle.clientHeight-this.$refs.mask.clientHeight
      }

      this.resultPoint = resultPoint

      this.$refs.mask.style.left = this.resultPoint.x + 'px'
      this.$refs.mask.style.top = this.resultPoint.y + 'px'

      this.$refs.bigImg.style.left = -2*( this.resultPoint.x) + 'px'
      this.$refs.bigImg.style.top = -2*( this.resultPoint.y) + 'px'
    },
    leave(){
      this.maskShow = false
      this.bigShow=false
    }
  }
};
</script>

<style lang="less" scoped>
.img-wrap {
  position: relative;
}
.middle {
  width: 400px;
  height: 400px;
  border: 1px solid #ccc;
  position: relative;
  img {
    width: 100%;
  }
}
.big {
  width: 400px;
  height: 400px;
  border: 1px solid #ccc;
  background-color: #fff;
  position: absolute;
  top: 0;
  left: 401px;
  overflow: hidden;
  display: none;
  z-index: 2;
  img {
    width: 800px;
    position: absolute;
    top: 0;
    left: 0;
  }
}
.bigActive{
  display: block;
}
.mask {
  width: 200px;
  height: 200px;
  position: absolute;
  top:0;
  left: 0;
  display: none;
  background-color: rgba(241, 218, 218, 0.5);
}
.maskActive{
  display: block;
}
</style>
