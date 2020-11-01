import Link from 'next/link'

export default function Header({author}) {
  return (
    <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
      <div className="flex items-center">
        <img
          src={author.picture.url}
          className="w-12 h-12 rounded-full mr-4"
          alt={author.name}
        />
        <Link href="/">
          <a className="hover:underline">Anitha Jadapalli</a>
        </Link>
        .
      </div>
    </h2>
  )
}

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview)
  return {
    props: { preview, allPosts },
  }
}
