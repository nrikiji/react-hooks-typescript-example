import React, { useEffect, useState } from "react"
import { getBooks } from "../repositories/book"
import { Book } from "../types/book"

function Books() {
  var [books, setBooks] = useState<Book[]>([])

  useEffect(() => {
    async function load() {
      setBooks(await getBooks())
    }
    load()
  }, [])

  return (
    <>
      <h2>Books</h2>
      <ul>
        {books.map((x) => (
          <li key={x.id}>{x.title}</li>
        ))}
      </ul>
    </>
  )
}

export default Books
