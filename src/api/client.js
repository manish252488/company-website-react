import axios from "axios";
import store from "../store";
const env = process.env.NODE_ENV;
const testUrl = "http://domain.com";
const prodUrl = "https://domain.com";

const url = env === "DEV" ? testUrl : env === "PROD" ? prodUrl : "";
const Client = axios.create({
  headers: {
    "x-api-key": "some-api-key",
  },
  timeout: 50000,
  baseURL: url,
});

Client.interceptors.request.use(
  (config) => {
    let token = store.getState().Auth.token;
    console.log(config.url, token);
    if (token && token !== "") {
      config.headers.Authorization = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
Client.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default Client;
