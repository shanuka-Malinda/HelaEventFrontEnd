"use client";
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import {
    HeartIcon as HeartIconOutline,
    HeartIcon as HeartIconSolid
} from '@heroicons/react/24/outline';
import { X } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react';

const Modal: React.FC<{ isOpen: boolean; onClose: () => void; children: React.ReactNode }> = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-gray-800 rounded-lg w-full max-w-md">
                <div className="flex justify-between items-center p-4 border-b border-gray-700">
                    <h2 className="text-xl font-semibold">Create Post</h2>
                    <button onClick={onClose} className="text-gray-400 hover:text-white">
                        <X size={24} />
                    </button>
                </div>
                {children}
            </div>
        </div>
    );
};

const UserProfile: React.FC = () => {
    const [showModal, setShowModal] = useState(false);
    const [newPost, setNewPost] = useState({
        title: '',
        content: '',
        imageUrl: ''
    });
    const [posts, setPosts] = useState<any[]>([]);
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [likedPosts, setLikedPosts] = useState<{ [key: number]: boolean }>({}); // Track liked posts

    // Sample user data
    const user = {
        name: "Senarath Bandara",
        avatarUrl: "/profile/avatar.png", // Replace with a valid path
        coverPhotoUrl: "/profile/cover2.jpg", // Replace with a valid path
        bio: "Software developer with a passion for creating intuitive user experiences.",
        location: "Colombo, Sri Lanka"
    };

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result as string);
                setNewPost({ ...newPost, imageUrl: reader.result as string });
            };
            reader.readAsDataURL(file);
        }
    };

    const handleCreatePost = () => {
        if (newPost.content) {
            setPosts([
                {
                    ...newPost,
                    id: posts.length + 1,
                    title: newPost.content.slice(0, 50) + (newPost.content.length > 50 ? '...' : ''),
                },
                ...posts,
            ]);
            setNewPost({ title: '', content: '', imageUrl: '' });
            setImagePreview(null);
            setShowModal(false);
        } else {
            alert('Please enter some content for your post.');
        }
    };

    const handleHeartClick = (postId: number) => {
        setLikedPosts((prev) => ({ ...prev, [postId]: !prev[postId] }));
    };

    // Filter posts based on the search term
    const filteredPosts = posts.filter(post => post.content.toLowerCase().includes(searchTerm.toLowerCase()));

    return (
        <div className="min-h-screen bg-black text-white flex flex-col ">
            {/* First Row: User Cover and Profile Images */}
            <div className="relative w-full flex justify-center">
                <Image
                    src={user.coverPhotoUrl}
                    alt="Cover Photo"
                    width={1200}
                    height={400}
                    className="w-11/12 md:w-9/12 h-64 object-cover"
                />
                <div className="absolute left-80 bottom-1">
                    <Image
                        src={user.avatarUrl}
                        alt={user.name}
                        width={100}
                        height={100}
                        className="rounded-full border-2 border-white-800"
                    />
                </div>
            </div>

            {/* Second Row: User Details and Posts */}
            <div className="flex flex-1 justify-center">
                <div className="w-10/12 md:w-8/12 p-4 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">

                    {/* Left Column: User Details and Search */}
                    <div className="bg-gray-900 rounded p-4 w-full md:w-1/2">
                        <h2 className="text-xl font-bold">{user.name}</h2>
                        <div className="flex items-center mb-2">
                            <div className="ml-3">
                                <h3 className="font-semibold">{user.name}</h3>
                                <p className="text-gray-400">{user.bio}</p>
                                <p className="text-gray-400">{user.location}</p>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold">Search Posts</h2>
                            <input
                                type="text"
                                placeholder="Search..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full p-2 mb-4 bg-gray-700 border border-gray-600 rounded"
                            />
                        </div>
                    </div>

                    {/* Right Column: Add Post and Display Posts */}
                    <div className="flex flex-col w-full md:w-1/2 space-y-4">
                        {/* Add New Post Function */}
                        <div className="bg-gray-900 rounded p-4">
                            <Button
                                onClick={() => setShowModal(true)}
                                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg w-full"
                            >
                                Add New Post
                            </Button>

                            {/* Modal for post creation */}
                            {showModal && (
                                <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
                                    <div className="p-4">
                                        <div className="flex items-center mb-4">
                                            <Image
                                                src={user.avatarUrl}
                                                alt={user.name}
                                                width={40}
                                                height={40}
                                                className="rounded-full mr-3"
                                            />
                                            <p className="font-semibold">{user.name}</p>
                                        </div>
                                        <Textarea
                                            placeholder="What's on your mind?"
                                            value={newPost.content}
                                            onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                                            className="w-full bg-gray-700 text-white border-none resize-none mb-4"
                                            rows={2}
                                        />
                                        <div className="mb-4">
                                            {imagePreview ? (
                                                <div className="relative mb-4">
                                                    <Image src={imagePreview} alt="Preview" width={200} height={200} className="rounded" />
                                                    <button
                                                        onClick={() => { setImagePreview(null); setNewPost({ ...newPost, imageUrl: '' }); }}
                                                        className="absolute top-2 right-2 bg-gray-800 rounded-full p-1"
                                                    >
                                                        <X size={16} />
                                                    </button>
                                                </div>
                                            ) : (
                                                <div
                                                    className="w-full h-52 border-2 border-dashed border-gray-500 flex items-center justify-center mb-4 cursor-pointer"
                                                    onClick={() => document.getElementById('image-upload')?.click()}
                                                >
                                                    <span className="text-gray-400">200x200 Image Preview</span>
                                                </div>
                                            )}
                                            <input
                                                type="file"
                                                accept="image/*"
                                                onChange={handleImageUpload}
                                                className="hidden"
                                                id="image-upload"
                                            />
                                        </div>
                                        <Button
                                            onClick={handleCreatePost}
                                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg"
                                        >
                                            Post
                                        </Button>
                                    </div>
                                </Modal>
                            )}
                        </div>

                        {/* Display All Posts */}
                        <div className="bg-gray-900 rounded p-4 flex-1">
                            <div className="space-y-4 w-full">
                                <h2 className="text-xl font-bold">Posts</h2>
                                {filteredPosts.length > 0 ? (
                                    <div className="space-y-4">
                                        {filteredPosts.map((post) => (
                                            <div
                                                key={post.id}
                                                className="bg-gray-800 rounded-lg p-4 shadow-md relative"
                                                style={{
                                                    width: '100%',
                                                    maxWidth: '450px',
                                                }}
                                            >
                                                {post.imageUrl && (
                                                    <Image
                                                        src={post.imageUrl}
                                                        alt={post.title}
                                                        className="w-full h-auto object-cover rounded-md mb-2"
                                                        width={400}
                                                        height={200}
                                                    />
                                                )}
                                                <h3 className="text-lg font-semibold">{post.title}</h3>
                                                <p>{post.content}</p>
                                                <div className="flex items-center justify-between mt-2">
                                                    <button
                                                        onClick={() => handleHeartClick(post.id)}
                                                        className="flex items-center text-red-500"
                                                    >
                                                        {likedPosts[post.id] ? (
                                                            <HeartIconSolid className="w-5 h-5" />
                                                        ) : (
                                                            <HeartIconOutline className="w-5 h-5" />
                                                        )}
                                                        <span className="ml-2">{likedPosts[post.id] ? 'Liked' : 'Like'}</span>
                                                    </button>
                                                    <span className="text-gray-500">{new Date().toLocaleDateString()}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <p>No posts found.</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
