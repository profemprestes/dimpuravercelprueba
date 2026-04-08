import { createClient } from '@/lib/client';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get('code');

  // if "next" is in param, use it as the redirect URL
  let next = searchParams.get('next') ?? '/';

  // Prevent open redirect vulnerabilities by ensuring 'next' is a valid local path.
  // Must start with '/' and not start with '//' (protocol-relative) or '/\' (backslash bypass).
  if (!next.startsWith('/') || next.startsWith('//') || next.startsWith('/\\')) {
    next = '/';
  }

  if (code) {
    const supabase = await createClient();
    const { error } = await supabase.auth.exchangeCodeForSession(code);
    if (!error) {
      return NextResponse.redirect(`${origin}${next}`);
    }
  }

  // return the user to an error page with instructions
  return NextResponse.redirect(`${origin}/auth/auth-code-error`);
}
