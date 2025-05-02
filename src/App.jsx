// App.jsx
import { useState, useEffect } from "react";
import LoginPage from "./pages/LoginPage";
import ProjectsDashboard from "./pages/ProjectsDashboard";

export default function BuildTrackApp() {
    // Check localStorage for existing session on initial load
    const [isLoggedIn, setIsLoggedIn] = useState(() => {
        return localStorage.getItem("isLoggedIn") === "true";
    });

    const [username, setUsername] = useState(() => {
        return localStorage.getItem("username") || "";
    });

    // Update localStorage whenever login state changes
    useEffect(() => {
        localStorage.setItem("isLoggedIn", isLoggedIn);
        localStorage.setItem("username", username);
    }, [isLoggedIn, username]);

    const handleLogin = (user) => {
        setUsername(user);
        setIsLoggedIn(true);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        setUsername("");
        // Clear localStorage on logout
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("username");
    };

    return isLoggedIn ? (
        <ProjectsDashboard onLogout={handleLogout} username={username} />
    ) : (
        <LoginPage onLogin={handleLogin} />
    );
}
