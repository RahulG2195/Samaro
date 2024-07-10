'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { Form, Button, Container } from 'react-bootstrap';

export default function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post('/api/login', { username: username, password: password });
            if (res.status === 200) {
                router.push('/admin');
            } else {
                alert('Login failed');
            }
        } catch (error) {
            alert('Login failed');
        }
    };

    return (
        <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '80vh' }}>
            <div className="w-100" style={{ maxWidth: '400px' }}>
                <Form className="p-4 border rounded shadow">
                    <h2 className="mb-4 text-center">Login</h2>
                    <Form.Group controlId="formUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="formPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            
                        />
                         <Form.Check
                            type="checkbox"
                            label="Show Password"
                            checked={showPassword}
                            onChange={() => setShowPassword(!showPassword)}
                            className="mt-2 "
                            
                        />
                        
                    </Form.Group>
                    <center className='my-4'>
                        <Button variant="primary" type="submit" onClick={handleSubmit} block>
                            Login
                        </Button>
                    </center>

                </Form>
            </div>
        </Container>
    );
}