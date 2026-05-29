import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const PUBLIC_PATHS = [
  '/login',
  '/login/',
  '/sitemap.xml',
  '/robots.txt',
  '/rss.xml',
]

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Allow public paths without auth check
  if (
    PUBLIC_PATHS.includes(pathname) ||
    pathname.startsWith('/_next') ||
    pathname === '/favicon.ico'
  ) {
    return NextResponse.next()
  }

  const auth = request.cookies.get('site-auth')?.value
  if (auth !== 'rion') {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
