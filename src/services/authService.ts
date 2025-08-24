import { api } from "@/lib/api";

export async function login(email: string, password: string) {
  const res = await api.post("/auth/login", { email, password });
  return res.data;
}

export async function signup(name: string, email: string, password: string, isSkiller: boolean) {
  const res = await api.post("/auth/signup", { name, email, password, isSkiller });
  return res.data;
}