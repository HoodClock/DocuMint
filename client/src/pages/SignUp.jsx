import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { toast } from 'react-toastify';



function SignUp() {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleFormSubmission = async (e) => {
        e.preventDefault();
        try {

            const formData = {
                username: username,
                email: email,
                password: password,
            }

            await axios.post("http://localhost:3000/api/auth/signup/user-registeration", formData, { withCredentials: true });

            navigate('/dashboard');
            toast.success("Successfully Logged you In", { autoClose: 1000 });

        } catch (error) {
            console.log("Error in Axios", error);
            toast.error("Failed to Sign you In", { autoClose: 1000 })
        }

    }

    return (
        <div className="login-page">
            <div className="login-box">
                <h2 className='font-extrabold text-2xl'>Create an Account</h2>

                <form onSubmit={handleFormSubmission}>
                    <div className='user-box'>
                        <input
                            onChange={(e) => setUsername(e.target.value)}
                            id="username"
                            name="username"
                            type="text"
                            required
                        />
                        <label>Username</label>
                    </div>
                    <div className='user-box'>
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            id="email"
                            name="email"
                            type="email"
                            required
                        />
                        <label>Email address</label>
                    </div>
                    <div className='user-box'>
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
                        Sign Up
                    </a>
                </form>

                <div className="mt-6 text-center">
                    <p className="text-sm text-gray-300">
                        Already have an account?{" "}
                        <a href="/login">Log In</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SignUp
