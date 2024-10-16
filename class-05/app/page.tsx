import Image from "next/image";

export default function Home() {
  return (
    <>
      <div>
      <div>
        <h1 className="text-yellow-400 m-0.5 p-0.5 text-center font-bold text-7xl bg-blue-400 border-red-500 border-8">Ibad</h1>
        <p className="m-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem itaque deserunt optio illum, inventore a vero, rem repellendus cum molestias sequi similique? Inventore neque repellat, velit nobis sapiente dolore similique assumenda consectetur magnam facere dolorum, aliquid ducimus! Nobis at eveniet placeat quod quo veritatis quos similique ipsa. Eum, iusto harum.</p>
      </div>
      <div>
        <header>
          <nav className="flex w-full h-20 gap-7 bg-black items-center">
            <div className="bg-purple-800 w-64 h-10"></div>
            <div className="flex gap-6 w-4/5 justify-end">
              <div className="bg-green-600 w-32 h-10 p-2">About</div>
              <div className="bg-yellow-600 w-32 h-10 p-2">Contact</div>
              <div className="bg-red-600 w-32 h-10 p-2">Gallery</div>
            </div>
          </nav>
        </header>
        <h1 className="text-7xl text-center font-bold">Flexbox</h1>
      </div>
    </div>
    </>
  );
}
