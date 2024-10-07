"use client";
import {
    ChatBubbleBottomCenterTextIcon,
    HeartIcon as HeartIconOutline,
    HeartIcon as HeartIconSolid,
} from '@heroicons/react/24/outline';
import { useState } from 'react';

interface Post {
    id: number;
    title: string;
    category: string;
    content: string;
    imageUrl: string;
}

const samplePosts: Post[] = [
    {
        id: 1,
        title: 'Traditional Dance Performance',
        category: 'Dancers',
        content: 'A captivating performance of traditional Sri Lankan dance.',
        imageUrl: '/post/udarata.jpeg',
    },
    {
        id: 2,
        title: 'Centigraze Music Night',
        category: 'Music',
        content: 'Enjoy a night filled with mesmerizing folk music.',
        imageUrl: '/post/c.jpeg',
    },
    {
        id: 3,
        title: 'Art Exhibition',
        category: 'Arts',
        content: 'Discover stunning batik art pieces by local artists.',
        imageUrl: '/post/art.jpeg',
    },
    {
        id: 4,
        title: 'Mask Creations',
        category: 'Creations',
        content: 'Explore unique handcrafted items made by skilled artisans.',
        imageUrl: '/post/mask.jpeg',
    },
    {
        id: 5,
        title: 'Kolam drama',
        category: 'Drama',
        content: 'A thrilling play that captivates the audience.',
        imageUrl: '/post/kolam.jpeg',
    },
];

// PostList component
interface LikedPosts {
    [key: number]: boolean;
}

const PostList = ({
    filteredPosts,
    likedPosts,
    handleHeartClick,
}: {
    filteredPosts: Post[];
    likedPosts: LikedPosts;
    handleHeartClick: (postId: number) => void;
}) => {
    return (
        <div className="flex-1 mx-auto p-4 md:ml-[35%] max-w-[450px] md:h-screen h-auto mt-5 flex flex-col items-center">
            <div className="space-y-4 w-full">
                {filteredPosts.map((post) => (
                    <div
                        key={post.id}
                        className="bg-gray-800 rounded-lg p-4 shadow-md mx-auto relative"
                        style={{
                            width: '100%',
                            maxWidth: '450px',
                        }}
                    >
                        <img
                            src={post.imageUrl}
                            alt={post.title}
                            className="w-full h-auto object-cover rounded-md mb-2"
                        />
                        <h2 className="font-semibold">{post.title}</h2>
                        <p className="text-gray-400 mb-6">{post.content}</p>

                        {/* Button section */}
                        <div className="absolute bottom-2 left-2 flex space-x-4">
                            {/* Heart button */}
                            <button
                                className={`text-gray-400 hover:text-red-500`}
                                onClick={() => handleHeartClick(post.id)}
                            >
                                {likedPosts[post.id] ? (
                                    <HeartIconSolid className="w-6 h-6 text-rose-500" />
                                ) : (
                                    <HeartIconOutline className="w-6 h-6" />
                                )}
                            </button>

                            {/* Message button */}
                            <button className="text-gray-400 hover:text-blue-500">
                                <ChatBubbleBottomCenterTextIcon className="w-6 h-6" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Feeds component
const Feeds: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>('All');
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [likedPosts, setLikedPosts] = useState<LikedPosts>({});

    const filteredPosts: Post[] = samplePosts.filter((post: Post) => {
        const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
        const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const handleHeartClick = (postId: number) => {
        setLikedPosts((prev) => ({
            ...prev,
            [postId]: !prev[postId], // Toggle the liked state
        }));
    };

    return (
        <div className="flex flex-col md:flex-row justify-center min-h-screen bg-black text-white mt-16">
            {/* Left Column for Filters and Search */}
            <div className="w-full md:w-1/4 p-4 border-r border-gray-900 md:fixed md:top-[60px] md:bottom-0 md:left-20 bg-black max-h-[800px] overflow-y-auto">
                <h2 className="text-lg font-bold mb-4">Filters</h2>
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="border border-gray-600 rounded-md px-4 py-2 mb-4 w-full bg-gray-800 text-white"
                />
                <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="border border-gray-600 rounded-md px-4 py-2 w-full bg-gray-800 text-white"
                >
                    {['All', 'Dancers', 'Music', 'Arts', 'Creations', 'Drama'].map((category) => (
                        <option key={category} value={category} className="bg-gray-800 text-white">
                            {category}
                        </option>
                    ))}
                </select>
            </div>

            {/* Center Column for Posts */}
            <PostList
                filteredPosts={filteredPosts}
                likedPosts={likedPosts}
                handleHeartClick={handleHeartClick}
            />

            {/* Right Column for Chats */}
            <div className="w-full md:w-1/4 p-4 border-l border-gray-900 md:fixed md:top-[60px] md:bottom-0 md:right-20 bg-black max-h-[800px]">
                <h2 className="text-lg font-bold mb-4">Chats</h2>
                <div className="bg-gray-800 rounded-lg p-4 md:h-600">
                    <p className="text-gray-400">Chat functionality will be here.</p>
                </div>
            </div>
        </div>
    );
};

export default Feeds;
