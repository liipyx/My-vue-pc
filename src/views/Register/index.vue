<template>
  <section>
    <div class="header">
      <p class="header-left">注册新用户</p>
      <p class="header-right">
        我有账号，去
        <router-link to="/login" class="login">登录</router-link>
      </p>
    </div>
    <div class="input-wrap">
      <div class="register-input">
        <p>手机号：</p>
        <input type="text" placeholder="请输入手机号" />
      </div>
      <div class="register-input">
        <p>验证码：</p>
        <input type="text" placeholder="请输入验证码" />
      </div>
      <div class="register-input">
        <p>登录密码：</p>
        <input type="text" placeholder="请输入登陆密码" />
      </div>
      <div class="register-input">
        <p>确认密码：</p>
        <input type="text" placeholder="请确认密码" />
      </div>
      <div class="check">
        <input type="checkbox" />
        <p>同意协议并注册《尚品汇用户协议》</p>
      </div>
      <button class="regster-button">完成注册</button>
    </div>
  </section>
</template>

<script>
export default {
  name: "Register",
};
</script>

<style lang="less" scoped>
section {
  width: 1200px;
  height: 445px;
  margin: 0 auto;
  border: 1px solid #dfdfdf;
}
.header {
  width: 1200px;
  height: 43px;
  background-color: #ececec;
  margin: 0 auto;
  padding: 15px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #dfdfdf;
}
.header-left {
  font-size: 20px;
  font-weight: bold;
}
.header-right {
  font-size: 14px;
  font-weight: bold;
}
.login {
  color: chocolate;
}
.input-wrap {
  margin-top: 40px;
}
.register-input {
  width: 350px;
  height: 40px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 18px;
  p {
    font-size: 14px;
  }
  input {
    width: 270px;
    height: 38px;
    padding: 5px;
    box-sizing: border-box;
    border: 1px solid #999;
    outline: none;
  }
}
.check{
  width: 220px;
  margin: 0 0 0 505px;
  display: flex;
  text-align: center;
}
.regster-button{
  width: 270px;
  height: 38px;
  background-color: indianred;
  outline: none;
  border: none;
  margin: 18px 0 0 505px;
  font-size: 16px;
  color: #fff;
  font-weight: bold;
}
</style>
