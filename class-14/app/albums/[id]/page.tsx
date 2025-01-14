async function Album(props: any) {
  const {id} = await props.params
  const data = await fetch(`https://jsonplaceholder.typicode.com/albums/${id}`)
  const res = await data.json()
  return (
    <div className="flex flex-col items-center space-y-4 text-2xl p-5">
      <h1 className="text-3xl mb-3">Single Album Data</h1>
      <h1>Title : {res.title}</h1>
      <h1>User ID : {res.userId}</h1>
      <h1>ID : {res.id}</h1>
    </div>
  )
}

export default Album