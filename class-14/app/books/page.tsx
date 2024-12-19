import Link from "next/link"

const Books = async () => {
  const data = await fetch("https://simple-books-api.glitch.me/books")
  const response = await data.json()
  // console.log(response)

  return (
    <div className="grid justify-center p-8 gap-4 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-2xl text-center mt-3">All Books</h1>
      <ol className="list-decimal space-y-2">
        {response.map((book: any) => (
          <li key={book.id}>
            <Link href={`/books/${book.id}`} className="hover:border-b border-black transition-all duration-300 text-lg">{book.name}</Link>
          </li>
        ))}
      </ol>
      {/* {JSON.stringify(response)} */}
    </div>
  )
}
export default Books