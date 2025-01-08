import Image from "next/image";
import Form from "./components/Form";

export default async function Home() {
  const url = await fetch("http://localhost:3000//api/hello",{cache:"no-store"})
  const res = await url.json()
  console.log(res)
  return (
    <div className="flex items-center justify-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Form/>
      {res.map((product : any)=> (
        <li>{product.productName}</li>
      ))}
    </div>
  );
}
