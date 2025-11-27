"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { RegisterInput, registerSchema } from "@/utils/validators"
import { signUp } from "@/services/auth"
import { AxiosError } from "axios"
import { ErrorResponse } from "@/types/api"
import InputField from "@/components/InputField"
import CPFField from "@/components/CpfField"
import {
  UserIcon,
  EyeIcon,
  EyeOffIcon,
  EmailIcon,
  CpfIcon,
  PasswordIcon,
} from "@/components/icons"
import { FormProvider } from "react-hook-form"

export default function RegisterPage() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState({
    password: false,
    confirmPassword: false,
  })
  const [error, setError] = useState<string | null>(null)

  const methods = useForm<RegisterInput>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      fullName: "",
      cpf: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  })

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = methods

  const onSubmit = async (data: RegisterInput) => {
    setError(null)
    try {
      const user = await signUp(
        data.fullName,
        data.cpf,
        data.email,
        data.password
      )
      router.push("/login")
    } catch (err: unknown) {
      const error = err as AxiosError<ErrorResponse>
      const message =
        error.response?.data?.message ?? "Erro inesperado. Tente novamente."
      setError(message)
    }
  }

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

        <FormProvider {...methods}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full space-y-3 md:space-y-4"
          >
            <InputField
              type="text"
              name="fullName"
              label="Nome Completo"
              placeholder="Digite seu nome completo"
              icon={UserIcon}
            />
            <CPFField
              name="cpf"
              label="CPF"
              placeholder="000.000.000-00"
              inputMode="numeric"
              icon={CpfIcon}
            />
            <InputField
              type="email"
              name="email"
              label="Email"
              placeholder="Digite seu email"
              autoComplete="email"
              icon={EmailIcon}
            />
            <InputField
              name="password"
              type={showPassword.password ? "text" : "password"}
              label="Senha"
              placeholder="••••••••"
              autoComplete="new-password"
              icon={PasswordIcon}
              rightElement={
                <button
                  type="button"
                  onClick={() =>
                    setShowPassword((prev) => ({
                      ...prev,
                      password: !prev.password,
                    }))
                  }
                  className="text-gray-400 hover:text-gray-600"
                >
                  {showPassword.password ? EyeIcon : EyeOffIcon}
                </button>
              }
            />
            <InputField
              name="confirmPassword"
              type={showPassword.confirmPassword ? "text" : "password"}
              label="Confirmar Senha"
              placeholder="••••••••"
              autoComplete="new-password"
              icon={PasswordIcon}
              rightElement={
                <button
                  type="button"
                  onClick={() =>
                    setShowPassword((prev) => ({
                      ...prev,
                      confirmPassword: !prev.confirmPassword,
                    }))
                  }
                  className="text-gray-400 hover:text-gray-600"
                >
                  {showPassword.confirmPassword ? EyeIcon : EyeOffIcon}
                </button>
              }
            />

            <div className="flex items-start text-xs md:text-sm">
              <input
                type="checkbox"
                id="termos"
                {...register("terms")}
                className="w-4 h-4 cursor-pointer rounded border-gray-300 text-purple-600 focus:ring-purple-500 mt-0.5"
              />
              <label
                htmlFor="termos"
                className="ml-2 text-gray-700 leading-snug"
              >
                Eu aceito os{" "}
                <span className="text-purple-600 hover:text-purple-800 font-medium">
                  termos de uso
                </span>{" "}
                e a{" "}
                <span className="text-purple-600 hover:text-purple-800 font-medium">
                  política de privacidade
                </span>
                .
              </label>
            </div>
            {errors.terms && (
              <p className="mt-1 text-sm text-red-500">
                {errors.terms.message}
              </p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-l from-purple-700 to-pink-600 text-white font-semibold py-2.5 md:py-3 rounded-xl shadow-md hover:shadow-lg text-sm md:text-base disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                  Cadastrando...
                </>
              ) : (
                "Cadastrar"
              )}
            </button>

            <p className="text-sm md:text-base text-gray-600 text-center">
              Já possui uma conta?{" "}
              <Link
                href="/login"
                className="text-purple-700 font-semibold hover:text-purple-800"
              >
                Entrar
              </Link>
            </p>
          </form>
        </FormProvider>
      </div>
      <p className="text-center mt-4 md:mt-6 text-xs md:text-sm text-black/60">
        Protegido por criptografia de ponta a ponta.
      </p>
    </div>
  )
}
