import axios from "axios";
import { API_BASE_URL } from "./config/apiBase";

const instance = axios.create({
  baseURL: `${API_BASE_URL}/api`,
  withCredentials: true, // This is important for sending cookies with requests
});

export default instance;
