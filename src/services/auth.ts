"use client";
import { http } from "./http";
import type { AuthResponse, UserDTO } from "@/types/api";
import { saveToken, clearToken, readToken } from "@/utils/authStorage";

export async function signIn(email: string, password: string): Promise<UserDTO> {
    const { data } = await http.post<AuthResponse>("/auth/signin", { email, password });
    saveToken(data.token);
    return data.user;
}

export async function signUp(name: string, cpf: string, email: string, password: string): Promise<UserDTO> {
    const { data } = await http.post<AuthResponse>("/auth/signup", { name, cpf, email, password });
    saveToken(data.token);
    return data.user;
}

export function signOut() {
    clearToken();
    if (typeof window !== "undefined") window.location.href = "/login";
}

export function isAuthenticated() {
    return !!readToken();
}
