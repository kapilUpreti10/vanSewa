import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default function Home() {
    return (
      // classname container takes up the full width of the screen at each break point and centers the content.
        <div className="w-11/12 mx-auto mt-12  p-6 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
                Adventure Awaits with Our Travel Vans!
            </h1>
            <p className="text-lg md:text-xl mb-6 animate-fade-in delay-1">
                Embrace the #vanlife movement. Rent the perfect van to start your epic road trip journey.
            </p>
            <Link 
                to="vans" 
                className="inline-block px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg shadow-md hover:bg-yellow-600 transition duration-300 mb-8"
            >
                Find Your Van
            </Link>
            <div className="bg-white bg-opacity-25 p-6 rounded-lg shadow-md">
                <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                    Why Choose Us?
                </h2>
                <ul className="list-disc list-inside text-lg md:text-xl">
                    <li>Wide variety of vans to choose from.</li>
                    <li>Affordable rates and flexible rental periods.</li>
                    <li>Comprehensive insurance and 24/7 customer support.</li>
                    <li>Easy booking process and secure payments.</li>
                </ul>
            </div>
        </div>
    );
}
