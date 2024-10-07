"use client";
import Image from 'next/image';
import React, { useState } from "react";
import SignImg from "../../../../public/signup.png";
const SignUp: React.FC = () => {
    const [formData, setFormData] = useState({
        username: "",
        businessName: "",
        contactNo: "",
        businessNo: "",
        email: "",
        address: "",
        password: "",
        confirmPassword: "",
    });

    // Handle form changes with proper typing
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        // Add your signup logic here, like calling an API.
    };

    return (
        <div className="min-h-screen   flex items-center justify-center p-4 mt-6">
            <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-between rounded-lg  overflow-hidden ">
                {/* Form Section */}
                <div className="w-full md:w-1/2 p-6 md:p-8 lg:p-12  ">
                    <h2 className="text-2xl font-bold text-orange-500 mb-6 text-center">
                        SIGN UP
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <input
                            type="text"
                            name="username"
                            placeholder="Username"
                            className="w-full px-3 py-2 shadow-[0_0_15px_rgba(255,255,255,0.2)] border-white rounded-[10px] bg-black text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            name="businessName"
                            placeholder="Business/Personal Name"
                            className="w-full px-3 py-2 shadow-[0_0_15px_rgba(255,255,255,0.2)] border-white rounded-[10px] bg-black text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                            onChange={handleChange}
                        />
                        <div className="flex space-x-4">
                            <input
                                type="tel"
                                name="contactNo"
                                placeholder="Contact No"
                                className="w-full px-3 py-2 shadow-[0_0_15px_rgba(255,255,255,0.2)] border-white rounded-[10px] bg-black text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                onChange={handleChange}
                            />
                            <input
                                type="text"
                                name="businessNo"
                                placeholder="Business No"
                                className="w-full px-3 py-2 shadow-[0_0_15px_rgba(255,255,255,0.2)] border-white rounded-[10px] bg-black text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                onChange={handleChange}
                            />
                        </div>
                        <input
                            type="email"
                            name="email"
                            placeholder="E-mail"
                            className="w-full px-3 py-2 shadow-[0_0_15px_rgba(255,255,255,0.2)] border-white rounded-[10px] bg-black text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            name="address"
                            placeholder="Address"
                            className="w-full px-3 py-2 shadow-[0_0_15px_rgba(255,255,255,0.2)] border-white rounded-[10px] bg-black text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                            onChange={handleChange}
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            className="w-full px-3 py-2 shadow-[0_0_15px_rgba(255,255,255,0.2)] border-white rounded-[10px] bg-black text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                            onChange={handleChange}
                        />
                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            className="w-full px-3 py-2 shadow-[0_0_15px_rgba(255,255,255,0.2)] border-white rounded-[10px] bg-black text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                            onChange={handleChange}
                        />
                        <div className="flex justify-end">
                            <button
                                type="submit"
                                className="w-[100] py-2 px-4 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-bold rounded-md transition duration-300"
                            >
                                Sign Up
                            </button>
                        </div>
                    </form>
                </div>
                {/* Image Section */}
                <div className="w-full md:w-1/2 bg-black flex items-center justify-center p-6 md:p-8 lg:p-12">
                    <Image
                        src={SignImg}
                        alt="Flower Logo"
                        className="max-w-full h-auto object-contain"
                    />
                </div>
            </div>
        </div>
    );
};

export default SignUp;
