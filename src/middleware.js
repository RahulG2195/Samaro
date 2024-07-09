// import { NextResponse } from 'next/server';
// import { verifyToken } from './utils/jwtAuth';
// import { notifyError } from "@/utils/notify";

// const secret = 'national_plastic';

// export const config = {
//   matcher: ['/admin/:path*'],
//   // runtime: 'nodejs' // Specify Node.js runtime here
// };

// export async function middleware(request) {
//   const token = request.cookies.get('token')?.value;
//   if (!token) {
//     return NextResponse.redirect(new URL('/login', request.url));
//   }
  
//   try {
//     const decodedToken = await verifyToken(token, secret);
//     const role = decodedToken.role;
//     if (role === 'admin') {
//       return NextResponse.next();
//     }
//   } catch (error) {
//     return NextResponse.redirect(new URL('/Login', request.url));
//   }
  
//   notifyError("Session Expired Please Login Again");
//   return NextResponse.redirect(new URL('/Login', request.url));
// }



// middleware.js
import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

const protectedPaths = ['/admin/'];

export async function middleware(request) {
  const { pathname } = request.nextUrl;

  // Check if the path is protected
  if (pathname.startsWith(pathname)) {
    const token = request.cookies.get('token');

    // If no token is found, redirect to login page with absolute URL
    if (!token) {
      return NextResponse.redirect('http://localhost:3000/admin/adminLogin');  // Change this line
    }

    try {
      // Verify the token using jose
      await jwtVerify(token, new TextEncoder().encode(process.env.JWT_SECRET));

      // If token verification is successful, allow the request to proceed
      return NextResponse.next();
    } catch (error) {
      // If token verification fails, redirect to login page with absolute URL
      return NextResponse.redirect('http://localhost:3000/admin/adminLogin');  // Change this line
    }
  }

  // Allow the request to proceed for unprotected paths
  return NextResponse.next();
}
