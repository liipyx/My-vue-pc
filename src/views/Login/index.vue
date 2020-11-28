<template>
  <section>
    <div class="login-wrap">
      <div class="login">
        <div class="login-header">
          <p><router-link to="/login/scanLogin">扫描登录</router-link></p>
          <p>
            <router-link to="/login/PhoneLogin" active-class="active"
              >账户登录</router-link
            >
          </p>
        </div>
        <router-view></router-view>
        <!-- <div class="phone">
          <span></span>
          <input type="text" />
        </div>
        <div class="password">
          <span></span>
          <input type="text" />
        </div>
        <div class="login-bottom">
          <input type="checkbox" />
          <p>忘记密码</p>
        </div>
        <button class="login-button">登录</button>
        <div><router-link to="/register">立即注册</router-link></div> -->
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Login",
};
</script>

<style lang="less" scoped>
section {
  height: 487px;
  width: 100%;
  background-image: url("./images/loginbg.png");
  position: relative;
  a:hover {
    text-decoration: none;
    color: indianred;
  }
}
.login-wrap {
  width: 380px;
  height: 356px;
  padding: 20px;
  background-color: #fff;
  position: absolute;
  right: 60px;
  top: 50px;
}
.login {
  width: 100%;
  height: 100%;
  border: 1px solid #ccc;
}
.login-header {
  width: 100%;
  display: flex;
  p {
    width: 50%;
    height: 48px;
    line-height: 48px;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    &:first-child {
      border-right: 1px solid #ccc;
      border-bottom: 1px solid #ccc;
    }
  }
}
.active {
  color: indianred;
}
</style>
