import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

async function getPets () {
  const query = await client.fetch(`*[_type == "pets"]{
    _id,
    name,
    description,
    image
  }`,{},{cache:"no-store"})
  return query
}

export default async function Home() {
  const pets = await getPets()

  return (
    <div className="grid items-center justify-items-center min-h-screen p-8 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-4xl">Sanity CMS</h1>

      <section className="flex flex-wrap lg:flex-nowrap gap-4 mt-5">

        {pets.map((pet:any) => (
          <div key={pet.id} className="container max-w-[400px] hover:scale-105 transition-all duration-500 space-y-3">

            <div className="w-full h-auto sm:h-[350px]">
              <img src={urlFor(pet.image).url()} alt="Pet Image" className="rounded-lg object-cover w-full h-full" />
            </div>

            <h1 className="text-center text-3xl">{pet.name}</h1>
            <p>{pet.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
