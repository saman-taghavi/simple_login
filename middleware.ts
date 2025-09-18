import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  const url = req.nextUrl

  // Add pathname + search as custom headers
  const res = NextResponse.next({
    request: {
      headers: new Headers(req.headers)
    }
  })

  res.headers.set('x-pathname', url.pathname)
  res.headers.set('x-search', url.search)
  res.headers.set('x-full-url', url.href)

  return res
}

export const config = {
  matcher: '/:path*' // run on all routes
}
