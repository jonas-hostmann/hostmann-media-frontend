import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Only protect /editor routes
  if (!pathname.startsWith('/editor')) {
    return NextResponse.next();
  }

  // Allow login page
  if (pathname === '/editor/login') {
    return NextResponse.next();
  }

  // Check auth cookie
  const editorSession = request.cookies.get('editor_session')?.value;
  const correctPassword = process.env.PUCK_EDITOR_PASSWORD;

  if (!editorSession || !correctPassword || editorSession !== correctPassword) {
    const loginUrl = new URL('/editor/login', request.url);
    loginUrl.searchParams.set('redirect', pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/editor/:path*'],
};
