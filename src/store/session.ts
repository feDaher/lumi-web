"use client";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { UserDTO } from "@/types/api";
import { signIn, signOut as clientSignOut, signUp, signOut } from "../services/auth";

type AuthState = {
    user: UserDTO | null;
    loading: boolean;
    register: (name: string, cpf: string, email: string, password: string) => Promise<void>;
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
};

export const useSession = create<AuthState>()(
    persist(
        (set) => ({
            user: null,
            loading: false,

            register: async (name, cpf, email, password) => {
                set({ loading: true });
                try {
                    const user = await signUp(name, cpf, email, password);
                    set({ user });
                } catch (error) {
                    throw error;
                } finally {
                    set({ loading: false });
                }
            },

            login: async (email, password) => {
                set({ loading: true });
                try {
                    const user = await signIn(email, password);
                    set({ user });
                } catch (error) {
                    throw error;
                } finally {
                    set({ loading: false });
                }
            },

            logout: () => {
                signOut();
                set({ user: null });
            },
        }),
        {
            name: "lumi-auth",
            partialize: (state) => ({
                user: state.user
                    ? {
                          id: state.user.id,
                          name: state.user.name,
                      }
                    : null,
            }),
        }
    )
);
