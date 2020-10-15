import { User } from "./../types/user"
import api from "./api"

export async function getUser() {
  const response = await api.get<User>("/user")
  return response.data
}

export async function login(email: string, password: string) {
  const response = await api.post<User>("/signin", {
    email: email,
    password: password,
  })
  return response.data
}
