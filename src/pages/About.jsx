import React from 'react';
import { motion } from 'framer-motion';

const OurValues = () => {
    const values = [
        {
            title: "Customer Satisfaction",
            description: "We prioritize our customers' needs and strive to exceed their expectations.",
            color: "bg-red-400"
        },
        {
            title: "Quality",
            description: "We maintain the highest standards for our vans and services.",
            color: "bg-blue-400"
        },
        {
            title: "Innovation",
            description: "We continually improve our offerings to provide the best possible experience.",
            color: "bg-green-400"
        },
        {
            title: "Integrity",
            description: "We conduct our business with honesty and transparency.",
            color: "bg-yellow-400"
        },
        {
            title: "Sustainability",
            description: "We are committed to sustainable practices to protect our planet.",
            color: "bg-purple-400"
        },
        {
            title: "Community",
            description: "We believe in giving back to the communities we operate in.",
            color: "bg-pink-400"
        }
    ];

    return (
        <div className="container mx-auto p-6 overflow-hidden">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800 text-center">
                Our Values
            </h2>
            <motion.div
                className="flex space-x-6 overflow-x-auto scrolling-touch hide-scrollbar"
                animate={{ x: [0, -2000] }}
                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            >
                {values.map((value, index) => (
                    <motion.div
                        key={index}
                        className={`min-w-[300px] ${value.color} rounded-lg shadow-lg p-6 flex-shrink-0`}
                    >
                        <h3 className="text-2xl font-semibold mb-2 text-white">{value.title}</h3>
                        <p className="text-white">{value.description}</p>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default OurValues;
