import React from 'react';
import { FaYelp } from "react-icons/fa";
import { FaTripadvisor } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";

export default function TripYelp({ tripAdvisorRating = 4.5, yelpRating = 4.5 }) {
    return (
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10 w-full max-w-2xl mx-auto py-4">
            <a 
                href="https://www.tripadvisor.com" 
                target="_blank" 
                rel="noreferrer"
                className="group flex items-center gap-4 bg-white px-6 py-4 rounded-xl shadow-lg border-2 border-[#34E0A1]/20 hover:border-[#34E0A1] transition-all duration-300 hover:shadow-xl w-full md:w-auto"
            >
                <FaTripadvisor className="text-4xl text-[#34E0A1] group-hover:scale-110 transition-transform duration-300" />
                <div className="flex flex-col">
                    <span className="font-bold text-gray-700">TripAdvisor</span>
                    <div className="flex items-center gap-1 text-[#34E0A1]">
                        {[...Array(Math.floor(tripAdvisorRating))].map((_, i) => (
                            <FaStar key={i} />
                        ))}
                        {tripAdvisorRating % 1 !== 0 && <FaStarHalfAlt />}
                        <span className="ml-1 font-medium text-gray-600">{tripAdvisorRating}/5</span>
                    </div>
                </div>
            </a>
            
            <a 
                href="https://www.yelp.com" 
                target="_blank" 
                rel="noreferrer"
                className="group flex items-center gap-4 bg-white px-6 py-4 rounded-xl shadow-lg border-2 border-[#ff1a1a]/20 hover:border-[#ff1a1a] transition-all duration-300 hover:shadow-xl w-full md:w-auto"
            >
                <FaYelp className="text-4xl text-[#ff1a1a] group-hover:scale-110 transition-transform duration-300" />
                <div className="flex flex-col">
                    <span className="font-bold text-gray-700">Yelp</span>
                    <div className="flex items-center gap-1 text-[#ff1a1a]">
                        {[...Array(Math.floor(yelpRating))].map((_, i) => (
                            <FaStar key={i} />
                        ))}
                        {yelpRating % 1 !== 0 && <FaStarHalfAlt />}
                        <span className="ml-1 font-medium text-gray-600">{yelpRating}/5</span>
                    </div>
                </div>
            </a>
        </div>
    );
}