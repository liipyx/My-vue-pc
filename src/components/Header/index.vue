<template>
  <header>
    <div class="header-top">
      <div class="header-bar">
        <div class="header-login">
          <p>尚品汇欢迎您!</p>
          <p v-if="show">
            请<router-link to="/login" class="login">登录</router-link
            ><router-link to="/register" class="register">免费注册</router-link>
          </p>
          <p v-else-if="!show">{{ $route.params.user }} <a>退出</a></p>
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
      <h1 class="logo">
        <router-link to="/"><img src="./images/Logo.png" alt="" /></router-link>
      </h1>
      <form class="search" @submit.prevent="serach">
        <input type="text" v-model="searchText" @keyup.enter="serach" />
        <button>搜索</button>
      </form>
    </div>
    <div></div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      searchText: "",
      show: true,
    };
  },
  methods: {
    /* serach() {
      const location =
        "/search" + (this.searchText ? `/${this.searchText}` : "");
      console.log(location)
      this.$router.push(location);
    }, */
    serach() {
      const { searchText } = this;
      /* if (searchText) {
        this.$router.push({
          name: "search",
          params: {
            searchText,
          },
        });
      } else {
        this.$router.push("/search");
      } */
      const location = {
        name: "search",
      };
      //params参数
      if (searchText) {
        location.params = {
          searchText,
        };
      }
      /* location.params = {  //不判断不行
        searchText,
      }; */

      // query参数
      /* const { categoryName } = this.$route.query;
      if(categoryName){
        location.query = this.$route.query;
      } */
      location.query = this.$route.query; //不判断也可？
      if (this.$route.path==="/" || this.$route.path.indexOf("/home") > -1) {
        this.$router.push(location);
      }else{
        this.$router.replace(location);
      }
    },
    clearSearchText() {
      this.searchText = "";
    },
  },
  watch: {
    $route: {
      handler(newVal) {
        if (newVal.params.user) {
          this.show = false;
        }
      },
    },
  },
  mounted() {
    this.$bus.$on("clearSearchText", this.clearSearchText);
  },
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
