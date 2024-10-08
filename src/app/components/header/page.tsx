"use client"; // This makes the component a client component
import Image from 'next/image';
import { usePathname } from 'next/navigation'; // Use 'usePathname' for the current path in the new App Router
import { useState } from "react";
import LogoImg from '../../../../public/logo.png';

const Header: React.FC = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const pathname = usePathname(); // Get the current path

    return (
        <nav className="fixed top-0 left-0 right-0 z-10">
            <div className="bg-[rgba(0,0,0,0.8)] max-w-[800px] w-full rounded-[20px] mx-auto px-4 sm:px-6 lg:px-8 shadow-[0_6px_20px_rgba(255,255,255,0.1)]">
                <div className="flex justify-between h-16 items-center">
                    {/* Left Side: Logo */}
                    <div className="flex-shrink-0">
                        <Image
                            src={LogoImg}
                            alt="Home Image"
                            height={50}
                            width={50}
                        />
                    </div>

                    {/* Center: Home, Feeds, Artists */}
                    <div className="hidden sm:flex sm:space-x-8">
                        <a
                            href="/"
                            className={`${
                                pathname === '/' ? 'font-bold text-white' : 'text-gray-400'
                            } text-base font-medium px-3 py-2 hover:text-white`}
                        >
                            Home
                        </a>
                        <a
                            href="/feeds"
                            className={`${
                                pathname === '/feeds' ? 'font-bold text-white' : 'text-gray-400'
                            } text-base font-medium px-3 py-2 hover:text-white`}
                        >
                            Feeds
                        </a>
                        <a
                            href="/artists"
                            className={`${
                                pathname === '/artists' ? 'font-bold text-white' : 'text-gray-400'
                            } text-base font-medium px-3 py-2 hover:text-white`}
                        >
                            Artists
                        </a>
                    </div>

                    {/* Right Side: User Icon and Mobile Menu Toggle */}
                    <div className="flex items-center space-x-4">
                        {/* Mobile Menu Button */}
                        <div className="sm:hidden">
                            <button
                                onClick={toggleMobileMenu}
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-300 focus:outline-none"
                            >
                                <svg
                                    className="block h-6 w-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16m-7 6h7"
                                    />
                                </svg>
                            </button>
                        </div>

                        {/* User Dropdown Button */}
                        <div className="relative">
                            <button
                                onClick={toggleDropdown}
                                className="flex items-center space-x-2 focus:outline-none"
                            >
                                {/* User Image */}
                                <img
                                    className="h-10 w-10 rounded-full border border-gray-500"
                                    src="/home.png"
                                    alt="User"
                                />
                            </button>

                            {/* Dropdown Menu */}
                            {isDropdownOpen && (
                                <div className="absolute right-0 mt-2 w-48 bg-gray-800 shadow-lg rounded-md py-1">
                                    <a
                                        href="/profile"
                                        className="block px-4 py-2 text-base text-white hover:bg-gray-700"
                                    >
                                        Profile
                                    </a>
                                    <a
                                        href="/login"
                                        className="block px-4 py-2 text-base text-white hover:bg-gray-700"
                                    >
                                        Login
                                    </a>
                                    <a
                                        href="/signup"
                                        className="block px-4 py-2 text-base text-white hover:bg-gray-700"
                                    >
                                        SignUp
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="sm:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        <a
                            href="/"
                            className={`${
                                pathname === '/' ? 'font-bold text-white' : 'text-gray-400'
                            } block px-3 py-2 rounded-md text-base font-medium hover:text-white`}
                        >
                            Home
                        </a>
                        <a
                            href="/feeds"
                            className={`${
                                pathname === '/feeds' ? 'font-bold text-white' : 'text-gray-400'
                            } block px-3 py-2 rounded-md text-base font-medium hover:text-white`}
                        >
                            Feeds
                        </a>
                        <a
                            href="/artists"
                            className={`${
                                pathname === '/artists' ? 'font-bold text-white' : 'text-gray-400'
                            } block px-3 py-2 rounded-md text-base font-medium hover:text-white`}
                        >
                            Artists
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Header;
