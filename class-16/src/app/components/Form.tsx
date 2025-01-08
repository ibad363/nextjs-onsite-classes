"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"

const Form = () => {
    const router = useRouter()
    const [product, setProduct] = useState("")

    async function handleSubmit (e:any) {
        e.preventDefault()
        const url = await fetch("/api/hello",{
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify({productName: product})
        })
        setProduct("")
        router.refresh()
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter Product"
            value={product}
            onChange={(e)=> setProduct(e.target.value)}/>
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Form