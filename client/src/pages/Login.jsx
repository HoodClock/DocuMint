import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleFormSubmission = async (e) => {
        e.preventDefault();

        try {

            const formData = {
                username: username,
                password: password
            }

            await axios.post('http://localhost:3000/api/auth/login/auth-user', formData, { withCredentials: true });
            toast.success("Successfully Logged you In", { autoClose: 1000 });

            navigate('/dashboard');

        } catch (error) {
            console.log("Axios error occured", error);
            toast.error("Failed to Logged you In", { autoClose: 1000 })
        }

    }


    return (
        <div className="login-page">
            <div className="login-box">
                <h2 className='font-extrabold text-3xl'>Log In</h2>
                <form onSubmit={handleFormSubmission}>
                    <div className="user-box">
                        <input
                            onChange={(e) => setUsername(e.target.value)}
                            id="username"
                            name="username"
                            type="text"
                            required
                        />
                        <label>Username</label>
                    </div>
                    <div className="user-box">
                        <input
                            onChange={(e) => setPassword(e.target.value)}
                            id="password"
                            name="password"
                            type="password"
                            required
                        />
                        <label>Password</label>
                    </div>
                    <a onClick={handleFormSubmission}>
                        Log In
                        <span></span><span></span><span></span><span></span><span></span>
                    </a>
                </form>
                <div className="mt-6 text-center">
                    <p className="text-sm text-white">
                        Don't have an Account?{" "}
                        <a href="/signup" className="font-medium text-white">Create One</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Login
