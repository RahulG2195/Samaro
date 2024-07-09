// pages/api/login.js
import { SignJWT } from 'jose';
import { serialize } from 'cookie';

export default async function handler(req, res) {
  const { username, password } = req.body;

  // Validate username and password (this is just a placeholder, implement your logic)
  if (username === 'user' && password === 'pass') {
    const token = await new SignJWT({ username })
      .setProtectedHeader({ alg: 'HS256' })
      .setExpirationTime('1h')
      .sign(new TextEncoder().encode(process.env.JWT_SECRET));

    res.setHeader('Set-Cookie', serialize('token', token, { path: '/', httpOnly: true }));
    res.status(200).json({ message: 'Login successful' });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
}
