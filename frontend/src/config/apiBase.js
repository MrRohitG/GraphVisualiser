const LOCAL_API_BASE_URL = "http://localhost:5000";

export const API_BASE_URL =
  import.meta.env.VITE_APP_BASE_URL ||
  import.meta.env.VITE_API_BASE_URL ||
  (import.meta.env.DEV ? LOCAL_API_BASE_URL : "");

if (!API_BASE_URL) {
  throw new Error(
    "Missing VITE_APP_BASE_URL. Set it to your backend URL in Vercel/production."
  );
}
