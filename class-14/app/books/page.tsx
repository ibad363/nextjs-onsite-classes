import Link from "next/link"

const Books = async () => {
  const data = await fetch("https://simple-books-api.glitch.me/books")
  const response = await data.json()

  return (
    <div className="grid justify-center p-8 gap-4 font-[family-name:var(--font-geist-sans)]">
        <h1 className="text-2xl text-center">All Books</h1>
        <ol>
        {response.map((book: any)=>(
          <div key={book.id} className="flex text-lg mt-3">
          <span>{book.id}</span>
          <li className="ml-3 hover:border-b hover:border-black transition-all duration-300">
            <Link href={`/books/${book.id}`}>{book.name}</Link>
            </li>
          </div>
        ))}
        </ol>
    </div>
  )
}
export default Books