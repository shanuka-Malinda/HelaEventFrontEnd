"use client";
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

// Define an interface for the Post type with an imageUrl property
interface Post {
    id: number;
    title: string;
    content: string;
    imageUrl: string; // Added property for image URL
}

// Define an interface for the Artist type
interface Artist {
    id: number;
    name: string;
    businessName: string;
    address: string;
    contactNumber: string;
    avatarUrl: string;
    coverPhotoUrl: string;
    category: string;
    posts: Post[];
}

const artistsData: Artist[] = [
    {
        id: 1,
        name: 'John Doe',
        businessName: 'Doe Creations',
        address: '123 Main St, Colombo, Sri Lanka',
        contactNumber: '+94 123 456 789',
        avatarUrl: '/profile/avatar.png',
        coverPhotoUrl: '/profile/cover.png',
        category: 'Creations',
        posts: [
            { id: 1, title: 'First Creation', content: 'This is my first creation.', imageUrl: '/post/mask.jpeg' },
            { id: 2, title: 'Second Creation', content: 'This is my second creation.', imageUrl: '/post/art.jpeg' },
        ],
    },
    {
        id: 2,
        name: 'Jane Smith',
        businessName: 'Smith Designs',
        address: '456 Another St, Colombo, Sri Lanka',
        contactNumber: '+94 987 654 321',
        avatarUrl: '/profile/avatar.png',
        coverPhotoUrl: '/profile/cover2.jpg',
        category: 'Designs',
        posts: [
            { id: 1, title: 'First Design', content: 'This is my first design.', imageUrl: '/post/mask.jpeg' },
            { id: 2, title: 'Second Design', content: 'This is my second design.', imageUrl: '/post/art.jpeg' },
        ],
    },
];

const ArtistProfile = () => {
    const params = useParams(); // Use useParams in App Router
    const { id } = params;
    const [artist, setArtist] = useState<Artist | null>(null);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        if (id) {
            // Fetch the artist data by ID (replace this with API fetching if needed)
            const artistData = artistsData.find(a => a.id === parseInt(id as string));
            setArtist(artistData || null);
        }
    }, [id]);

    if (!artist) {
        return <p>Loading...</p>;
    }

    // Filter posts based on the search term
    const filteredPosts = artist.posts.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="p-4">
            {/* First Row: Cover Image and Avatar */}
            <div className="relative w-full flex justify-center">
                <img
                    src={artist.coverPhotoUrl}
                    alt={`${artist.name}'s Cover Photo`}
                    className="w-11/12 h-[60] md:h-80 lg:h-96 object-cover rounded-lg mb-4"
                />
                <img
                    src={artist.avatarUrl}
                    alt={artist.name}
                    className="absolute bottom-[5px] left-1/4 transform -translate-x-1/2 w-24 h-24 md:w-28 md:h-28 object-cover rounded-full border-2 border-white"
                />
            </div>

            {/* Second Row: Artist Details and Posts */}
            <div className="flex flex-col md:flex-row justify-center mt-4">
                {/* First Column: Artist Details and Search */}
                <div className="w-full md:w-[30%] mr-4 mb-4 md:mb-0">
                    <div className="bg-gray-800 p-4 rounded-lg mb-4">
                        <h2 className="text-3xl font-bold text-white">{artist.name}</h2>
                        <p className="text-lg text-gray-300">{artist.businessName}</p>
                        <p className="text-lg text-gray-300">{artist.category}</p>
                        <p className="text-lg text-gray-300">Address: {artist.address}</p>
                        <p className="text-lg text-gray-300">Contact: {artist.contactNumber}</p>
                        <br />
                        {/* Search Functionality */}
                        <input
                            type="text"
                            placeholder="Search posts..."
                            className="p-2 w-full border rounded-lg mb-4 bg-gray-700"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>

                {/* Second Column: Artist's Posts */}
                <div className="w-full md:w-[40%]">
                    <div className="bg-gray-800 p-4 rounded-lg">
                        <h3 className="text-2xl font-bold text-white mb-2">Posts</h3>
                        {filteredPosts.length > 0 ? (
                            filteredPosts.map((post: Post) => (  // Explicitly typing the post parameter
                                <div key={post.id} className="bg-gray-700 p-4 mb-2 rounded-lg">
                                    {/* Display post image */}
                                    <img
                                        src={post.imageUrl}
                                        alt={post.title}
                                        className="w-full h-[300px] md:h-[400px] object-cover rounded-lg mb-2"
                                    />
                                    <h4 className="text-xl text-white">{post.title}</h4>
                                    <p className="text-gray-300">{post.content}</p>
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-300">No posts found.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArtistProfile;
