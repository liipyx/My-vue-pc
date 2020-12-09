<template>
  <button @click="handleClick"><slot></slot></button>
</template>

<script>
export default {
  name: 'Button',
  data(){
    return{
      isClick:false
    }
  },
  methods:{
    handleClick(){
      if(this.isClick) return
      this.isClick = true
      console.log("111")
      this.$listeners.click().finally(()=>{
        this.isClick = false
      })
    }
  }
}
</script>

<style lang="less" scoped>

</style>
