import axios, { AxiosError } from "axios";

export const http = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3334",
    withCredentials: false,
});

function getToken(): string | null {
    if (typeof window === "undefined") return null;
    return localStorage.getItem("token");
}

function clearSession() {
    if (typeof window === "undefined") return;
    localStorage.removeItem("token");
    if (window.location.pathname !== "/login") {
        window.location.href = "/login";
    }
}

http.interceptors.request.use((config) => {
    const token = getToken();
    if (token) {
        config.headers = config.headers ?? {};
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

http.interceptors.response.use(
    (res) => res,
    (err: AxiosError<unknown>) => {
        if (err.response?.status === 401) {
            clearSession();
        }
        return Promise.reject(err);
    }
);
