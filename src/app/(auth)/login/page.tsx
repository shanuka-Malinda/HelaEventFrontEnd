"use client";
import Image from 'next/image';
import Link from 'next/link';
import React from "react";
import loginImg from "../../../../public/login.jpeg";

const Login: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-black p-4 relative">
            {/* Image Section */}
            <div className="flex-shrink-0 w-full md:w-1/2 flex justify-end relative">
                <Image
                    src={loginImg}
                    alt="Login Image"
                    height={600}
                    width={600}
                    className="object-cover"
                />
                {/* Login Form Section on Image */}
                <div className="absolute inset-0 flex items-center justify-center p-4 md:hidden">
                <div className="max-w-md w-full bg-black bg-opacity-70 p-8 rounded-lg shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                        <h1 className="text-4xl font-bold text-center text-orange-500">Login</h1><br />
                        <form className="mt-8 space-y-6">
                            <div className="space-y-4">
                                <div>
                                    <input
                                        id="username"
                                        name="username"
                                        type="text"
                                        required
                                        className="w-full px-3 py-2 shadow-[0_0_15px_rgba(255,255,255,0.3)] border-white rounded-[10px] bg-black text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                        placeholder="Username"
                                    />
                                </div><br />
                                <div>
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        required
                                        className="w-full px-3 py-2 shadow-[0_0_15px_rgba(255,255,255,0.3)] border-white rounded-[10px] bg-black text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                        placeholder="Password"
                                    />
                                </div>
                            </div>

                            <div className="flex justify-end">
                                <button
                                    type="submit"
                                    className="flex justify-center py-2 px-4 border border-transparent rounded-[10px] shadow-sm text-white bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                                >
                                    Log in
                                </button>
                            </div>
                        </form>

                        <p className="mt-2 text-center text-sm text-white">
                            Don't have an account?{' '}
                            <Link href="/signup" className="font-medium text-orange-500 hover:text-orange-400">
                                Sign up
                            </Link>
                        </p>
                    </div>
                </div>
            </div>

            {/* Login Form Section for larger screens */}
            <div className="hidden md:flex w-full md:w-1/2 mt-8 md:mt-0 justify-start ml-1">
                <div className="max-w-md w-full bg-black p-8  ">
                    <h1 className="text-4xl font-bold text-center text-orange-500">Login</h1><br />
                    <form className="mt-8 space-y-6">
                        <div className="space-y-4">
                            <div>
                                <input
                                    id="username"
                                    name="username"
                                    type="text"
                                    required
                                    className="w-full px-3 py-2 shadow-[0_0_15px_rgba(255,255,255,0.3)] border-white rounded-[10px] bg-black text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                    placeholder="Username"
                                />
                            </div><br />
                            <div>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                    className="w-full px-3 py-2 shadow-[0_0_15px_rgba(255,255,255,0.3)] border-white rounded-[10px] bg-black text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                    placeholder="Password"
                                />
                            </div>
                        </div>

                        <div className="flex justify-end">
                            <button
                                type="submit"
                                className="flex justify-center py-2 px-4 border font-bold border-transparent rounded-[5px] shadow-sm text-white bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                            >
                                Log in
                            </button>
                        </div>
                    </form>

                    <p className="mt-2 text-center text-sm text-white">
                        Don't have an account?{' '}
                        <Link href="/signup" className="font-medium text-orange-500 hover:text-orange-400">
                            Sign up
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
