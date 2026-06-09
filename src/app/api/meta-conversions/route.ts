import { NextResponse } from 'next/server';
import crypto from 'crypto';

// Helper to hash user data using SHA-256
function hashData(data: string | undefined): string | null {
  if (!data) return null;
  return crypto
    .createHash('sha256')
    .update(data.trim().toLowerCase())
    .digest('hex');
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, phone, fullName, eventName = 'Lead', eventSourceUrl } = body;

    const pixelId = process.env.META_PIXEL_ID || '825326890441811';
    const accessToken = process.env.META_ACCESS_TOKEN || 'EAAMABjZBzIKUBRg0sRPnm1NpNK6In2bikdZAaZA7lpgxbQzuDvmLLsZBO9ntAJRBZCi5t4VCEBdyKRKoXmsP29ophyK3ZC9at5ZAnFNwLii6hybZCA4wd4pvF2kvy08raYlTrCcsmf9z7nq4jlQHwIqWgicsDDgWAwLxqKOWirCiftn1lbZBT8MlfiZCZCf9xehtk3FowZDZD';

    if (!pixelId || !accessToken) {
      return NextResponse.json(
        { error: 'Meta Pixel ID or Access Token is missing' },
        { status: 500 }
      );
    }

    // Get User Agent and IP from headers for matching accuracy
    const userAgent = request.headers.get('user-agent') || '';
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || '';

    // Extract first and last name if possible
    let firstName = '';
    let lastName = '';
    if (fullName) {
      const parts = fullName.trim().split(/\s+/);
      firstName = parts[0] || '';
      lastName = parts.slice(1).join(' ') || '';
    }

    // Build the Meta Conversions API request body
    const eventTime = Math.floor(Date.now() / 1000);
    const payload = {
      data: [
        {
          event_name: eventName,
          event_time: eventTime,
          action_source: 'website',
          event_source_url: eventSourceUrl || 'https://faseehlall.com/',
          user_data: {
            em: email ? [hashData(email)] : undefined,
            ph: phone ? [hashData(phone)] : undefined,
            fn: firstName ? [hashData(firstName)] : undefined,
            ln: lastName ? [hashData(lastName)] : undefined,
            client_ip_address: ip || undefined,
            client_user_agent: userAgent || undefined,
          },
        },
      ],
    };

    const response = await fetch(
      `https://graph.facebook.com/v19.0/${pixelId}/events`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          data: payload.data,
          access_token: accessToken,
        }),
      }
    );

    const responseData = await response.json();

    if (!response.ok) {
      console.error('Meta Conversions API error response:', responseData);
      return NextResponse.json(
        { error: 'Failed to send event to Meta Conversions API', details: responseData },
        { status: response.status }
      );
    }

    return NextResponse.json({ success: true, data: responseData });
  } catch (error: any) {
    console.error('Meta Conversions API error:', error);
    return NextResponse.json(
      { error: error.message || 'Internal Server Error' },
      { status: 500 }
    );
  }
}
