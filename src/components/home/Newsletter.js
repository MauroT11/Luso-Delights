"use client"

import React, { useState } from 'react';
import { FaPaperPlane, FaEnvelope } from 'react-icons/fa';

export default function Newsletter() {
    const [email, setEmail] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Email submitted:', email);
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 3000);
        setEmail('');
    };

    return (
        <div className="w-full max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8 border border-accent/20">
            <div className="flex flex-col gap-4 items-center text-center">
                <div className="bg-primary/10 p-3 rounded-full mb-2">
                    <FaEnvelope className="text-2xl text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-primary">Stay Updated</h2>
                <p className="text-gray-600 max-w-md mb-2">
                    Subscribe to our newsletter for exclusive offers, events, and Portuguese culinary inspiration.
                </p>
                
                {isSubmitted ? (
                    <div className="bg-green-50 text-green-700 p-4 rounded-lg w-full text-center animate-fadeIn">
                        Thank you for subscribing! We've sent a confirmation email.
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 w-full mt-2">
                        <div className="relative flex-grow">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email address"
                                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors duration-300"
                                required
                            />
                        </div>
                        <button 
                            type="submit" 
                            className="btn btn-primary px-6 py-3 text-white font-medium rounded-lg flex items-center gap-2 hover:scale-105 transition-all duration-300"
                        >
                            Subscribe <FaPaperPlane className="text-sm" />
                        </button>
                    </form>
                )}
                
                <p className="text-xs text-gray-500 mt-2">
                    We respect your privacy. Unsubscribe at any time.
                </p>
            </div>
        </div>
    );
}