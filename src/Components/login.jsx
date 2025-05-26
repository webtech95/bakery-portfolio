import { useState } from "react";

const Login = () => {
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [usernameerr, setUsernameerr] = useState("");
    const [passworderr, setPassworderr] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        setError("");
        setSuccess("");
        setUsernameerr("");
        setPassworderr("");

        let isValid = true;

        if (!username.trim()) {
            setUsernameerr("Username is required");
            isValid = false;
        }

        if (!password || password.length < 6) {
            setPassworderr("Password must be at least 6 characters");
            isValid = false;
        }

        if (!isValid) {
            setError("");
            return;
        }

        setSuccess("Form submitted successfully!");

        setTimeout(() => {
            setSuccess("");
        }, 1000);

        setUsername("");
        setPassword("");
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-sm space-y-4"
            >
                <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>

                {error && <p className="text-red-600 text-sm text-center">{error}</p>}
                {success && <p className="text-green-600 text-sm text-center">{success}</p>}

                <div>
                    <label className="block text-sm font-medium text-gray-700">Username</label>
                    <input
                        type="text"
                        placeholder="Enter username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    {usernameerr && <p className="text-red-500 text-xs mt-1">{usernameerr}</p>}
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Password</label>
                    <input
                        type="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    {passworderr && <p className="text-red-500 text-xs mt-1">{passworderr}</p>}
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Login;
