export default async function Home() {
  const fetchData = await fetch("https://simple-books-api.glitch.me/books",{method: "GET"})
  const response = await fetchData.json()
  // console.log(response)

  return (
    <div className="grid justify-center p-8 gap-4 font-[family-name:var(--font-geist-sans)] text-2xl">
      <h1 className="text-3xl font-semibold text-center">API</h1>
      {response.map((book:{id:number,type:string,name:string,available:boolean})=>(
        <div className="mt-4 text-center border-slate-500">
          <p>{book.id}</p>
          <p>{book.name}</p>
          <p>{book.type}</p>
          <p>{(book.available) ? "Available" : "Un-available"}</p>
        </div>
      ))}
    </div>
  );
}
