<template>
  <div class="phone-login">
    <div class="phone">
      <span></span>
      <input type="text" placeholder="手机号" />
    </div>
    <div class="password">
      <span></span>
      <input type="text"  placeholder="请输入密码" />
    </div>
    <div class="login-bottom">
      <div class="check"><input type="checkbox" />自动登录</div>
      <p>忘记密码?</p>
    </div>
    <button class="login-button">登 录</button>
    <div class="immediate"><router-link to="/register">立即注册</router-link></div>
  </div>
</template>

<script>
export default {
  name: "PhoneLogin",
};
</script>

<style lang="less" scoped>
.phone-login{
  padding: 20px;
}
.phone,.password{
  width: 100%;
  display: flex;
  align-items: center;
  span{
    display: inline-block;
    width: 10%;
    height: 32px;
    border: 1px solid #ccc;
    border-right: none;
    box-sizing: border-box;
  }
  input{
    width: 90%;
    height: 32px;
    border: 1px solid #ccc;
    outline: none;
    padding: 10px;
    box-sizing: border-box;
  }
}
.phone{
  margin-top: 20px;
  margin-bottom: 30px;
}
.login-bottom{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
}
.check{
  display: flex;
  align-items: center;
}
.login-button{
  width: 100%;
  height: 35px;
  margin-top: 20px;
  padding: 6px;
  font-size: 16px;
  color: #fff;
  background-color: indianred;
  outline: none;
  border: none;
}
.immediate{
  width: 100%;
  text-align: right;
  margin-top: 40px;
  font-size: 15px;
  color: #666;
}
</style>
