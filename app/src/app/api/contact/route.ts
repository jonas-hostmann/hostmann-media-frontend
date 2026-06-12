import { NextRequest, NextResponse } from 'next/server';

const WP_REST_URL = process.env.NEXT_PUBLIC_WP_URL 
  ? `${process.env.NEXT_PUBLIC_WP_URL}/wp-json` 
  : 'https://wp.hostmann-media.de/wp-json';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, service, message, _honeypot } = body;

    // Honeypot check
    if (_honeypot) {
      // Silently succeed for bots
      return NextResponse.json({ success: true, message: 'Nachricht erfolgreich gesendet.' });
    }

    // Server-side validation
    if (!name || !email || !service || !message) {
      return NextResponse.json(
        { error: 'Bitte füllen Sie alle Pflichtfelder aus.' },
        { status: 400 }
      );
    }

    // Forward to WordPress backend
    const wpResponse = await fetch(`${WP_REST_URL}/hostmann/v1/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        company,
        service,
        message,
        _honeypot,
      }),
    });

    const result = await wpResponse.json();

    if (!wpResponse.ok) {
      return NextResponse.json(
        { error: result.message || 'Ein Fehler ist aufgetreten.' },
        { status: wpResponse.status }
      );
    }

    return NextResponse.json(result);
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Ein interner Serverfehler ist aufgetreten.' },
      { status: 500 }
    );
  }
}
