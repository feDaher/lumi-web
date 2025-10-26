'use client';

import { useState } from 'react';
import { signIn } from '@/services/auth';
import { ErrorResponse } from '@/types/api';
import { isAxiosError } from 'axios';
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('felipe@example.com');
  const [password, setPassword] = useState('123456');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      await signIn(email, password);
      router.replace("/");
    } catch (err: unknown) {
      if (isAxiosError<ErrorResponse>(err)) {
        setError(err.response?.data?.message ?? 'Login failed');
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center p-6">
      <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4 border p-6 rounded-xl">
        <h1 className="text-xl font-semibold">Login</h1>
        <div className="space-y-2">
          <label className="block text-sm">E-mail</label>
          <input
            className="w-full border rounded p-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="email@exemplo.com"
          />
        </div>
        <div className="space-y-2">
          <label className="block text-sm">Senha</label>
          <input
            className="w-full border rounded p-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="******"
          />
        </div>
        {error && <p className="text-sm text-red-600">{error}</p>}
        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-lg py-2 border bg-black text-white disabled:opacity-60"
        >
          {loading ? 'Entrando…' : 'Entrar'}
        </button>
      </form>
    </main>
  );
}
