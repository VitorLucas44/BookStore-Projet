import React, { useState } from 'react';

const LoginPage = () => {
    const [userEmail, setUserEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(true); // default to login page

    const handleLogin = (event) => {
        event.preventDefault();
        // replace with your authentication logic
        if (userEmail === 'book@123.com' && password === 'book123') {
            alert('You are now logged in.');
        } else {
            alert('Invalid email or password. Please try again.');
        }
    };

    const handleRegister = (event) => {
        event.preventDefault();
        // replace with your registration logic
        alert('Registration successful!');
    };

    const togglePage = () => {
        setIsLogin(!isLogin);
    };

    return (
        <div className="flex h-screen bg-gray-200">
            <div className="m-auto">
                <div className="max-w-md w-full bg-white shadow-md rounded-md p-8">
                    <h1 className="text-center text-2xl font-bold">{isLogin ? 'Login' : 'Register'}</h1>
                    <form onSubmit={isLogin ? handleLogin : handleRegister}>
                        <div className="mt-4">
                            <label className="block font-medium text-gray-700">Email</label>
                            <input type="email" name="email" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50" onChange={(e) => setUserEmail(e.target.value)} />
                        </div>
                        <div className="mt-4">
                            <label className="block font-medium text-gray-700">Password</label>
                            <input type="password" name="password" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50" onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className="mt-8">
                            <button type="submit" className="w-full bg-indigo-500 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-indigo focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">{isLogin ? 'Login' : 'Register'}</button>
                        </div>
                    </form>
                    <div className="mt-8">
                        <p className="text-center">{isLogin ? 'Don\'t have an account?' : 'Already have an account?'} <a className="text-indigo-500 underline cursor-pointer" onClick={togglePage}>{isLogin ? 'Register' : 'Login'}</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;