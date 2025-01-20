"use client"

import React, { useState } from 'react';

export default function Newsletter() {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Email submitted:', email);
    };

    return (
        <div>
            <h2>Stay in the loop with out latest updates!</h2>
            <form onSubmit={handleSubmit} className="flex gap-4">
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="input input-bordered input-lg input-info w-full max-w-xs"
                    required
                />
                <button type="submit" className="btn btn-accent btn-lg">Subscribe</button>
            </form>
        </div>
    );
}