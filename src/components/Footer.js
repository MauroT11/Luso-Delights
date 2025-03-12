"use client"

import React, { useState, useEffect } from 'react';
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube, FaPinterestP, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import { SiX } from 'react-icons/si';

export default function Footer() {
    const [year, setYear] = useState("2025");
    const [isMounted, setIsMounted] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        setYear(new Date().getFullYear().toString());
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
        // Reset form
        e.target.reset();
        // Hide message after 5 seconds
        setTimeout(() => setIsSubmitted(false), 5000);
    };

    return (
        <div className="bg-gradient-to-b from-accent to-primary">
            <footer className="footer p-8 md:p-10 2xl:p-12 text-white max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 2xl:gap-12 w-full">
                    {/* Column 1: Contact Info */}
                    <div className="space-y-4 md:space-y-6 2xl:space-y-8">
                        <h3 className="text-3xl md:text-4xl 2xl:text-5xl font-bold mb-6 2xl:mb-8 border-b border-white/30 pb-2 2xl:pb-4" style={{ fontFamily: "'Mr Dafoe', cursive" }}>Luso Delights</h3>
                        
                        <div className="flex items-center gap-3 2xl:gap-4">
                            <FaMapMarkerAlt className="text-white text-xl 2xl:text-2xl" />
                            <div className="text-base 2xl:text-lg">
                                <p>10 Market Street</p>
                                <p>Great Yarmouth, Norfolk</p>
                                <p>NR30 1NB, United Kingdom</p>
                            </div>
                        </div>
                        
                        <div className="flex items-center gap-3 2xl:gap-4">
                            <FaPhone className="text-white text-xl 2xl:text-2xl" />
                            <p className="text-base 2xl:text-lg">01493 237410</p>
                        </div>
                        
                        <div className="flex items-center gap-3 2xl:gap-4">
                            <FaEnvelope className="text-white text-xl 2xl:text-2xl" />
                            <p className="text-base 2xl:text-lg">info@lusodelights.com</p>
                        </div>
                        
                        {/* Opening Hours */}
                        <div className="mt-8 2xl:mt-10 3xl:mt-12">
                            <h4 className="text-xl 2xl:text-2xl 3xl:text-3xl font-semibold mb-3 2xl:mb-5 border-b border-white/30 pb-2 2xl:pb-3">Opening Hours</h4>
                            <p className="text-base 2xl:text-lg 3xl:text-xl"><span className="font-bold">Monday - Friday:</span> 12:00pm - 10:00pm</p>
                            <p className="text-base 2xl:text-lg 3xl:text-xl"><span className="font-bold">Saturday - Sunday:</span> 10:00am - 11:00pm</p>
                            <p className="text-base 2xl:text-lg 3xl:text-xl"><span className="font-bold">Bank Holidays:</span> 10:00am - 11:00pm</p>
                        </div>
                    </div>

                    {/* Column 2: Navigation Links */}
                    <div className="grid grid-cols-2 gap-8 2xl:gap-10 3xl:gap-12">
                        <div>
                            <h4 className="text-xl 2xl:text-2xl font-semibold mb-4 2xl:mb-6 border-b border-white/30 pb-2 2xl:pb-3">Site</h4>
                            <nav className="flex flex-col mb-4 gap-2 2xl:gap-3 3xl:gap-4">
                                <a className="text-base 2xl:text-lg 3xl:text-xl hover:text-accent transition-colors duration-200" href="/menu">Menu</a>
                                <a className="text-base 2xl:text-lg 3xl:text-xl hover:text-accent transition-colors duration-200" href="/reservations">Reservations</a>
                                <a className="text-base 2xl:text-lg 3xl:text-xl hover:text-accent transition-colors duration-200" href="/catering">Catering</a>
                                <a className="text-base 2xl:text-lg 3xl:text-xl hover:text-accent transition-colors duration-200" href="/story">Our Story</a>
                                <a className="text-base 2xl:text-lg 3xl:text-xl hover:text-accent transition-colors duration-200" href="/contact">Contact Us</a>
                            </nav>
                            

                            <h4 className="text-xl 2xl:text-2xl font-semibold mb-4 2xl:mb-6 border-b border-white/30 pb-2 2xl:pb-3">Legal</h4>
                            <nav className="flex flex-col gap-2 2xl:gap-3 3xl:gap-4">
                                <a className="text-base 2xl:text-lg 3xl:text-xl hover:text-accent transition-colors duration-200" href="/legal/termsofuse">Terms of use</a>
                                <a className="text-base 2xl:text-lg 3xl:text-xl hover:text-accent transition-colors duration-200" href="/legal/privacypolicy">Privacy policy</a>
                                <a className="text-base 2xl:text-lg 3xl:text-xl hover:text-accent transition-colors duration-200" href="/legal/cookiepolicy">Cookie policy</a>
                            </nav>
                        </div>
                        
                        {/* Social Links */}
                        <div>
                            <h4 className="text-xl 2xl:text-2xl font-semibold mb-4 2xl:mb-6 border-b border-white/30 pb-2 2xl:pb-3">Connect</h4>
                            <div className="grid grid-cols-3 gap-3 2xl:gap-4 mb-6 2xl:mb-8">
                                <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="flex justify-center items-center h-10 w-10 2xl:h-12 2xl:w-12 bg-white/10 rounded-full hover:bg-accent hover:text-white transition-all duration-300">
                                    <FaFacebookF className="text-lg 2xl:text-xl 3xl:text-2xl" />
                                </a>
                                <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="flex justify-center items-center h-10 w-10 2xl:h-12 2xl:w-12 bg-white/10 rounded-full hover:bg-accent hover:text-white transition-all duration-300">
                                    <FaInstagram className="text-lg 2xl:text-xl 3xl:text-2xl" />
                                </a>
                                <a href="https://www.tiktok.com" target="_blank" rel="noreferrer" className="flex justify-center items-center h-10 w-10 2xl:h-12 2xl:w-12 bg-white/10 rounded-full hover:bg-accent hover:text-white transition-all duration-300">
                                    <FaTiktok className="text-lg 2xl:text-xl 3xl:text-2xl" />
                                </a>
                                <a href="https://www.x.com" target="_blank" rel="noreferrer" className="flex justify-center items-center h-10 w-10 2xl:h-12 2xl:w-12 bg-white/10 rounded-full hover:bg-accent hover:text-white transition-all duration-300">
                                    <SiX className="text-lg 2xl:text-xl 3xl:text-2xl" />
                                </a>
                                <a href="https://www.youtube.com" target="_blank" rel="noreferrer" className="flex justify-center items-center h-10 w-10 2xl:h-12 2xl:w-12 bg-white/10 rounded-full hover:bg-accent hover:text-white transition-all duration-300">
                                    <FaYoutube className="text-lg 2xl:text-xl 3xl:text-2xl" />
                                </a>
                                <a href="https://www.pinterest.com" target="_blank" rel="noreferrer" className="flex justify-center items-center h-10 w-10 2xl:h-12 2xl:w-12 bg-white/10 rounded-full hover:bg-accent hover:text-white transition-all duration-300">
                                    <FaPinterestP className="text-lg 2xl:text-xl 3xl:text-2xl" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Column 3: About & Newsletter */}
                    <div>
                        <h4 className="text-xl 2xl:text-2xl font-semibold mb-4 2xl:mb-6 border-b border-white/30 pb-2 2xl:pb-3">About Us</h4>
                        <p className="text-base mb-4 2xl:text-lg">Luso Delights brings the authentic flavors of Portugal to the heart of Great Yarmouth. Enjoy traditional recipes with a modern twist, crafted with love by Chef Maria Santos, straight from the coast of Algarve.</p>
                        
                        {/* Newsletter Subscription */}
                        <h4 className="text-xl 2xl:text-2xl font-semibold mb-4 2xl:mb-6 border-b border-white/30 pb-2 2xl:pb-3">Newsletter</h4>
                        <p className="text-base 2xl:text-lg 3xl:text-xl mb-4 2xl:mb-6">Subscribe to receive special offers, news and events:</p>
                        <form onSubmit={handleSubmit} className="space-y-3 2xl:space-y-4 3xl:space-y-5">
                            <input 
                                type="email" 
                                placeholder="Your email" 
                                className="w-full px-4 py-2 2xl:px-5 2xl:py-3 rounded-md bg-white/10 border border-white/20 focus:outline-none focus:border-accent text-white placeholder-white/50 text-base 2xl:text-lg"
                                required
                            />
                            <button 
                                type="submit" 
                                className="px-6 py-2 2xl:px-8 2xl:py-3 bg-accent text-white rounded-md hover:bg-accent/80 transition-colors duration-300 font-medium text-base 2xl:text-lg"
                            >
                                Subscribe
                            </button>
                            {isSubmitted && (
                                <div className="bg-green-500/20 border border-green-500/50 text-white px-4 py-2 rounded-md text-sm">
                                    Thank you for subscribing! We'll keep you updated.
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </footer>
            
            {/* Copyright Bar */}
            <div className="border-t border-white/20">
                <div className="max-w-7xl mx-auto px-8 md:px-10 2xl:px-12 py-6 2xl:py-8 text-center text-white/80 text-sm 2xl:text-base">
                    <p>&copy; {year} Luso Delights. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
}