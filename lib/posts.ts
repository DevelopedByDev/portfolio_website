import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'posts')

// Function to convert filename to URL-safe slug
function filenameToSlug(filename: string): string {
  return filename.replace(/\.md$/, '').toLowerCase()
}

export function getAllPosts() {
  // If directory doesn't exist, return empty array
  if (!fs.existsSync(postsDirectory)) {
    return []
  }

  const files = fs.readdirSync(postsDirectory)
  
  const posts = files
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = filenameToSlug(fileName)
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data } = matter(fileContents)
      
      return {
        slug,
        fileName, // Store the original filename
        title: data.title,
        date: data.date,
        excerpt: data.excerpt,
      }
    })
    // Sort posts by date in descending order (newest first)
    .sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateB.getTime() - dateA.getTime();
    })

  return posts
}

export function getPostBySlug(slug: string) {
  // Get all files to find matching slug regardless of encoding
  const files = fs.readdirSync(postsDirectory)
  const matchingFile = files.find(file => 
    filenameToSlug(file) === slug || 
    filenameToSlug(file) === decodeURIComponent(slug)
  )
  
  if (!matchingFile) {
    throw new Error(`Post not found: ${slug}`)
  }
  
  const fullPath = path.join(postsDirectory, matchingFile)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  
  // Convert markdown to HTML string
  const processedContent = remark()
    .use(html)
    .processSync(content)
  const contentHtml = processedContent.toString()

  return {
    slug,
    title: data.title,
    date: data.date,
    content: contentHtml,
    excerpt: data.excerpt,
  }
} 