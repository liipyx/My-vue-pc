import { registerRequest, loginRequest } from "../../api/user";

export default {
  state: {
    name: localStorage.getItem("name") || "",
    token: localStorage.getItem("token") || "",
  },
  getters: {},
  actions: {
    async reqRegister({ commit }, { phone, password, code }) {
      await registerRequest({ phone, password, code });
      console.log(commit);
    },
    async reqLogin({ commit }, { phone, password }) {
      const user = await loginRequest(phone, password);
      commit("REQ_LOGIN", user);
    },
  },
  mutations: {
    REQ_LOGIN(state, user) {
      state.name = user.name;
      state.token = user.token;
    },
  },
};
