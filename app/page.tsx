import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        bigbranch's blog
      </h1>
      <p className="mb-4">
        {`¡Hola, Mundo! Mi nombre es Ramón y soy un entusiasta de la tecnología.
        Este es un blog personal en el que escribiré sobre un estilo de vida 
        conectado y actual hablando de cualquier tema que pueda interesarme lo 
        suficiente de manera relajada, personal y con aroma. ¡Espero que lo 
        disfrutes!
      `}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
