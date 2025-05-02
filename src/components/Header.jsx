// Header.jsx
const Header = ({ onLogout, username }) => {
    return (
        <header className="bg-[#3ab868] text-white p-3 flex justify-between items-center">
            <div className="flex items-center space-x-3">
                {/* Logo */}
                <div className="flex items-center bg-auto rounded-full">
                    <img
                        src="src\assets\logo.png"
                        alt="Logo"
                        className="h-12 w-12 md:h-16 md:w-16 object-contain"
                    />
                </div>
                {/* Project & Snags text */}
                <span className="text-lg md:text-xl font-bold truncate">
                    Project & Snags
                </span>
            </div>

            <div className="flex items-center md:gap-4">
                {/* User avatar */}
                <div className="w-8 h-8 rounded-full flex items-center justify-center overflow-hidden">
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
                </div>

                {/* Desktop logout button */}
                <button
                    onClick={onLogout}
                    className="hidden md:block px-3 py-1 bg-green-700 hover:bg-green-800 rounded text-sm transition-colors"
                >
                    Logout
                </button>

                {/* Search button */}
                <button className="p-2 rounded-full hover:bg-green-700">
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

                {/* Menu button with mobile logout */}
                <button className="p-2 rounded-full hover:bg-green-700 relative group">
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
                            d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                        />
                    </svg>
                    <div className="absolute right-0 mt-2 w-24 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 hidden group-hover:block md:hidden z-10">
                        <div
                            className="py-1"
                            role="menu"
                            aria-orientation="vertical"
                        >
                            <button
                                onClick={onLogout}
                                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                role="menuitem"
                            >
                                Logout
                            </button>
                        </div>
                    </div>
                </button>
            </div>
        </header>
    );
};

export default Header;
