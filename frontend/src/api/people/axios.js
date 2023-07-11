import axios from "axios";

export const peopleAxios = axios.create({
  baseURL: "https://swapi.dev/api/",
});