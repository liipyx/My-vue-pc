<template>
  <header>
    <div class="header-top">
      <div class="header-bar">
        <div class="header-login">
          <p>尚硅谷欢迎您!</p>
          <p>
            请<router-link to="/login/phoneLogin" class="login">登录</router-link
            ><router-link to="/register" class="register">免费注册</router-link>
          </p>
        </div>
        <div class="header-list">
          <ul>
            <li><router-link to="/">我的订单</router-link></li>
            <li><router-link to="/">我的购物车</router-link></li>
            <li><router-link to="/">我的尚品汇</router-link></li>
            <li><router-link to="/">尚品汇会员</router-link></li>
            <li><router-link to="/">企业采购</router-link></li>
            <li><router-link to="/">关注尚品汇</router-link></li>
            <li><router-link to="/">合作招商</router-link></li>
            <li><router-link to="/">商家后台</router-link></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="header-bottom">
      <div class="logo">
        <router-link to="/"><img src="./images/Logo.png" alt="" /></router-link>
      </div>
      <div class="search">
        <input type="text" />
        <button>搜索</button>
      </div>
    </div>
    <div></div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="less" scoped>
header {
  a:hover {
    color: rgb(214, 110, 79);
    text-decoration: none;
  }
}
.header-top {
  background-color: #eaeaea;
}
.header-bar {
  width: 1200px;
  height: 30px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  background-color: #eaeaea;
}
.header-login {
  display: flex;
  align-items: center;
  p {
    margin-right: 15px;
  }
  .login {
    padding-right: 5px;
    border-right: 1px solid #b3aeae;
  }
  .register {
    padding-left: 5px;
  }
}
.header-list {
  height: 1005;
  ul {
    width: 600px;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    li ~ li {
      border-left: 1px solid #b3aeae;
      padding-left: 10px;
    }
  }
}
.header-bottom {
  width: 1200px;
  height: 67px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.search {
  display: flex;
  align-items: flex-end;
  input {
    width: 490px;
    height: 32px;
    padding: 5px;
    box-sizing: border-box;
    border: 2px solid rgb(216, 92, 21);
    outline: none;
  }
  button {
    width: 68px;
    height: 32px;
    outline: none;
    border: none;
    color: #fff;
    background-color: indianred;
  }
}
</style>
