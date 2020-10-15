import { Book } from "./../types/book"
import api from "./api"

export async function getBooks(): Promise<Book[]> {
  const response = await api.get<Book[]>("/books")
  return response.data
}
