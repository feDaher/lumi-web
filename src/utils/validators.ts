import { z } from "zod";

export const cpfNumeric = (value: string) => value.replace(/\D/g, "");
export const isCPF11Digits = (value: string) => cpfNumeric(value).length === 11;
export const maskCPF = (value: string) => {
    const digits = cpfNumeric(value);
    return digits
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
};

export const registerSchema = z
    .object({
        fullName: z.string().min(5, "Mínimo de 5 caracteres.").max(100, "Máximo de 100 caracteres."),
        cpf: z.string().refine(isCPF11Digits, "Informe um CPF válido de 11 digitos."),
        email: z.string().email("Informe um e-mail válido."),
        password: z
            .string()
            .min(6, "A senha deve conter no mínimo 6 caracteres.")
            .max(30, "A senha deve conter no máximo 30 caracteres."),
        confirmPassword: z
            .string()
            .min(6, "A senha deve conter no mínimo 6 caracteres.")
            .max(30, "A senha deve conter no máximo 30 caracteres."),
        terms: z.literal(true, {
            message: "É necessário aceitar os termos.",
        }),
    })
    .refine((value) => value.password === value.confirmPassword, {
        message: "As senhas não coincidem.",
        path: ["confirmPassword"],
    });

export type RegisterInput = z.infer<typeof registerSchema>;

export const loginSchema = z.object({
    login: z.string().min(5),
    password: z.string().min(5).max(30),
});

export type LoginInput = z.infer<typeof loginSchema>;
