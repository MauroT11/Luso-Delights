"use client"

import React, { useState, useRef } from 'react';
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function Carousel({food1, food2, food3, food4, food5, food6}) {
    const carouselRef = useRef(null);
    
    const scrollLeft = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
        }
    };
    
    const scrollRight = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
    };

    return (
        <div className="relative w-full">
            {/* Navigation Controls */}
            <button 
                onClick={scrollLeft}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-primary p-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300 focus:outline-none"
                aria-label="Previous image"
            >
                <FaChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
            </button>
            
            <button 
                onClick={scrollRight}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-primary p-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300 focus:outline-none"
                aria-label="Next image"
            >
                <FaChevronRight className="w-5 h-5 md:w-6 md:h-6" />
            </button>
            
            {/* Carousel Container */}
            <div 
                ref={carouselRef}
                className="carousel carousel-center w-full overflow-x-auto hide-scrollbar rounded-xl border-2 border-accent/30 bg-white/5 p-4 md:p-6"
                style={{ scrollSnapType: 'x mandatory' }}
            >
                <div className="carousel-item w-4/5 sm:w-3/5 md:w-2/5 lg:w-1/3 px-2">
                    <Image
                        src={food1}
                        width={500} 
                        height={300}
                        className="w-full h-[250px] md:h-[300px] object-cover rounded-lg shadow-md"
                        alt="Portuguese cuisine delicacy" 
                    />
                </div>
                
                <div className="carousel-item w-4/5 sm:w-3/5 md:w-2/5 lg:w-1/3 px-2">
                    <Image
                        src={food2}
                        width={500}
                        height={300}
                        className="w-full h-[250px] md:h-[300px] object-cover rounded-lg shadow-md"
                        alt="Traditional Portuguese dish" 
                    />
                </div>
                
                <div className="carousel-item w-4/5 sm:w-3/5 md:w-2/5 lg:w-1/3 px-2">
                    <Image
                        src={food3}
                        width={500}
                        height={300}
                        className="w-full h-[250px] md:h-[300px] object-cover rounded-lg shadow-md"
                        alt="Authentic Portuguese food" 
                    />
                </div>
                
                <div className="carousel-item w-4/5 sm:w-3/5 md:w-2/5 lg:w-1/3 px-2">
                    <Image
                        src={food4}
                        width={500}
                        height={300}
                        className="w-full h-[250px] md:h-[300px] object-cover rounded-lg shadow-md"
                        alt="Portuguese seafood specialty" 
                    />
                </div>
                
                <div className="carousel-item w-4/5 sm:w-3/5 md:w-2/5 lg:w-1/3 px-2">
                    <Image
                        src={food5}
                        width={500}
                        height={300}
                        className="w-full h-[250px] md:h-[300px] object-cover rounded-lg shadow-md"
                        alt="Homestyle Portuguese cooking" 
                    />
                </div>
                
                <div className="carousel-item w-4/5 sm:w-3/5 md:w-2/5 lg:w-1/3 px-2">
                    <Image
                        src={food6}
                        width={500}
                        height={300}
                        className="w-full h-[250px] md:h-[300px] object-cover rounded-lg shadow-md"
                        alt="Portuguese dessert treat" 
                    />
                </div>
            </div>
        </div>
    );
}