// LoginPage.jsx
import { useState } from "react";
import ThinkHealthyLogo from "../components/ThinkHealthyLogo";

const LoginPage = ({ onLogin }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = () => {
        if (!username || !password) {
            setError("Please enter both username and password");
            return;
        }

        // In a real app, this would validate against a backend
        if (username === "admin" && password === "admin") {
            onLogin(username);
        } else {
            setError("Invalid username or password");
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md">
                <div className="flex justify-center mb-8">
                    <ThinkHealthyLogo />
                </div>

                <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
                    Employee Login
                </h2>

                {error && (
                    <div className="bg-red-50 text-red-700 p-3 rounded mb-4 text-sm">
                        {error}
                    </div>
                )}

                <div>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="username"
                        >
                            Username
                        </label>
                        <input
                            className="appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-green-500"
                            id="username"
                            type="text"
                            placeholder="Enter your username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>

                    <div className="mb-6">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="password"
                        >
                            Password
                        </label>
                        <input
                            className="appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-green-500"
                            id="password"
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    handleLogin();
                                }
                            }}
                        />
                    </div>

                    <div className="flex items-center justify-between">
                        <button
                            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline transition-colors"
                            onClick={handleLogin}
                        >
                            Sign In
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
