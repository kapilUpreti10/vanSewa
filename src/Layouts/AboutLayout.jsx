import React from 'react';
import "../App.css";
import first from "../assets/founders/one.jpg"
import About from '../pages/About'

export default function AboutLayout() {
    return (
        <div className="container mx-auto p-6">
            {/* About Section */}
            <div className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white rounded-lg shadow-lg p-8 mb-12">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
                    About Us
                </h1>
                <p className="text-lg md:text-xl mb-6 animate-fade-in delay-1">
                    Welcome to Vanlife, your premier destination for renting travel vans. Our mission is to help you embark on unforgettable journeys and embrace the spirit of adventure.
                </p>
            </div>
            
            {/* Our Story Section */}
            <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                    Our Story
                </h2>
                <p className="text-lg md:text-xl text-gray-700 mb-6">
                    Vanlife started with a simple idea: to make adventure accessible to everyone. We believe that the best way to explore the world is on the road, and we are here to provide the perfect vehicle for your journey. Our fleet of vans is designed to offer comfort, convenience, and a sense of freedom.
                </p>
            </div>

            {/* Meet the Team Section */}
            <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                    Meet the Team
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                        <img src={first} alt="Team Member" className="w-full h-48 object-cover rounded-t-lg mb-4" />
                        <h3 className="text-2xl font-semibold mb-2 text-gray-800">Kapil Upreti</h3>
                        <p className="text-gray-700">Founder & CEO</p>
                    </div>
                    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                        <img src={first} alt="Team Member" className="w-full h-48 object-cover rounded-t-lg mb-4" />
                        <h3 className="text-2xl font-semibold mb-2 text-gray-800">Kapil Upreti</h3>
                        <p className="text-gray-700">Chief Operating Officer</p>
                    </div>
                    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                        <img src={first} alt="Team Member" className="w-full h-48 object-cover rounded-t-lg mb-4" />
                        <h3 className="text-2xl font-semibold mb-2 text-gray-800">Kapil Upreti</h3>
                        <p className="text-gray-700">Head of Marketing</p>
                    </div>
                </div>
            </div>
            
            {/* About Page */}
            <About />
        </div>
    );
}
