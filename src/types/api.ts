export type UserDTO = {
  id: string;
  name: string;
  email: string;
  password: string;
  cpf: string;
  createdAt?: string;
};

export type AuthResponse = {
  user: UserDTO;
  token: string;
};

export type ContactDTO = {
  id: string;
  name: string;
  phone: string;
  createdAt: string;
};

export type AlertDTO = {
  id: string;
  userId: string;
  userCpf: string;
  createdAt: string;
  notes?: string;
};

export type ErrorResponse = {
  error?: string;
  message?: string;
  issues?: unknown;
};
