import axios from "axios";

export const BASE_URL = "https://social-network.samuraijs.com/api/1.0";

const apiConfig = {
  baseURL: BASE_URL,
};

export const api = axios.create(apiConfig);
