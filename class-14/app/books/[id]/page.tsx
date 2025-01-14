const Book = async (props:any) => {
  const {id} = await props.params
    const data = await fetch(`https://simple-books-api.glitch.me/books/${id}`)
    const response = await data.json()

  return (
    <div className="p-4 pt-12 flex flex-col items-center gap-3 justify-center text-3xl">
            <p>Book ID: {response.id}</p>
            <p>Book Name: {response.name}</p>
            <p>Book Author: {response.author}</p>
            <p>Book Price: {response.price}</p>
            <p>Available: {response.available ? "Yes" : "No"}</p>
    </div>
  )
}

export default Book