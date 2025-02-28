"use client"

import React, { useState, useEffect } from 'react';

export default function Pageheader({ header, description, img, padding }) {
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Trigger fade-in effect after component mounts
  useEffect(() => {
    // Preload the image
    const imageLoader = new Image();
    imageLoader.src = img.replace(/^url\(['"](.+)['"]\)$/, '$1');
    
    imageLoader.onload = () => {
      setIsLoaded(true);
    };
    
    // Fallback in case image URL can't be extracted or takes too long
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [img]);

  return (
    <div
      className={`relative bg-cover bg-center py-20 min-w-full transition-opacity duration-700 ease-in-out ${
        isLoaded ? 'opacity-100' : 'opacity-0'
      }`}
      style={{ backgroundImage: `${img}` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative container mx-auto px-4">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-center text-white">
          {header}
        </h1>
        <p className="text-lg sm:text-xl text-center text-white">{description}</p>
      </div>
    </div>
  );
}