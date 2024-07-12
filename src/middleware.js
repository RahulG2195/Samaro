import { NextResponse } from 'next/server';
import { verifyToken } from './utils/jwtAuth';

const secret = 'samaron-secret';

export const config = {
  matcher: '/admin/:path*',
};
export async function middleware(request) {
  const token = request.cookies.get('token')?.value;
  const loginURL = new URL('/admin/adminLogin', request.url);

  // Prevent redirect loop
  if (request.nextUrl.pathname === loginURL.pathname) {
    return NextResponse.next();
  }

  if (!token) {
    console.log('No token found, redirecting to login.');
    return NextResponse.redirect(loginURL);
  }

  try {
    const decodedToken = await verifyToken(token, secret);
    if (decodedToken.role === 'admin') {
      return NextResponse.next();
    } else {
      console.log('Role is not admin, redirecting to login.');
      return NextResponse.redirect(loginURL);
    }
  } catch (error) {
    console.log('Token verification failed, redirecting to login.', error);
    return NextResponse.redirect(loginURL);
  }
}
