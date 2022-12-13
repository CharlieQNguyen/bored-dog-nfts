import axios from "axios";

export const subscriptionsAxios = axios.create({
  baseURL: "http://localhost:3001/subscriptions",
});
