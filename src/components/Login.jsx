import React, {useState} from 'react';
import axios from 'axios';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/token/', {
                username,
                password,
            });
            console.log(response.data);
            // Store the token
            localStorage.setItem('token', response.data.access);
            // Navigate to Main Menu Page
            window.location.href = '/mainmenu';
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
                required={true}
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required={true}
            />
            <button type="submit">Login</button>
        </form>
    );
}

export default Login;
