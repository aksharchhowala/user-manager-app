import axios from "axios";
import { getToken, rememberRedirect } from "./auth";

axios.defaults.baseURL = "/api";

axios.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
    config.headers = config.headers || {};
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axios.interceptors.response.use(
  (res) => res,
  (error) => {
    if (error?.response?.status == 401) {
      try {
        const here =
          window.location.pathname +
          window.location.search +
          window.location.hash;
        rememberRedirect(here);
      } catch {
        console.log("Internal server error.");
      }
      return Promise.reject(error);
    }
  }
);

export default axios;
