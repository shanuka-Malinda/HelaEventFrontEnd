// components/ArtistGallery.tsx
"use client";
import Link from 'next/link';
import React, { useState } from 'react';

type Artist = {
    id: number;
    name: string;
    businessName: string;
    address: string;
    contactNumber: string;
    imageUrl: string;
    category: string;
};

const artistsData: Artist[] = [
    {
        id: 1,
        name: 'John Doe',
        businessName: 'Doe Creations',
        address: '123 Main St, Colombo, Sri Lanka',
        contactNumber: '+94 123 456 789',
        imageUrl: '/profile/avatar.png',
        category: 'Creations',
    },
    {
        id: 2,
        name: 'John Doe',
        businessName: 'Doe Creations',
        address: '123 Main St, Colombo, Sri Lanka',
        contactNumber: '+94 123 456 789',
        imageUrl: '/profile/a4.png',
        category: 'Creations',
    },
    {
        id: 3,
        name: 'John Doe',
        businessName: 'Doe Creations',
        address: '123 Main St, Colombo, Sri Lanka',
        contactNumber: '+94 123 456 789',
        imageUrl: '/profile/avatar.png',
        category: 'Creations',
    },
    {
        id: 1,
        name: 'John Doe',
        businessName: 'Doe Creations',
        address: '123 Main St, Colombo, Sri Lanka',
        contactNumber: '+94 123 456 789',
        imageUrl: '/profile/a1.png',
        category: 'Creations',
    },
    {
        id: 2,
        name: 'John Doe',
        businessName: 'Doe Creations',
        address: '123 Main St, Colombo, Sri Lanka',
        contactNumber: '+94 123 456 789',
        imageUrl: '/profile/a2.png',
        category: 'Creations',
    },
    {
        id: 3,
        name: 'John Doe',
        businessName: 'Doe Creations',
        address: '123 Main St, Colombo, Sri Lanka',
        contactNumber: '+94 123 456 789',
        imageUrl: '/profile/a3.png',
        category: 'Creations',
    },
];

const Artists: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedCategory(e.target.value);
    };

    const filteredArtists = artistsData.filter(artist => {
        const matchesSearch = artist.name.toLowerCase().includes(searchTerm.toLowerCase()) || artist.businessName.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory ? artist.category === selectedCategory : true;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="flex flex-col md:flex-row mt-16 p-4 gap-6">
            {/* Left Column: Search and Filter */}
            <div className="md:w-[300px] w-full bg-gray-900 p-4 rounded-lg min-h-[500px] sm:min-h-[200px]">
                <h2 className="text-lg font-bold text-white mb-4">Search Artists</h2>
                <input
                    type="text"
                    value={searchTerm}
                    onChange={handleSearch}
                    placeholder="Search by name or business"
                    className="w-full p-2 rounded bg-gray-700 text-white mb-4"
                />
                <h2 className="text-lg font-bold text-white mb-2">Filter by Category</h2>
                <select
                    value={selectedCategory}
                    onChange={handleCategoryChange}
                    className="w-full p-2 rounded bg-gray-700 text-white"
                >
                    <option value="">All</option>
                    <option value="Dancers">Dancers</option>
                    <option value="Music">Music</option>
                    <option value="Arts">Arts</option>
                    <option value="Creations">Creations</option>
                    <option value="Drama">Drama</option>
                </select>
            </div>

            {/* Right Column: Artist Cards */}
            <div className="flex-1 flex flex-wrap gap-6">
                {filteredArtists.length > 0 ? (
                    filteredArtists.map(artist => (
                        <div
                            key={artist.id}
                            className="bg-gray-800 p-4 rounded-lg shadow-lg"
                            style={{ maxWidth: '280px', maxHeight: '360px', width: '100%' }}
                        >
                            <div className='flex justify-center'>
                                <img
                                    src={artist.imageUrl}
                                    alt={artist.name}
                                    className="w-40 h-40 object-cover rounded-lg mb-4"
                                />
                            </div>
                            <h3 className="text-xl font-semibold text-white">{artist.name}</h3>
                            <p className="text-sm text-gray-400">{artist.businessName}</p>
                            <p className="text-sm text-gray-400">{artist.address}</p>
                            <p className="text-sm text-gray-400">Contact: {artist.contactNumber}</p>
                            <div className='flex justify-end'>
                                <Link href={`/artists/${artist.id}`}>
                                    <button className="mt-4 ml-auto w-[150px] bg-gradient-to-r from-orange-600 to-yellow-500 hover:from-orange-700 hover:to-yellow-600 text-white py-2 rounded-lg">
                                        Visit Us
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-white">No artists found.</p>
                )}
            </div>
        </div>
    );
};

export default Artists;
