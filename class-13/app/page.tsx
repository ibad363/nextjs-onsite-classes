import Image from "next/image";

export default async function Home() {
  const fetchData = await fetch("https://simple-books-api.glitch.me/books",{method: "GET"})
  const response = await fetchData.json()
  console.log(response)

  return (
    <div className="grid justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-3xl font-semibold">API</h1>
    </div>
  );
}
