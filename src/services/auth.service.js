import http from "../http-common";

const getSession = () => {
  return http.get(`/get-session`);
};

const register = (data) => {
  return http.post(`/users/register`, data);
};

const login = (data) => {
  return http.post(`/users/login`, data);
};

const getProfile = (id) => {
  return http.get(`/profile/${id}`);
};

const logout = () => {
  return http.get(`/logout`);
};

const AuthService = {
  register,
  login,
  getSession,
  getProfile,
  logout,
};

export default AuthService;
