"use client"

import React from 'react';
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube, FaPinterestP, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import { SiX } from 'react-icons/si';

export default function Footer() {
    return (
        <div className="bg-gradient-to-b from-accent to-primary">
            <footer className="footer p-10 text-white max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                    {/* Column 1: Contact Info */}
                    <div className="space-y-4">
                        <h3 className="text-4xl font-bold mb-6 border-b border-accent/30 pb-2" style={{ fontFamily: "'Mr Dafoe', cursive" }}>Luso Delights</h3>
                        
                        <div className="flex items-center gap-3">
                            <FaMapMarkerAlt className="text-white text-xl" />
                            <div className="text-base">
                                <p>10 Market Street</p>
                                <p>Great Yarmouth, Norfolk</p>
                                <p>NR30 1NB, United Kingdom</p>
                            </div>
                        </div>
                        
                        <div className="flex items-center gap-3">
                            <FaPhone className="text-white text-xl" />
                            <p className="text-base">01493 237410</p>
                        </div>
                        
                        <div className="flex items-center gap-3">
                            <FaEnvelope className="text-white text-xl" />
                            <p className="text-base">info@lusodelights.com</p>
                        </div>
                        
                        {/* Opening Hours */}
                        <div className="mt-8">
                            <h4 className="text-xl font-semibold mb-3 border-b border-accent/30 pb-2">Opening Hours</h4>
                            <p className="text-base"><span className="font-medium">Monday - Friday:</span> 12:00pm - 10:00pm</p>
                            <p className="text-base"><span className="font-medium">Saturday - Sunday:</span> 10:00am - 11:00pm</p>
                            <p className="text-base"><span className="font-medium">Bank Holidays:</span> 10:00am - 11:00pm</p>
                        </div>
                    </div>

                    {/* Column 2: Navigation Links */}
                    <div className="grid grid-cols-2 gap-8">
                        <div>
                            <h4 className="text-xl font-semibold mb-4 border-b border-accent/30 pb-2">Site</h4>
                            <nav className="flex flex-col gap-2">
                                <a className="text-base hover:text-accent transition-colors duration-200" href="/menu">Menu</a>
                                <a className="text-base hover:text-accent transition-colors duration-200" href="/reservations">Reservations</a>
                                <a className="text-base hover:text-accent transition-colors duration-200" href="/catering">Catering</a>
                                <a className="text-base hover:text-accent transition-colors duration-200" href="/story">Our Story</a>
                            </nav>
                            
                            <h4 className="text-xl font-semibold mb-4 mt-8 border-b border-accent/30 pb-2">Legal</h4>
                            <nav className="flex flex-col gap-2">
                                <a className="text-base hover:text-accent transition-colors duration-200" href="/legal/termsofuse">Terms of use</a>
                                <a className="text-base hover:text-accent transition-colors duration-200" href="/legal/privacypolicy">Privacy policy</a>
                                <a className="text-base hover:text-accent transition-colors duration-200" href="/legal/cookiepolicy">Cookie policy</a>
                            </nav>
                        </div>
                        
                        {/* Social Links */}
                        <div>
                            <h4 className="text-xl font-semibold mb-4 border-b border-accent/30 pb-2">Connect</h4>
                            <div className="grid grid-cols-3 gap-3 mb-6">
                                <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="flex justify-center items-center h-10 w-10 bg-white/10 rounded-full hover:bg-accent hover:text-white transition-all duration-300">
                                    <FaFacebookF className="text-lg" />
                                </a>
                                <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="flex justify-center items-center h-10 w-10 bg-white/10 rounded-full hover:bg-accent hover:text-white transition-all duration-300">
                                    <FaInstagram className="text-lg" />
                                </a>
                                <a href="https://www.tiktok.com" target="_blank" rel="noreferrer" className="flex justify-center items-center h-10 w-10 bg-white/10 rounded-full hover:bg-accent hover:text-white transition-all duration-300">
                                    <FaTiktok className="text-lg" />
                                </a>
                                <a href="https://www.x.com" target="_blank" rel="noreferrer" className="flex justify-center items-center h-10 w-10 bg-white/10 rounded-full hover:bg-accent hover:text-white transition-all duration-300">
                                    <SiX className="text-lg" />
                                </a>
                                <a href="https://www.youtube.com" target="_blank" rel="noreferrer" className="flex justify-center items-center h-10 w-10 bg-white/10 rounded-full hover:bg-accent hover:text-white transition-all duration-300">
                                    <FaYoutube className="text-lg" />
                                </a>
                                <a href="https://www.pinterest.com" target="_blank" rel="noreferrer" className="flex justify-center items-center h-10 w-10 bg-white/10 rounded-full hover:bg-accent hover:text-white transition-all duration-300">
                                    <FaPinterestP className="text-lg" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Column 3: About & Newsletter */}
                    <div>
                        <h4 className="text-xl font-semibold mb-4 border-b border-accent/30 pb-2">About Us</h4>
                        <p className="text-base mb-6">Luso Delights brings the authentic flavors of Portugal to the heart of Great Yarmouth. Enjoy traditional recipes with a modern twist, crafted with love by Chef Maria Santos, straight from the coast of Algarve.</p>
                        
                        {/* Newsletter Subscription */}
                        <h4 className="text-xl font-semibold mb-4 border-b border-accent/30 pb-2">Newsletter</h4>
                        <p className="text-base mb-4">Subscribe to receive special offers, news and events:</p>
                        <form className="space-y-3">
                            <input 
                                type="email" 
                                placeholder="Your email" 
                                className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 focus:outline-none focus:border-accent text-white placeholder-white/50"
                            />
                            <button 
                                type="submit" 
                                className="px-6 py-2 bg-accent text-white rounded-md hover:bg-accent/80 transition-colors duration-300 font-medium"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
            </footer>
            
            {/* Copyright Bar */}
            <div className="border-t border-white/10">
                <div className="max-w-7xl mx-auto px-10 py-6 text-center text-white/80 text-sm">
                    <p>&copy; {new Date().getFullYear()} Luso Delights. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
}