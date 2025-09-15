import { api } from "@/lib/api";

export async function login(email: string, password: string) {
  const res = await api.post("/auth/login", { email, password });

  if (res.data?.access_token) {
    localStorage.setItem("access_token", res.data.access_token);
  }

  return res.data;
}

export async function signup(
  name: string,
  email: string,
  password: string,
  isSkiller: boolean
) {
  const res = await api.post("/auth/signup", {
    name,
    email,
    password,
    isSkiller,
  });

  if (res.data?.access_token) {
    localStorage.setItem("access_token", res.data.access_token);
  }

  return res.data;
}

export async function logout() {
  localStorage.removeItem("access_token");
}
