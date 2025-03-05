"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Mr_Dafoe } from "next/font/google";
import { FaTimes } from "react-icons/fa";

const mrDafoe = Mr_Dafoe({ 
    subsets: ['latin'], 
    weight:'400',
    style:'normal',
});

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {

    setIsMounted(true);

    if (window.scrollY > 10) {
      setScrolled(true);
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Toggle menu
  const handleToggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  // Close menu when clicking a link
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  // Use basic styling for server render, then enhance on client after hydration
  const headerClasses = isMounted
    ? `fixed w-full z-30 transition-all duration-300 ${
        scrolled ? 'py-2 md:py-3 2xl:py-4 shadow-md bg-white/95 backdrop-blur-sm' : 'py-4 md:py-5 2xl:py-6 bg-white'
      } border-b-2 border-accent`
    : 'fixed w-full z-30 py-4 md:py-5 2xl:py-6 bg-white border-b-2 border-accent';

  return (
    <header className={headerClasses}>
      <div className="container mx-auto px-4 md:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <Link 
          className={`text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl text-primary hover:text-accent transition-all duration-200 hover:scale-105 ${mrDafoe.className}`} 
          href="/"
          onClick={handleLinkClick}
        >
          Luso Delights
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className={`flex text-lg lg:text-xl 2xl:text-2xl gap-1 lg:gap-4 xl:gap-6 2xl:gap-8 space-x-2 lg:space-x-4 font-bold text-primary`}>
            <li><Link href="/menu" className="hover:text-accent transition-colors duration-200 px-2 py-1 2xl:px-3 2xl:py-2">Menu</Link></li>
            <li><Link href="/reservations" className="hover:text-accent transition-colors duration-200 px-2 py-1 2xl:px-3 2xl:py-2">Reservations</Link></li>
            <li><Link href="/catering" className="hover:text-accent transition-colors duration-200 px-2 py-1 2xl:px-3 2xl:py-2">Catering</Link></li>
            <li><Link href="/story" className="hover:text-accent transition-colors duration-200 px-2 py-1 2xl:px-3 2xl:py-2">Our Story</Link></li>
          </ul>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-primary focus:outline-none" 
          onClick={handleToggleMenu}
          aria-label="Toggle menu"
        >
          <svg 
            className="w-8 h-8" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      
      {/* Mobile Navigation Overlay */}
      <div 
        className={`fixed inset-0 h-[100vh] w-full bg-white z-50 transform transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden overflow-y-auto`}
        style={{ height: '100vh' }}
      >
        
        <div className="text-center py-6 border-b-2 border-accent/20 absolute w-full">
          <Link className={`text-3xl text-primary ${mrDafoe.className}`} href="/" onClick={handleLinkClick}>
            Luso Delights
          </Link>
          <button
          className="absolute top-6 right-6 text-primary hover:text-accent p-2 rounded-full hover:bg-gray-100 transition-all duration-200"
          onClick={handleToggleMenu}
          aria-label="Close menu"
        >
          <FaTimes className="w-6 h-6" />
        </button>
        </div>
        <nav className="container mx-auto px-6 py-24">
          <ul className={`flex flex-col space-y-6 items-center text-5xl ${mrDafoe.className}`}>
            <li>
              <Link 
                href="/menu" 
                className="text-primary hover:text-accent transition-colors duration-200 block py-2"
                onClick={handleLinkClick}
              >
                Menu
              </Link>
            </li>
            <li>
              <Link 
                href="/reservations" 
                className="text-primary hover:text-accent transition-colors duration-200 block py-2"
                onClick={handleLinkClick}
              >
                Reservations
              </Link>
            </li>
            <li>
              <Link 
                href="/catering" 
                className="text-primary hover:text-accent transition-colors duration-200 block py-2"
                onClick={handleLinkClick}
              >
                Catering
              </Link>
            </li>
            <li>
              <Link 
                href="/story" 
                className="text-primary hover:text-accent transition-colors duration-200 block py-2"
                onClick={handleLinkClick}
              >
                Our Story
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}