// Header.jsx
import { useState, useRef, useEffect } from "react";

const Header = ({ onLogout, username, onSearch }) => {
    const [showProfileMenu, setShowProfileMenu] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const searchInputRef = useRef(null);

    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        onSearch?.(value);
    };

    // Auto-focus the search input when shown
    useEffect(() => {
        if (showSearch && searchInputRef.current) {
            searchInputRef.current.focus();
        }
    }, [showSearch]);

    return (
        <header className="bg-[#3ab868] text-white p-3 flex justify-between items-center relative">
            <div className="flex items-center space-x-3">
                <div className="flex items-center bg-auto rounded-full">
                    <img
                        src="src/assets/logo.png"
                        alt="Logo"
                        className="h-12 w-12 md:h-16 md:w-16 object-contain"
                    />
                </div>
                <span className="text-lg md:text-xl font-bold truncate">
                    Project & Snags
                </span>
            </div>

            <div className="flex items-center gap-2 md:gap-4">
                {/* Search Icon */}
                <button
                    onClick={() => setShowSearch(!showSearch)}
                    className="p-2 rounded-full hover:bg-green-700"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                </button>

                {/* Search Input Field */}
                {showSearch && (
                    <input
                        type="text"
                        ref={searchInputRef}
                        value={searchTerm}
                        onChange={handleSearchChange}
                        placeholder="Search tasks..."
                        className="px-2 py-1 rounded-md text-black w-40 md:w-64 focus:outline-none"
                    />
                )}

                {/* User Avatar with Logout Dropdown */}
                <div className="relative">
                    <button
                        onClick={() => setShowProfileMenu(!showProfileMenu)}
                        className="w-8 h-8 rounded-full overflow-hidden focus:outline-none"
                    >
                        <img
                            src="/api/placeholder/32/32"
                            alt={username}
                            className="h-full w-full object-cover"
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src =
                                    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white' width='24px' height='24px'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z'/%3E%3C/svg%3E";
                            }}
                        />
                    </button>

                    {/* Logout Menu */}
                    {showProfileMenu && (
                        <div className="absolute right-0 mt-2 w-24 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                            <button
                                onClick={() => {
                                    setShowProfileMenu(false);
                                    onLogout();
                                }}
                                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                                Logout
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
