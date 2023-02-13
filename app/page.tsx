import getPosts from '@/components/GetPost'
import { Inter } from '@next/font/google'

import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  const posts = getPosts()
  return (
    <main>
      <div className='grid grid-cols-2 gap-4 max-w-3xl'>
        {posts.map(post => {
          return (
            <div className='border shadow-lg rounded-lg p-4' key={post.slug}>
              <Link href={`post/${post.slug}`}>
                <h2 className='text-purple-500 font-semibold text-xl'>{post.title}</h2>
              </Link>
              <p className='text-xs mb-3 text-slate-500'>{post.date}</p>
              <p className='text-gray-500'>{post.subtitle}</p>
            </div>
          )
        })}
      </div>
    </main>
  )
}
