import axios, { AxiosRequestConfig } from "axios";

const ApiService = axios.create({
  baseURL: "https://conduit.productionready.io/api",
  headers: {
    "Content-type": "application/json"
  }
});

export default ApiService;
