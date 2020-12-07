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
        <label>手机号：</label>
        <ValidationProvider rules="required|length|phone" v-slot="{ errors }">
          <input type="text" placeholder="请输入手机号" v-model="user.phone" />
          <p :style="{ color: 'red' }">{{ errors[0] }}</p>
        </ValidationProvider>
      </div>
      <div class="register-input">
        <label>验证码：</label>
        <input type="text" placeholder="请输入验证码" v-model="user.code" />
        <div class="code">
          <img
            ref="code"
            src="http://182.92.128.115/api/user/passport/code"
            @click="refreshCode"
          />
        </div>
      </div>
      <div class="register-input">
        <label>登录密码：</label>
        <input
          type="text"
          placeholder="请输入登录密码"
          v-model="user.password"
        />
      </div>
      <div class="register-input">
        <label>确认密码：</label>
        <input type="text" placeholder="请确认密码" v-model="user.rePassword" />
      </div>
      <div class="check">
        <input type="checkbox" v-model="user.isAgree" />
        <p>同意协议并注册《尚品汇用户协议》</p>
      </div>
      <button class="regster-button" @click="register">完成注册</button>
    </div>
  </section>
</template>

<script>
import { ValidationProvider, extend } from "vee-validate";
import { required } from "vee-validate/dist/rules";

extend("required", {
  ...required,
  message: "你不填手机号咋个注册，憨批！",
});

extend("length", {
  validate(value) {
    return value.length === 11;
  },
  message: "手机号长度必须为11位",
});

extend("phone", {
  validate(value) {
    return /^(13[0-9]|14[01456879]|15[0-3,5-9]|16[2567]|17[0-8]|18[0-9]|19[0-3,5-9])\d{8}$/.test(
      value
    );
  },
  message: "手机号不合法",
});

export default {
  name: "Register",
  data() {
    return {
      user: {
        phone: "",
        code: "",
        password: "",
        rePassword: "",
        isAgree: false,
      },
    };
  },
  methods: {
    async register() {
      try {
        const { phone, code, password, rePassword, isAgree } = this.user;
        if (!isAgree) {
          this.$message.error("请同意用户协议");
          return
        }
        if (password !== rePassword) {
          this.$message.error("两次输入的密码不一致");
          return
        }
        await this.$store.dispatch("reqRegister", { phone, password, code });
        this.$router.push("/login");
      } catch (err){
        // this.$message.error(err.data)
        console.log(err)
        this.user.password = "";
        this.user.rePassword = "";
        this.user.code = "";
        this.refreshCode();
      }
    },
    refreshCode() {
      this.$refs.code.src = "http://182.92.128.115/api/user/passport/code";
    },
  },
  components: {
    ValidationProvider,
  },
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
  position: relative;
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
.code {
  width: 60px;
  height: 25px;
  position: absolute;
  right: -62px;
  img {
    width: 100%;
  }
}
.check {
  width: 220px;
  margin: 0 0 0 505px;
  display: flex;
  text-align: center;
}
.regster-button {
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
/* .error-msg {
  display: block;
  color: red;
} */
</style>
