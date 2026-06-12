import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const { password } = await request.json();
  const correctPassword = process.env.PUCK_EDITOR_PASSWORD;

  if (!correctPassword) {
    return NextResponse.json({ error: 'Editor not configured' }, { status: 500 });
  }

  if (password !== correctPassword) {
    return NextResponse.json({ error: 'Falsches Passwort' }, { status: 401 });
  }

  const response = NextResponse.json({ success: true });
  response.cookies.set('editor_session', correctPassword, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 7, // 7 days
  });

  return response;
}

export async function DELETE() {
  const response = NextResponse.json({ success: true });
  response.cookies.delete('editor_session');
  return response;
}
