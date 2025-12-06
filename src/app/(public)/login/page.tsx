"use client";

import React, { useEffect, useState } from "react";
import { Mail, Lock } from "lucide-react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSession } from "@/store/session";
import { useRouter } from "next/navigation";
import { loginSchema, LoginInput } from "@/utils/validators";
import Link from "next/link";

export default function LoginPage() {
    const router = useRouter();
    const [error, setError] = useState(null);
    const login = useSession((state) => state.login);
    const user = useSession((state) => state.user);
    const loading = useSession((state) => state.loading);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginInput>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            login: "",
            password: "",
        },
    });

    useEffect(() => {
        if (user) router.push("/");
    }, [user, router]);

    const onSubmit = async (data: LoginInput) => {
        setError(null);
        try {
            await login(data.login, data.password);
            router.push("/");
        } catch (err: any) {
            setError(err?.response?.data?.message ?? "Email ou senha inválidos.");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-sm"
            >
                <h1 className="text-center text-2xl font-semibold text-purple-700 mb-6">Bem-vindo de volta!</h1>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <div className="flex items-center border rounded-md px-3 focus-within:ring-2 focus-within:ring-purple-500">
                            <Mail className="text-gray-400 w-5 h-5" />
                            <input
                                type="email"
                                placeholder="seu@gmail.com"
                                className="w-full p-2 outline-none text-sm"
                                {...register("login")}
                            />
                        </div>
                        {errors.login && <p className="text-red-500 text-sm">{errors.login.message}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Senha</label>
                        <div className="flex items-center border rounded-md px-3 focus-within:ring-2 focus-within:ring-purple-500">
                            <Lock className="text-gray-400 w-5 h-5" />
                            <input
                                type="password"
                                placeholder="********"
                                className="w-full p-2 outline-none text-sm"
                                {...register("password")}
                            />
                        </div>
                        {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
                    </div>

                    <div className="flex items-center justify-between text-sm">
                        <label className="flex items-center">
                            <input type="checkbox" className="mr-2 accent-purple-600" />
                            Lembrar-me
                        </label>
                    </div>

                    {error && <p className="text-red-500 text-sm">{error}</p>}

                    <motion.button
                        type="submit"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold py-2 rounded-md shadow-md hover:shadow-lg"
                        disabled={loading}
                    >
                        {loading ? "Entrando..." : "Entrar"}
                    </motion.button>

                    <p className="text-sm md:text-base text-gray-600 text-center">
                        Não possui uma conta?{" "}
                        <Link href="/register" className="text-purple-700 font-semibold hover:text-purple-800">
                            Cadastrar
                        </Link>
                    </p>
                </form>
            </motion.div>
        </div>
    );
}
