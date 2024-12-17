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
        <div className="min-h-screen flex items-center justify-center bg-gray-900">
            <div className="bg-white rounded-lg shadow-md p-8 max-w-md w-full">
                <h2 className="text-2xl font-semibold text-center text-gray-800">Create an Account</h2>

                <form onSubmit={handleFormSubmission} className="mt-8 space-y-6">
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="username" className="sr-only">UserName</label>
                            <input onChange={(e) => setUsername(e.target.value)}
                                id="name"
                                name="username"
                                type="text"
                                autoComplete="unusername"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="User Name" />
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">Password</label>
                            <input
                                onChange={(e) => setPassword(e.target.value)}
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Password" />
                        </div>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Log In
                        </button>
                    </div>
                </form>
                <div className="mt-6 text-center">
                    <p className="text-sm text-gray-600">
                        Dont have an Account? <a href="/signup" className="font-medium text-indigo-600 hover:text-indigo-500">Create One</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Login
