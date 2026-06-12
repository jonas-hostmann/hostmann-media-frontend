import { NextRequest, NextResponse } from 'next/server';

const WP_REST_URL = process.env.NEXT_PUBLIC_WP_URL 
  ? `${process.env.NEXT_PUBLIC_WP_URL}/wp-json`
  : 'https://wp.hostmann-media.de/wp-json';

export async function GET(request: NextRequest) {
  const path = request.nextUrl.searchParams.get('path') || '/';
  
  try {
    const res = await fetch(
      `${WP_REST_URL}/hostmann/v1/puck-page?path=${encodeURIComponent(path)}`,
      { cache: 'no-store' } // Always fresh in editor
    );
    
    if (!res.ok) {
      return NextResponse.json({ root: { props: {} }, content: [] });
    }
    
    const data = await res.json();
    return NextResponse.json(data);
  } catch {
    return NextResponse.json({ root: { props: {} }, content: [] });
  }
}

export async function POST(request: NextRequest) {
  // Check editor auth cookie
  const editorSession = request.cookies.get('editor_session')?.value;
  if (editorSession !== process.env.PUCK_EDITOR_PASSWORD) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { path, data } = body;

    if (!path || !data) {
      return NextResponse.json({ error: 'Missing path or data' }, { status: 400 });
    }

    // Forward to WordPress with authentication
    const wpUsername = process.env.WP_USERNAME;
    const wpPassword = process.env.WP_APPLICATION_PASSWORD;
    
    const authHeader = wpUsername && wpPassword
      ? 'Basic ' + Buffer.from(`${wpUsername}:${wpPassword}`).toString('base64')
      : '';

    const res = await fetch(`${WP_REST_URL}/hostmann/v1/puck-page`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(authHeader ? { 'Authorization': authHeader } : {}),
      },
      body: JSON.stringify({ path, data }),
    });

    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));
      return NextResponse.json(
        { error: 'Failed to save', details: errorData },
        { status: res.status }
      );
    }

    const result = await res.json();
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
