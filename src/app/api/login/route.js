import { SignJWT } from 'jose';
import { serialize } from 'cookie';
import { query } from '@/utils/Dbconnect';
import bcrypt from "bcryptjs";
import {generateToken} from "@/utils/jwtAuth.js"
import { cookies } from 'next/headers';


export async function GET(req, res) {

    try {
        const results = await query({
          query: "SELECT * FROM adminlogin", 
        });
        return new Response(JSON.stringify(results[0]), { status: 200 });
      } catch (error) {
        return new Response(JSON.stringify({ status: 500, message: error.message }), { status: 500 });
      }

}
export async function POST(req, res) {

    const { username, password } = await req.json();

    const result = await query({
        query: "SELECT * FROM adminlogin",
        values: [],
    })
    const storedUsername = result[0].username;
    const storedPassword = result[0].password;



    const checkPassword = await bcrypt.compare(password, storedPassword);

 


    if (username === storedUsername && checkPassword) {
        try {                    
                const token = await generateToken({username: username , role: "admin"});
                cookies().set('token', token, { 
                  httpOnly: true,
                  secure: false,
                  sameSite: 'strict'
                });
                      

            return new Response(
                JSON.stringify({ status: 200, message: "Login successfully", token: token }),
                { status: 200 }
            );
        } catch (error) {
            return new Response(JSON.stringify({ status: 500, message: error.message }), { status: 500 });
        }
    } else {
        return new Response(JSON.stringify({ status: 403, message: error.message }), { status: 403 });
    }
}

export async function PUT(req, res) {
    const { username, newPassword } = await req.json();
  
    // Validate input
    if (!username || !newPassword) {
      return new Response(JSON.stringify({ status: 400, message: "Username and new password are required" }), { status: 400 });
    }
  
    try {
      const result = await query({
        query: "SELECT * FROM adminlogin WHERE username = ?",
        values: [username],
      });
  
      if (result.length === 0) {
        return new Response(JSON.stringify({ status: 404, message: "User not found" }), { status: 404 });
      }
  
      // Hash the new password
      const hashedPassword = await bcrypt.hash(newPassword, 10);
  
      // Update the password in the database
      await query({
        query: "UPDATE adminlogin SET password = ? WHERE username = ?",
        values: [hashedPassword, username],
      });
  
      return new Response(JSON.stringify({ status: 200, message: "Password updated successfully" }), { status: 200 });
    } catch (error) {
      return new Response(JSON.stringify({ status: 500, message: error.message }), { status: 500 });
    }
  }

  export async function DELETE(request) {
    try {
      const response = new Response(JSON.stringify({ message: 'Token cookie deleted successfully' }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
  
      // Set the cookie to an empty value and set the expiration date to a past date
      response.headers.append('Set-Cookie', serialize('token', '', {
        path: '/',
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        expires: new Date(0) // Expire the cookie immediately
      }));
  
      return response;
    } catch (error) {
      console.error('Error deleting auth cookie:', error);
      return new Response(JSON.stringify({ error: 'Token cookie Not present' }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    }
  }
  
  