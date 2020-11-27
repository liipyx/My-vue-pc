<template>
  <section>
    <div class="header">
      <p class="header-left">注册新用户</p>
      <p class="header-right">我有账号，去<router-link to="/phoneLogin">登录</router-link></p>
    </div>
  </section>
</template>

<script>
export default {
  name: "Register",
};
</script>

<style lang="less" scoped>
.header{
  width: 1200px;
  height: 43px;
  background-color: #ececec;
  margin: 0 auto;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header-left{
  font-size: 20px;
  font-weight: bold;
}
.header-right{
  font-size: 14px;
  font-weight: bold;
}
</style>
