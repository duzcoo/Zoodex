import React, { useState } from 'react';
import Layout from '../components/layout'; // Make sure this is correctly imported

const LoginAndRegister = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [ageGroup, setAgeGroup] = useState('');

    const toggleForm = () => setIsLogin(!isLogin);
    const handleSubmit = (event) => {
        event.preventDefault();
        // Here you would typically handle the form submission to your backend
        console.log({ email, username, password, ageGroup });
    };

    return (
        <Layout>
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-2xl font-bold text-center">{isLogin ? 'Login' : 'Register'}</h1>
                <div className="max-w-md mx-auto mt-6 bg-white p-8 border border-gray-300 rounded-lg shadow-lg">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {!isLogin && (
                            <>
                                <input
                                    placeholder="Your email"
                                    type="email"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    className="block w-full p-2 border rounded border-gray-300 text-gray-900"
                                />
                                <select
                                    value={ageGroup}
                                    onChange={e => setAgeGroup(e.target.value)}
                                    className="block w-full p-2 border rounded border-gray-300 text-gray-900"
                                >
                                    <option value="">Select your age group</option>
                                    <option value="0-18">0-18</option>
                                    <option value="18+">18+</option>
                                </select>
                            </>
                        )}
                        <input
                            placeholder="Username"
                            type="text"
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                            className="block w-full p-2 border rounded border-gray-300 text-gray-900"
                        />
                        <input
                            placeholder="Password"
                            type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            className="block w-full p-2 border rounded border-gray-300 text-gray-900"
                        />
                        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
                            {isLogin ? 'Login' : 'Register'}
                        </button>
                    </form>
                    <button onClick={toggleForm} className="mt-4 text-blue-700 hover:underline block text-center">
                        {isLogin ? 'Need an account? Register' : 'Already have an account? Login'}
                    </button>
                </div>
            </div>
        </Layout>
    );
};

export default LoginAndRegister;
