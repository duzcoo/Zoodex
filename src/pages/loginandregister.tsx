// pages/loginandregister.tsx
import { useState } from 'react';

const LoginAndRegister = () => {
    const [isLogin, setIsLogin] = useState(true);

    const toggleForm = () => setIsLogin(!isLogin);

    return (
        <div className="container mx-auto px-4">
            <h1 className="text-xl font-bold">{isLogin ? 'Login' : 'Register'}</h1>
            <form>
                {!isLogin && (
                    <input
                        placeholder="Your email"
                        type="email"
                        className="block w-full mb-4 px-3 py-2"
                    />
                )}
                <input
                    placeholder="Username"
                    type="text"
                    className="block w-full mb-4 px-3 py-2"
                />
                <input
                    placeholder="Password"
                    type="password"
                    className="block w-full mb-4 px-3 py-2"
                />
                <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                    {isLogin ? 'Login' : 'Register'}
                </button>
            </form>
            <button onClick={toggleForm} className="mt-4 text-blue-700 hover:underline">
                {isLogin ? 'Need an account? Register' : 'Already have an account? Login'}
            </button>
        </div>
    );
};

export default LoginAndRegister;
