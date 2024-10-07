const Footer: React.FC = () => {
    return (
        <footer className="bg-gradient-to-r from-black to-gray-800 text-white py-10">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* About Section */}
                    <div className="text-center md:text-left">
                        <h2 className="text-2xl font-bold mb-4 border-b-2 border-blue-500 pb-2">About Hela Event</h2>
                        <p className="text-sm mb-2">
                            Hela Event is a vibrant platform connecting traditional dancers, musicians, drama teams, and event organizers. Discover and post events to celebrate our rich cultural heritage.
                        </p>
                    </div>

                    {/* Connect Section */}
                    <div className="text-center md:text-left">
                        <h2 className="text-2xl font-bold mb-4 border-b-2 border-blue-500 pb-2">Connect with Us</h2>
                        <div className="flex justify-center md:justify-start space-x-4 mb-4">
                            <a href="#" aria-label="Facebook" className="transition transform duration-300 hover:scale-110">
                                <svg className="w-8 h-8 fill-current text-blue-600 hover:text-blue-400" viewBox="0 0 24 24">
                                    <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.325v21.351C0 23.4.6 24 1.325 24h21.351C23.4 24 24 23.4 24 22.675V1.325C24 .6 23.4 0 22.675 0zm-1.6 24h-3.3v-9.3h-2.8v-3.6h2.8v-2.6c0-2.7 1.6-4.2 4-4.2 1.2 0 2.2.1 2.5.1v2.8h-1.7c-1.4 0-1.7.6-1.7 1.7v2.1h3.5l-.5 3.6h-3v9.3z" />
                                </svg>
                            </a>
                            <a href="#" aria-label="Twitter" className="transition transform duration-300 hover:scale-110">
                                <svg className="w-8 h-8 fill-current text-blue-400 hover:text-blue-500" viewBox="0 0 24 24">
                                    <path d="M23.953 4.569c-.885.392-1.83.654-2.825.775 1.014-.611 1.794-1.573 2.163-2.724-.951.556-2.005.959-3.127 1.176-.896-.955-2.174-1.55-3.595-1.55-2.716 0-4.919 2.203-4.919 4.919 0 .386.044.762.127 1.124-4.088-.205-7.719-2.164-10.148-5.144-.426.732-.669 1.577-.669 2.488 0 1.718.87 3.227 2.188 4.117-.806-.025-1.565-.247-2.228-.616v.061c0 2.398 1.706 4.394 3.977 4.844-.417.112-.854.171-1.303.171-.319 0-.629-.031-.935-.086.631 1.963 2.445 3.394 4.593 3.434-1.684 1.32-3.81 2.107-6.103 2.107-.396 0-.788-.023-1.175-.067 2.177 1.394 4.762 2.206 7.548 2.206 9.048 0 13.98-7.497 13.98-13.98 0-.213-.005-.426-.014-.637.961-.695 1.794-1.56 2.448-2.549l-.047-.02z" />
                                </svg>
                            </a>
                            <a href="#" aria-label="Instagram" className="transition transform duration-300 hover:scale-110">
                                <svg className="w-8 h-8 fill-current text-pink-500 hover:text-pink-400" viewBox="0 0 24 24">
                                    <path d="M12 0c-6.627 0-12 5.373-12 12 0 6.627 5.373 12 12 12 6.627 0 12-5.373 12-12 0-6.627-5.373-12-12-12zm0 22.5c-5.78 0-10.5-4.72-10.5-10.5S6.22 1.5 12 1.5 22.5 6.22 22.5 12 17.78 22.5 12 22.5zm5.25-15c0 .69-.56 1.25-1.25 1.25-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25zm-5.25 1.5c-2.48 0-4.5 2.02-4.5 4.5 0 2.48 2.02 4.5 4.5 4.5 2.48 0 4.5-2.02 4.5-4.5 0-2.48-2.02-4.5-4.5-4.5zm0 7.5c-1.66 0-3-1.34-3-3 0-1.66 1.34-3 3-3 1.66 0 3 1.34 3 3 0 1.66-1.34 3-3 3z" />
                                </svg>
                            </a>
                            <a href="#" aria-label="LinkedIn" className="transition transform duration-300 hover:scale-110">
                                <svg className="w-8 h-8 fill-current text-blue-500 hover:text-blue-400" viewBox="0 0 24 24">
                                    <path d="M22.225 0h-20.451C.995 0 0 .994 0 2.225v19.55C0 23.005.995 24 2.225 24h20.451C23.005 24 24 23.005 24 22.225v-19.55C24 .994 23.005 0 22.225 0zm-14.31 20.452h-3.569v-11.63h3.569v11.63zm-1.784-13.29c-1.143 0-2.016-.905-2.016-2.027 0-1.135.873-2.027 2.013-2.027 1.143 0 2.016.892 2.016 2.027 0 1.122-.873 2.027-2.012 2.027zm16.794 13.29h-3.569v-6.309c0-1.503-.027-3.442-2.098-3.442-2.093 0-2.412 1.629-2.412 3.307v6.444h-3.569v-11.63h3.427v1.591h.049c.478-.9 1.641-1.846 3.373-1.846 3.607 0 4.276 2.367 4.276 5.448v6.436z" />
                                </svg>
                            </a>
                            <a href="#" aria-label="YouTube" className="transition transform duration-300 hover:scale-110">
                                <svg className="w-8 h-8 fill-current text-red-500 hover:text-red-400" viewBox="0 0 24 24">
                                    <path d="M23.498 6.186c-.283-1.061-1.12-1.871-2.143-2.041C19.73 4 12 4 12 4s-7.73 0-9.355.145C1.622 4.315.785 5.624.5 6.686.217 7.747 0 9.187 0 12s.217 4.253.5 5.314c.283 1.062 1.12 1.871 2.143 2.041.932.14 4.52.145 9.355.145s8.423-.005 9.355-.145c1.022-.17 1.859-.979 2.143-2.041.18-.692.242-1.474.242-2.314s-.062-1.622-.242-2.314zM10 15.59V8.41l6.174 3.59L10 15.59z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Contact Section */}
                    <div className="text-center md:text-left">
                        <h2 className="text-2xl font-bold mb-4 border-b-2 border-blue-500 pb-2">Contact Us</h2>
                        <p className="text-sm mb-1">Email: <span className="text-blue-300">info@helaevent.com</span></p>
                        <p className="text-sm">Phone: <span className="text-blue-300">+94 123 456 789</span></p>
                    </div>
                </div>
                <div className="mt-8 border-t border-gray-600 pt-4 text-center text-sm">
                    &copy; {new Date().getFullYear()} Hela Event. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
