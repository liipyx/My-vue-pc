<template>
  <form class="phone-login" @submit.prevent="login">
    <div class="phone">
      <span></span>
      <input type="text" placeholder="手机号" v-model="user.phone" />
    </div>
    <div class="password">
      <span></span>
      <input type="text" placeholder="请输入密码" v-model="user.password" />
    </div>
    <div class="login-bottom">
      <div class="check"><input type="checkbox" v-model="isAutoLogin" />自动登录</div>
      <p>忘记密码?</p>
    </div>
    <button type="submit" class="login-button">登 录</button>
    <div class="immediate">
      <router-link to="/register">立即注册</router-link>
    </div>
  </form>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "PhoneLogin",
  data() {
    return {
      user: {
        phone: "",
        password: "",
      },
      isLogining: false,
      isAutoLogin:true
    };
  },
  created() {
    if (this.token) {
      this.$router.replace("/");
    }
  },
  computed: {
    ...mapState({
      token: (state) => state.user.token,
      name:(state) => state.user.name
    }),
  },
  methods: {
    async login() {
      try {
        if (this.isLogining) return;
        this.isLogining = true;
        const { phone, password } = this.user;
        await this.$store.dispatch("reqLogin", { phone, password });
        if(this.isAutoLogin){
          localStorage.setItem("token",this.token)
          localStorage.setItem("name",this.name)
        }
        this.$router.replace("/");
      } catch {
        this.isLogining = false;
      }
    },
  },
};
</script>

<style lang="less" scoped>
.phone-login {
  padding: 20px;
}
.phone,
.password {
  width: 100%;
  display: flex;
  align-items: center;
  span {
    display: inline-block;
    width: 10%;
    height: 32px;
    border: 1px solid #ccc;
    border-right: none;
    box-sizing: border-box;
  }
  input {
    width: 90%;
    height: 32px;
    border: 1px solid #ccc;
    outline: none;
    padding: 10px;
    box-sizing: border-box;
  }
}
.phone {
  margin-top: 20px;
  margin-bottom: 30px;
}
.login-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
}
.check {
  display: flex;
  align-items: center;
}
.login-button {
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
.immediate {
  width: 100%;
  text-align: right;
  margin-top: 40px;
  font-size: 15px;
  color: #666;
}
</style>
