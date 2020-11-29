<template>
  <section>
    <div class="login-wrap">
      <div class="login">
        <div class="login-header">
          <p @click="toScanLogin" ref="scan">扫描登录</p>
          <p @click="toPhoneLogin" ref="phone" class="active">账户登录</p>
        </div>
        <component :is="showName"></component>
        <!-- <router-view></router-view> -->
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
import PhoneLogin from "./PhoneLogin";
import ScanLogin from "./ScanLogin";

export default {
  name: "Login",
  data() {
    return {
      showName: PhoneLogin,
      
    };
  },
  methods: {
    toPhoneLogin() {
      this.showName = PhoneLogin;
    },
    toScanLogin() {
      this.showName = ScanLogin;
    },
  },
  watch: {
    showName: {
      handler() {
        if (this.showName == PhoneLogin) {
          this.$refs.phone.className = 'active'
          this.$refs.scan.className = ''
        }
        if (this.showName == ScanLogin) {
          this.$refs.scan.className = 'active'
          this.$refs.phone.className = ''
        }
      },
      // immediate: true,
    },
  },
  mounted(){
    // this.$refs.phone.style.color = "indianred";
  }
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
.active{
  color: indianred;
}
</style>
