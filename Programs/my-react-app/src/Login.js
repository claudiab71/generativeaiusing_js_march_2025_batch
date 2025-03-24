import React, { useState } from 'react';
import './Login.css'; // Import external CSS for styling

function Login() {
    const [emailId, setEmailId] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleLogin = () => {
        // Hardcoded credentials
        const validEmail = "user@example.com";
        const validPassword = "password123";
        // this code we test using fetch or axios third party library
        // with backend technologies like express js, spring boot, python with flask or django
        // to validate the user credentials
        if (emailId === validEmail && password === validPassword) {
            setMessage("Login successful!");
        } else {
            setMessage("Invalid email or password. Please try again.");
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <div className="form-group">
                <label>Email ID:</label>
                <input
                    type="email"
                    value={emailId}
                    onChange={(e) => setEmailId(e.target.value)}
                    placeholder="Enter your email"
                />
            </div>
            <div className="form-group">
                <label>Password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                />
            </div>
            <button onClick={handleLogin}>Login</button>
            {message && <p className="message">{message}</p>}
        </div>
    );
}

export default Login;