import { NextResponse } from 'next/server';
import { verifyToken } from './utils/jwtAuth';

const secret = 'national_plastic';

export const config = {
  matcher: ['/admin/:path*'],
};

export async function middleware(request) {
  const token = request.cookies.get('token')?.value;
  console.log('Token:', token);

  if (!token) {
    console.log('No token found, redirecting to login.');
     NextResponse.redirect(new URL('/admin/adminLogin', request.url));
     return
   
  }

  try {
    const decodedToken = await verifyToken(token, secret);
    console.log('Token verified, role:', decodedToken.role);
    if (decodedToken.role === 'admin') {
      console.log('Role is admin, proceeding.');
      return NextResponse.next();
    } else {
      console.log('Role is not admin, redirecting to login.');
      return NextResponse.redirect(new URL('/admin/adminLogin', request.url));
    }
  } catch (error) {
    console.log('Token verification failed, redirecting to login.', error);
    return NextResponse.redirect(new URL('/admin/adminLogin', request.url));
  }
}

// // middleware.js
// import { NextResponse } from 'next/server';
// import { jwtVerify } from 'jose';
// import { verifyToken } from './utils/jwtAuth';


// const protectedPaths = ['/admin'];


// export async function middleware(request) {
//   const { pathname } = request.nextUrl;

//   const loginPath = 'http://localhost:3000/admin/adminLogin';

//   if (protectedPaths.some(path => pathname.startsWith(path)) && pathname !== '/admin/adminLogin') {
//     const token = request.cookies.get('token');
//     console.log("toktok",token)

//     if (!token) {
//       return NextResponse.redirect(loginPath);
//     }

//     try {
//       // await jwtVerify(token, new TextEncoder().encode(process.env.JWT_SECRET));
//           const decodedToken = await verifyToken(token, secret);
//       const role = decodedToken.role;
//           if (role === 'admin') {
//             return NextResponse.next();
//           }
//       // return NextResponse.next();
//     } catch (error) {
//       console.log("loglogpath",loginPath)
//       return NextResponse.redirect(loginPath);
//     }
//   }

//   return NextResponse.next();
// }
