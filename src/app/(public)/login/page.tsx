"use client";

import React, { useEffect, useState } from "react";
import { Mail, Lock } from "lucide-react";
import { motion } from "framer-motion";

type Tela = "login" | "dashboard";

interface Usuario {
  email: string;
  senha: string;
}

export default function LoginPage() {
  const [tela, setTela] = useState<Tela>("login");
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [token, setToken] = useState<string | null>(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [lembrar, setLembrar] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const storedUsers = window.localStorage.getItem("usuarios");
    if (storedUsers) {
      try {
        setUsuarios(JSON.parse(storedUsers));
      } catch {
        setUsuarios([]);
      }
    }

    const storedToken =
      window.localStorage.getItem("token") ||
      window.sessionStorage.getItem("token");

    if (storedToken) {
      setToken(storedToken);
      setTela("dashboard");
    }
  }, []);

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const usuario = usuarios.find(
      (u) => u.email === email && u.senha === senha
    );

    setTimeout(() => {
      if (!usuario) {
        setError("Email ou senha incorretos!");
      } else {
        const t = "token_" + new Date().getTime();
        setToken(t);

        if (typeof window !== "undefined") {
          if (lembrar) window.localStorage.setItem("token", t);
          else window.sessionStorage.setItem("token", t);
        }

        setTela("dashboard");
      }
      setLoading(false);
    }, 500);
  };

  const handleLogout = () => {
    if (typeof window !== "undefined") {
      window.localStorage.removeItem("token");
      window.sessionStorage.removeItem("token");
    }
    setToken(null);
    setTela("login");
  };

  if (tela === "dashboard" && token) {
    return (
      <motion.div
        key={tela}
        className="min-h-screen flex flex-col items-center justify-center bg-gray-100"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h1 className="text-3xl font-bold text-purple-700 mb-6">Dashboard</h1>
        <button
          onClick={handleLogout}
          className="px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
        >
          Sair
        </button>
      </motion.div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <motion.div
        key={tela}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-sm"
      >
        <h1 className="text-center text-2xl font-semibold text-purple-700 mb-6">
          Bem-vindo de volta!
        </h1>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <div className="flex items-center border rounded-md px-3 focus-within:ring-2 focus-within:ring-purple-500">
              <Mail className="text-gray-400 w-5 h-5" />
              <input
                type="email"
                placeholder="seu@gmail.com"
                className="w-full p-2 outline-none text-sm"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Senha
            </label>
            <div className="flex items-center border rounded-md px-3 focus-within:ring-2 focus-within:ring-purple-500">
              <Lock className="text-gray-400 w-5 h-5" />
              <input
                type="password"
                placeholder="********"
                className="w-full p-2 outline-none text-sm"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={lembrar}
                onChange={() => setLembrar((prev) => !prev)}
                className="mr-2 accent-purple-600"
              />
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
        </form>
      </motion.div>
    </div>
  );
}
