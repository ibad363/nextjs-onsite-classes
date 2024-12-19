import Link from "next/link"

const Comments = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/comments")
    const res = await data.json()

    return (
        <div className='grid p-8 gap-4 font-[family-name:var(--font-geist-sans)]'>
            <h1 className="text-2xl text-center mt-3">All Comments Title</h1>
            <ol className="list-decimal space-y-2 max-w-4xl w-full mx-auto">
                {res.map((comment: { postId: number, id: number, name: string, email: string, body: string }) => (
                    <li key={comment.id}>
                        <Link href={`/comments/${comment.id}`} className="hover:border-b border-black transition-all duration-300 text-lg">{comment.name}</Link>
                    </li>
                ))}
            </ol>
        </div>
    )
}

export default Comments