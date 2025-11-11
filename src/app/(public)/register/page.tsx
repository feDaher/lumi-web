"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import { RegisterInput, registerSchema, cpfNumeric, maskCPF } from "@/utils/validators";
import { signUp } from "@/services/auth";
import { AxiosError } from "axios";
import { ErrorResponse } from "@/types/api";
import { UserIcon, EyeIcon, EyeOffIcon, EmailIcon, CpfIcon, PasswordIcon } from "@/components/icons";

export default function RegisterPage() {
    const router = useRouter();
    const [displayValueCPF, setDisplayValueCPF] = useState<string>("");
    const [showPassword, setShowPassword] = useState({
        password: false,
        confirmPassword: false,
    });
    const [error, setError] = useState<string | null>(null);
    const {
        control,
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<RegisterInput>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            fullName: "",
            cpf: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
    });

    const onSubmit = async (data: RegisterInput) => {
        setError(null);
        try {
            const user = await signUp(data.fullName, data.cpf, data.email, data.password);
            router.push("/login");
        } catch (err: unknown) {
            const error = err as AxiosError<ErrorResponse>;
            const message = error.response?.data?.message ?? "Erro inesperado. Tente novamente.";
            setError(message);
        }
    };

    const ErrorMessage = ({ name }: { name: keyof RegisterInput }) =>
        errors[name] && <p className="mt-1 text-sm text-red-500">{errors[name]?.message}</p>;

    return (
        <div className="flex items-center justify-center flex-col min-h-screen px-4 md:px-6 w-full bg-gradient-to-br from-purple-100 via-purple-50 to-pink-50">
            <div className="flex flex-col items-center justify-center p-6 md:p-8 lg:p-12 w-full max-w-md md:max-w-lg lg:max-w-2xl bg-white/95 backdrop-blur-lg rounded-xl shadow-md">
                <h1 className="text-2xl md:text-3xl lg:text-5xl font-normal text-purple-900 tracking-tight mb-4 md:mb-6 lg:mb-8 text-center">
                    Crie sua conta
                </h1>

                {error && (
                    <div className="w-full p-3 mb-4 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-3 md:space-y-4 ">
                    <div>
                        <label htmlFor="fullName" className="block text-sm md:text-base font-medium text-gray-700 mb-1">
                            Nome Completo
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 md:pl-3.5 lg:pl-4 flex items-center pointer-events-none">
                                {UserIcon}
                            </div>
                            <input
                                type="text"
                                id="fullName"
                                placeholder="Nome Completo"
                                className="w-full pl-9 md:pl-10 lg:pl-12 pr-3 py-2 md:py-2.5 lg:py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/10  text-sm md:text-base"
                                {...register("fullName")}
                            />
                        </div>
                        <ErrorMessage name="fullName" />
                    </div>

                    <div>
                        <label htmlFor="cpf" className="block text-sm md:text-base font-medium text-gray-700 mb-1">
                            CPF
                        </label>

                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 md:pl-3.5 lg:pl-4 flex items-center pointer-events-none">
                                {CpfIcon}
                            </div>

                            <Controller
                                name="cpf"
                                control={control}
                                render={({ field }) => (
                                    <input
                                        type="text"
                                        value={displayValueCPF}
                                        onChange={(e) => {
                                            const numericValue = cpfNumeric(e.target.value);
                                            const maskedValue = maskCPF(e.target.value);

                                            setDisplayValueCPF(maskedValue);
                                            field.onChange(numericValue);
                                        }}
                                        placeholder="000.000.000-00"
                                        maxLength={14}
                                        className="w-full pl-9 md:pl-10 lg:pl-12 pr-3 py-2 md:py-2.5 lg:py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/10  text-sm md:text-base"
                                    />
                                )}
                            />
                        </div>
                        <ErrorMessage name="cpf" />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm md:text-base font-medium text-gray-700 mb-1">
                            Email
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 md:pl-3.5 lg:pl-4 flex items-center pointer-events-none">
                                {EmailIcon}
                            </div>
                            <input
                                type="email"
                                id="email"
                                placeholder="seu@email.com"
                                className="w-full pl-9 md:pl-10 lg:pl-12 pr-3 py-2 md:py-2.5 lg:py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/10  text-sm md:text-base"
                                {...register("email")}
                            />
                        </div>
                        <ErrorMessage name="email" />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm md:text-base font-medium text-gray-700 mb-1">
                            Senha
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 md:pl-3.5 lg:pl-4 flex items-center pointer-events-none">
                                {PasswordIcon}
                            </div>
                            <input
                                type={showPassword.password ? "text" : "password"}
                                id="password"
                                placeholder="••••••••"
                                className="w-full pl-9 md:pl-10 lg:pl-12 pr-10 py-2 md:py-2.5 lg:py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/10  text-sm md:text-base"
                                {...register("password")}
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword((prev) => ({ ...prev, password: !prev.password }))}
                                className="absolute inset-y-0 right-0 pr-3 md:pr-4 flex items-center text-gray-400 hover:text-gray-600"
                            >
                                {showPassword.password ? EyeIcon : EyeOffIcon}
                            </button>
                        </div>
                        <ErrorMessage name="password" />
                    </div>

                    <div>
                        <label
                            htmlFor="confirmPassword"
                            className="block text-sm md:text-base font-medium text-gray-700 mb-1"
                        >
                            Confirmar Senha
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 md:pl-3.5 lg:pl-4 flex items-center pointer-events-none">
                                {PasswordIcon}
                            </div>
                            <input
                                type={showPassword.confirmPassword ? "text" : "password"}
                                id="confirmPassword"
                                placeholder="••••••••"
                                className="w-full pl-9 md:pl-10 lg:pl-12 pr-10 py-2 md:py-2.5 lg:py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/10  text-sm md:text-base"
                                {...register("confirmPassword")}
                            />
                            <button
                                type="button"
                                onClick={() =>
                                    setShowPassword((prev) => ({ ...prev, confirmPassword: !prev.confirmPassword }))
                                }
                                className="absolute inset-y-0 right-0 pr-3 md:pr-4 flex items-center text-gray-400 hover:text-gray-600"
                            >
                                {showPassword.confirmPassword ? EyeIcon : EyeOffIcon}
                            </button>
                        </div>
                        <ErrorMessage name="confirmPassword" />
                    </div>

                    <div className="flex items-start text-xs md:text-sm">
                        <input
                            type="checkbox"
                            id="termos"
                            className="w-4 h-4 cursor-pointer rounded border-gray-300 text-purple-600 focus:ring-purple-500 mt-0.5"
                        />
                        <label htmlFor="termos" className="ml-2 text-gray-700 leading-snug">
                            Eu aceito os{" "}
                            <span className="text-purple-600 hover:text-purple-800 font-medium">termos de uso</span> e a{" "}
                            <span className="text-purple-600 hover:text-purple-800 font-medium">
                                política de privacidade
                            </span>
                            .
                        </label>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-gradient-to-l from-purple-700 to-pink-600 text-white font-semibold py-2.5 md:py-3 rounded-xl shadow-md hover:shadow-lg  text-sm md:text-base"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? "Cadastrando..." : "Cadastrar"}
                    </button>
                    <p className="text-sm  md:text-base text-gray-600">
                        Já possui uma conta?{" "}
                        <Link href={"/login"} className="text-purple-700 font-semibold hover:text-purple-800">
                            Entrar
                        </Link>
                    </p>
                </form>
            </div>
            <p className="text-center mt-4 md:mt-6 text-xs md:text-sm text-black/60">
                Protegido por criptografia de ponta a ponta.
            </p>
        </div>
    );
}
