import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'

export async function middleware(req) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req, res })
  const { data: { session } } = await supabase.auth.getSession()

  // If session doesn't exist, redirect to /login page
  if (!session && req.nextUrl.pathname !== "/login") return NextResponse.redirect(new URL('/login', req.url))

  // if session exists, redirect to home (/)
  if (session && req.nextUrl.pathname === "/login") return NextResponse.redirect(new URL('/', req.url))

  return res
}

export const config = {
  matcher: [
    /*
    * Match all request paths except for the ones starting with:
    * - api (API routes)
    * - _next/static (static files)
    * - _next/image (image optimization files)
    * - favicon.ico (favicon file)
    */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}