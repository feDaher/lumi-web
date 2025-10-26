'use client';
import { http } from './http';
import { User } from '@/types/user';

export async function signIn(email: string, password: string) {
  const { data } = await http.post<{ token: string; user: User }>('/auth/signin', { email, password });
  localStorage.setItem('token', data.token);
  return data.user;
}
