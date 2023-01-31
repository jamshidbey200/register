import axios from "axios";

export const request = axios.create({
  baseURL: "https://63d7b682afbba6b7c942aa0d.mockapi.io/api/v1/",
});
