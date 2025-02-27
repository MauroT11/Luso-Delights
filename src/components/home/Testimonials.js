import React from 'react';
import { FaStar, FaQuoteLeft } from "react-icons/fa";

export default function Testimonials() {
    return (
        <div className="flex flex-col gap-8 items-center w-full max-w-7xl mx-auto px-4">
            <div className="text-center flex flex-col gap-4 mb-4">
                <h2 className="text-4xl text-primary font-bold">Testimonials</h2>
                <p className="text-center text-lg text-gray-600 max-w-2xl mx-auto">See what our valued customers have to say about their dining experience with us.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                <div className="p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 bg-white border-t-4 border-accent flex flex-col gap-4">
                    <FaQuoteLeft className="text-accent text-3xl mb-2" />
                    <p className="text-lg font-medium text-gray-800">&ldquo;Amazing food and great service! The Bacalhau à Brás was exceptional and took me right back to Portugal.&rdquo;</p>
                    <div className="mt-auto">
                        <p className="font-bold text-primary mt-4">Sarah Johnson</p>
                        <div className="flex gap-1 mt-1">
                            <FaStar className="text-yellow-500" />
                            <FaStar className="text-yellow-500" />
                            <FaStar className="text-yellow-500" />
                            <FaStar className="text-yellow-500" />
                            <FaStar className="text-yellow-500" />
                        </div>
                    </div>
                </div>
                
                <div className="p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 bg-white border-t-4 border-accent flex flex-col gap-4">
                    <FaQuoteLeft className="text-accent text-3xl mb-2" />
                    <p className="text-lg font-medium text-gray-800">&ldquo;A delightful experience, highly recommend! The atmosphere is perfect for both casual dinners and special occasions.&rdquo;</p>
                    <div className="mt-auto">
                        <p className="font-bold text-primary mt-4">Michael Rodriguez</p>
                        <div className="flex gap-1 mt-1">
                            <FaStar className="text-yellow-500" />
                            <FaStar className="text-yellow-500" />
                            <FaStar className="text-yellow-500" />
                            <FaStar className="text-yellow-500" />
                            <FaStar className="text-yellow-500" />
                        </div>
                    </div>
                </div>
                
                <div className="p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 bg-white border-t-4 border-accent flex flex-col gap-4">
                    <FaQuoteLeft className="text-accent text-3xl mb-2" />
                    <p className="text-lg font-medium text-gray-800">&ldquo;The best Portuguese flavors I've ever tasted! Every dish tells a story of tradition and passion.&rdquo;</p>
                    <div className="mt-auto">
                        <p className="font-bold text-primary mt-4">Emily Chen</p>
                        <div className="flex gap-1 mt-1">
                            <FaStar className="text-yellow-500" />
                            <FaStar className="text-yellow-500" />
                            <FaStar className="text-yellow-500" />
                            <FaStar className="text-yellow-500" />
                            <FaStar className="text-yellow-500" />
                        </div>
                    </div>
                </div>
                
                <div className="p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 bg-white border-t-4 border-accent flex flex-col gap-4">
                    <FaQuoteLeft className="text-accent text-3xl mb-2" />
                    <p className="text-lg font-medium text-gray-800">&ldquo;A must-visit for food lovers! The wine selection perfectly complements their authentic dishes.&rdquo;</p>
                    <div className="mt-auto">
                        <p className="font-bold text-primary mt-4">David Thompson</p>
                        <div className="flex gap-1 mt-1">
                            <FaStar className="text-yellow-500" />
                            <FaStar className="text-yellow-500" />
                            <FaStar className="text-yellow-500" />
                            <FaStar className="text-yellow-500" />
                            <FaStar className="text-yellow-500" />
                        </div>
                    </div>
                </div>
                
                <div className="p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 bg-white border-t-4 border-accent flex flex-col gap-4">
                    <FaQuoteLeft className="text-accent text-3xl mb-2" />
                    <p className="text-lg font-medium text-gray-800">&ldquo;Exceptional quality and taste! The chef's creativity shines through in every dish they serve.&rdquo;</p>
                    <div className="mt-auto">
                        <p className="font-bold text-primary mt-4">Amanda Wilson</p>
                        <div className="flex gap-1 mt-1">
                            <FaStar className="text-yellow-500" />
                            <FaStar className="text-yellow-500" />
                            <FaStar className="text-yellow-500" />
                            <FaStar className="text-yellow-500" />
                            <FaStar className="text-yellow-500" />
                        </div>
                    </div>
                </div>
                
                <div className="p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 bg-white border-t-4 border-accent flex flex-col gap-4">
                    <FaQuoteLeft className="text-accent text-3xl mb-2" />
                    <p className="text-lg font-medium text-gray-800">&ldquo;Great food and cozy vibes! Loved the Piri Piri chicken and Pastéis de Nata for dessert.&rdquo;</p>
                    <div className="mt-auto">
                        <p className="font-bold text-primary mt-4">James Parker</p>
                        <div className="flex gap-1 mt-1">
                            <FaStar className="text-yellow-500" />
                            <FaStar className="text-yellow-500" />
                            <FaStar className="text-yellow-500" />
                            <FaStar className="text-yellow-500" />
                            <FaStar className="text-gray-300" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}