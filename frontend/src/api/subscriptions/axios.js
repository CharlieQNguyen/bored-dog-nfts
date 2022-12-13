import axios from "axios";

export const nftsAxios = axios.create({
  baseURL: "http://localhost:3001/subscriptions",
});
