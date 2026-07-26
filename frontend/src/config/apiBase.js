const LOCAL_API_BASE_URL = "http://localhost:5000";

export const API_BASE_URL =
  import.meta.env.VITE_APP_BASE_URL ||
  import.meta.env.VITE_API_BASE_URL ||
  (import.meta.env.DEV ? LOCAL_API_BASE_URL : "");
