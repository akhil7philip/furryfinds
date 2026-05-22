import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getAllPosts, getPostBySlug, markdownToHtml } from '@/lib/posts'
import NewsletterForm from '@/components/NewsletterForm'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}

  return {
    title: post.metaTitle || post.title,
    description: post.metaDescription || post.excerpt,
    robots: post.noindex ? 'noindex, nofollow' : post.robots,
    alternates: {
      canonical: post.canonicalUrl || `/blog/${slug}/`,
    },
    openGraph: {
      title: post.ogTitle || post.title,
      description: post.ogDescription || post.excerpt,
      type: 'article',
      publishedTime: post.date,
      modifiedTime: post.lastModified || post.date,
      authors: [post.author],
      tags: post.tags,
      images: post.ogImage ? [{ url: post.ogImage }] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.ogTitle || post.title,
      description: post.ogDescription || post.excerpt,
      images: post.ogImage ? [post.ogImage] : undefined,
    },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const contentHtml = await markdownToHtml(post.content)

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    author: {
      '@type': 'Person',
      name: post.author,
      url: post.authorSocial ? `https://instagram.com/${post.authorSocial.replace('@', '')}` : undefined,
    },
    datePublished: post.date,
    dateModified: post.lastModified || post.date,
    publisher: {
      '@type': 'Organization',
      name: 'Furry Finds',
      logo: {
        '@type': 'ImageObject',
        url: 'https://furryfinds.club/favicon.svg',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://furryfinds.club/blog/${slug}/`,
    },
    ...(post.coverImage && {
      image: {
        '@type': 'ImageObject',
        url: post.coverImage,
      },
    }),
    keywords: post.keywords?.join(', ') || post.tags.join(', '),
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://furryfinds.club/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Reviews',
        item: 'https://furryfinds.club/blog/',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: `https://furryfinds.club/blog/${slug}/`,
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <article className="max-w-3xl mx-auto px-4 py-12">
        {/* Breadcrumbs */}
        <nav className="text-sm text-[#b2bec3] mb-6" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2">
            <li><a href="/" className="hover:text-[#2d6a4f]">Home</a></li>
            <li>/</li>
            <li><a href="/blog/" className="hover:text-[#2d6a4f]">Reviews</a></li>
            <li>/</li>
            <li className="text-[#636e72] font-medium">{post.title}</li>
          </ol>
        </nav>

        {/* Cover Image */}
        {post.coverImage && (
          <div className="mb-8 rounded-2xl overflow-hidden shadow-soft">
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-64 object-cover"
            />
          </div>
        )}

        {/* Header */}
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#2d3436] tracking-tight mb-4">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-3 text-sm text-[#b2bec3]">
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
            {post.lastModified && post.lastModified !== post.date && (
              <>
                <span>&middot;</span>
                <span className="text-[#f39c12]">Updated {new Date(post.lastModified).toLocaleDateString('en-US', {
                  year: 'numeric', month: 'short', day: 'numeric'
                })}</span>
              </>
            )}
            <span>&middot;</span>
            <span className="text-[#2d6a4f] font-medium">{post.author}</span>
            {post.category && (
              <>
                <span>&middot;</span>
                <span className="text-[#2d6a4f] font-medium">{post.category}</span>
              </>
            )}
          </div>
          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {post.tags.map((tag) => (
                <span key={tag} className="breed-tag">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        {/* Content */}
        <div
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />

        {/* Affiliate Disclosure */}
        <div className="affiliate-disclosure mt-10">
          <strong className="text-[#2d3436]">Affiliate Disclosure:</strong> Furry Finds is reader-supported. When you buy through links on our site, we may earn an affiliate commission at no extra cost to you. We only recommend products we'd use with our own pets.
        </div>

        {/* Author Bio */}
        {post.author && post.authorBio && (
          <div className="author-bio">
            <div className="avatar">
              {post.author.split(' ').map(n => n[0]).join('')}
            </div>
            <div>
              <p className="text-[#2d3436] font-semibold">{post.author}</p>
              <p className="text-[#636e72] text-sm mt-1">{post.authorBio}</p>
              {post.authorSocial && (
                <a href={`https://instagram.com/${post.authorSocial.replace('@', '')}`} className="text-[#2d6a4f] text-sm hover:underline mt-2 inline-block">
                  {post.authorSocial}
                </a>
              )}
            </div>
          </div>
        )}

        {/* Newsletter CTA */}
        <NewsletterForm />
      </article>
    </>
  )
}
