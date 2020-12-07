import request from "../utils/request";

export const loginRequest = (phone, password) => {
  return request({
    method: "POST",
    url: "/user/passport/login",
    data: {
      phone,
      password,
    },
  });
};

export const registerRequest = ({phone, password,code}) => {
  return request({
    method: "POST",
    url: "/user/passport/register",
    data: {
      phone,
      password,
      code
    },
  });
};
/* export const registerRequest = ({ phone, password, code }) => {
	return request({
		method: "POST",
		url: "/user/passport/register",
		data: {
			phone,
			password,
			code,
		},
	});
}; */
