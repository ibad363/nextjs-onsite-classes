import Link from "next/link"

const Albums = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/albums")
    const res = await data.json()
  return (
    <div className="grid justify-center p-8 gap-4 font-[family-name:var(--font-geist-sans)]">
        <h1 className="text-2xl text-center">All Albums</h1>
        <ol className="list-decimal space-y-2">
          {res.map((album: {id: number, userId: number, title: string}) => (
            <li key={album.id}><Link className="hover:border-b border-black" href={`/albums/${album.id}`}>{album.title}</Link></li>
          ))}
        </ol>
    </div>
  )
}

export default Albums