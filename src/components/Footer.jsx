import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-teal-400 to-teal-600 text-white py-8 mt-5">
            <div className="container mx-auto px-6">
                <div className="md:flex md:items-center md:justify-between">
                    <div className="flex justify-center md:justify-start mb-6 md:mb-0">
                        <span className="font-semibold">Vanlife</span>
                    </div>
                    <div className="flex justify-center md:justify-end">
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white">Home</a>
                            <a href="#" className="text-gray-400 hover:text-white">About</a>
                            <a href="#" className="text-gray-400 hover:text-white">Vans</a>
                            {/* Add more footer links as needed */}
                        </div>
                    </div>
                </div>
                <div className="mt-8 md:flex md:items-center md:justify-between">
                    <div className="text-center md:text-left">
                        <p className="text-gray-400">© {new Date().getFullYear()} Vanlife. All rights reserved.</p>
                    </div>
                    <div className="flex justify-center md:justify-end">
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a>
                            <a href="#" className="text-gray-400 hover:text-white">Terms of Service</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
