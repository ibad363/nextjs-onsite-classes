import Image from "next/image";
import Form from "./components/Form";

export default async function Home() {
  const url = await fetch("http://localhost:3000//api/hello",{cache:"no-store"})
  const res = await url.json()
  console.log(res)
  return (
    <div className="grid items-center justify-items-center min-h-screen p-8  gap-16 font-[family-name:var(--font-geist-sans)]">
      <Form/>
      {res.map((product : any)=> (
        <h1>{product}</h1>
      ))}
    </div>
  );
}
