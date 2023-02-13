import { readdirSync, readFileSync } from 'fs'
import { PostMetaData } from '@/components/PostMetaData'
import matter from 'gray-matter'

const getPosts = (): PostMetaData[] => {
    const folder = "posts/"
    const files = readdirSync(folder)
    const filterFile = files.filter(fileName => fileName.endsWith('.md'))
  
  
    const post = filterFile.map(fileName => {
      const fileContent = readFileSync(`posts/${fileName}`, 'utf-8')
      const matterResult = matter(fileContent)
      return {
        title: matterResult.data.title,
        date: matterResult.data.date,
        subtitle: matterResult.data.subtitle,
        slug: fileName.replace('.md', ""),
      }
    })
    return post
  }

  export default getPosts