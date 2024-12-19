import Link from "next/link";

export default function Home() {
  return (
    <div className="grid justify-center p-8 gap-4 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-4xl">API, Dynamic Routing, Dynamic Rendering Practice</h1>
      <nav>
        <ul className="text-xl flex gap-4 justify-center mt-10">
          <li><Link href={"/books"} className="text-gray-700 hover:text-black transition-colors duration-300">Books</Link></li>
          <li><Link href={"/albums"} className="text-gray-700 hover:text-black transition-colors duration-300">Albums</Link></li>
          <li><Link href={"/comments"} className="text-gray-700 hover:text-black transition-colors duration-300">Comments</Link></li>
        </ul>
      </nav>
    </div>
  );
}
