import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Furry Finds - Honest Pet Product Reviews',
    template: '%s | Furry Finds',
  },
  description: 'Real pet owners testing real pet products. We test with actual dogs and cats, then tell you what actually holds up.',
  metadataBase: new URL('https://furryfinds.club'),
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    siteName: 'Furry Finds',
    locale: 'en_US',
    images: ['https://furryfinds.club/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@FurryFindsReviews',
  },
  alternates: {
    types: {
      'application/rss+xml': '/rss.xml',
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              var path = window.location.pathname;
              var isPublic = path === '/login' || path === '/login/' ||
                path === '/sitemap.xml' || path === '/robots.txt' || path === '/rss.xml';
              if (!isPublic && localStorage.getItem('site-auth') !== 'rion') {
                window.location.href = '/login/';
              }
            })();
          `,
        }}
      />
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-R7308GTFN0"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-R7308GTFN0');
        `}
      </Script>
      <body className="min-h-screen flex flex-col bg-[#fef9f3] text-[#2d3436] antialiased">
        <header className="border-b border-[#ffe0b2] bg-[#fef9f3]">
          <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
            <a href="/" className="text-xl font-bold text-[#2d6a4f] tracking-tight">
              Furry Finds
            </a>
            <nav className="flex gap-6 text-sm font-medium text-[#636e72]">
              <a href="/" className="hover:text-[#2d6a4f] transition-colors">Home</a>
              <a href="/blog/" className="hover:text-[#2d6a4f] transition-colors">All Reviews</a>
              <a href="/about/" className="hover:text-[#2d6a4f] transition-colors">About</a>
              <a href="/contact/" className="hover:text-[#2d6a4f] transition-colors">Contact</a>
            </nav>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="border-t border-[#ffe0b2] bg-[#fff5e6] mt-16">
          <div className="max-w-4xl mx-auto px-4 py-8 text-sm text-[#636e72]">
            <p className="mb-2">&copy; {new Date().getFullYear()} Furry Finds. Reviews by pet owners, for pet owners.</p>
            <p className="text-xs mb-4">
              This site contains affiliate links. We may earn a commission when you purchase through our links — at no extra cost to you.
            </p>
            <div className="flex gap-4 text-xs">
              <a href="/about/" className="hover:text-[#2d6a4f]">About Us</a>
              <a href="/contact/" className="hover:text-[#2d6a4f]">Contact</a>
              <a href="/privacy/" className="hover:text-[#2d6a4f]">Privacy</a>
              <a href="/terms/" className="hover:text-[#2d6a4f]">Terms</a>
              <a href="https://instagram.com/FurryFindsReviews" className="hover:text-[#2d6a4f]">Instagram</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}