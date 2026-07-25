import axios from "axios";

const instance = axios.create({
  // baseURL: "http://localhost:5000/api", // replace with your backend URL
  baseURL: `${import.meta.env.VITE_APP_BASE_URL || "http://localhost:5000"}/api`,
  withCredentials: true, // This is important for sending cookies with requests
});

export default instance;
