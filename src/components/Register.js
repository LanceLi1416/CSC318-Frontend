import React, {useState} from 'react';
import axios from 'axios';

function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/api/users/', {
                username,
                password,
                email,
            });
            console.log(response.data);
            // Handle success (e.g., navigate to login page)
        } catch (error) {
            console.error('There was an error!', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
            />
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
            />
            <button type="submit">Register</button>
        </form>
    );
}

export default Register;
