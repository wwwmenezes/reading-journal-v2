import axios from "axios";

const api = axios.create({
  baseURL: "https://seu-link-da-api-aqui.com", // Substitua pelo link real da API
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
