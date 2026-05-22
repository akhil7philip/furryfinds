import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import remarkGfm from 'remark-gfm'
import remarkHtml from 'remark-html'
import { Metadata } from 'next'

const aboutPath = path.join(process.cwd(), 'content/pages/about.md')

export async function generateMetadata(): Promise<Metadata> {
  if (!fs.existsSync(aboutPath)) {
    return { title: 'About | Furry Finds' }
  }
  const fileContents = fs.readFileSync(aboutPath, 'utf8')
  const { data } = matter(fileContents)
  return {
    title: data.metaTitle || `${data.title} | Furry Finds`,
    description: data.metaDescription || '',
  }
}

export default async function AboutPage() {
  if (!fs.existsSync(aboutPath)) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-extrabold text-[#2d3436] mb-4">About Furry Finds</h1>
        <p className="text-gray-600">Expert pet gear reviews and buying guides for pet parents.</p>
      </div>
    )
  }

  const fileContents = fs.readFileSync(aboutPath, 'utf8')
  const { content } = matter(fileContents)
  const contentHtml = await remark().use(remarkGfm).use(remarkHtml).process(content)

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: contentHtml.toString() }}
      />
    </div>
  )
}
