export default function Intro({author}) {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        <div className="flex items-center">
          <img
            src={author.picture.url}
            className="w-32 h-32 rounded-full mr-4"
            alt={author.name}
          />
          {author.name}
        </div>
      </h1>
    </section>
  )
}
