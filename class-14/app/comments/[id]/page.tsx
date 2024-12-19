const Comment = async ({params} : {params :{id :string}}) => {
    const data = await fetch(`https://jsonplaceholder.typicode.com/comments/${params.id}`)
    const res = await data.json()
  return (
    <div className="p-4 pt-12 text-3xl space-y-3 max-w-4xl mx-auto">
        <h1 className="text-center text-4xl mb-10">Comment Description</h1>
        <p>Comment Id: {res.id}</p>
        <p>Comment Post Id: {res.postId}</p>
        <p>Comment Title: {res.name}</p>
        <p>commentator: {res.email}</p>
        <p>Comment Body: {res.body}</p>
    </div>
  )
}

export default Comment