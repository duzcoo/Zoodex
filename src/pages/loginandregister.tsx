// pages/loginandregister.tsx
import { useState } from 'react';
import Layout from '../components/layout'; // Make sure this is correctly imported to maintain consistent navigation and style

const LoginAndRegister = () => {
    const [isLogin, setIsLogin] = useState(true);

    const toggleForm = () => setIsLogin(!isLogin);

    return (
        <Layout>
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-2xl font-bold text-center">{isLogin ? 'Login' : 'Register'}</h1>
                <div className="max-w-md mx-auto mt-6 bg-white p-8 border border-gray-300 rounded-lg shadow-lg">
                    <form className="space-y-6">
                        {!isLogin && (
                            <input
                                placeholder="Your email"
                                type="email"
                                className="block w-full p-2 border rounded border-gray-300"
                            />
                        )}
                        <input
                            placeholder="Username"
                            type="text"
                            className="block w-full p-2 border rounded border-gray-300"
                        />
                        <input
                            placeholder="Password"
                            type="password"
                            className="block w-full p-2 border rounded border-gray-300"
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
