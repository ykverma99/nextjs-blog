import { readFileSync } from 'fs';
import Markdown from 'markdown-to-jsx';
import React from 'react'
import matter from 'gray-matter'
import getPosts from '@/components/GetPost';

const getPostContent = (slug: string) => {
    const folder = 'posts/';
    const file = `${folder}${slug}.md`
    const content = readFileSync(file, 'utf-8')
    const matterResult = matter(content)
    return matterResult
}

export const generateStaticParams = async () => {
    const posts = getPosts()
    return posts.map(post => ({
        slug: post.slug
    }))
}

const page = ({ params }: any) => {
    const { slug } = params
    const content = getPostContent(slug)
    return (
        <div>
            <h1 className='text-2xl text-purple-500 font-bold'>{content.data.title}</h1>
            <article className="prose lg:prose-xl">
                <Markdown>{content.content}</Markdown>
            </article>
        </div>
    )
}

export default page