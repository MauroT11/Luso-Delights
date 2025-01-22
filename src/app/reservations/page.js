"use client"

import React, { useState } from 'react';
import Pageheader from '@/components/Pageheader';
import { FaUser } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaUserGroup } from "react-icons/fa6";

export default function Page() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        guests: 1,
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
    };

    const today = new Date().toISOString().split('T')[0];

    return (
        <div className="flex flex-col pt-24 pb-8 justify-center items-center">
            <Pageheader 
                header={'Reservations'}
                description={'Book a table at our restaurant!'}
                img={"url('/images/4.webp')"} 
            />
            <div className="w-full max-w-lg mt-8">
            <p className="mb-4 text-gray-700">
                    Please note the following rules for creating a reservation:
                    <ul className="list-disc list-inside">
                        <li>Reservations can only be made for times between 3 PM and 10 PM.</li>
                        <li>Reservations must be made at least one day in advance.</li>
                        <li>Each reservation can accommodate up to 10 guests.</li>
                        <li>Please provide any special requests or dietary restrictions in the message field.</li>
                    </ul>
                </p>
            </div>
            <form onSubmit={handleSubmit} className="w-full max-w-lg mt-8">
                <div className="flex flex-col gap-4">
                    <label className="input input-accent flex items-center gap-2">
                        <FaUser className="text-2xl text-primary" />
                        <input required type="text" id="name" name="name" placeholder="Full Name*" value={formData.name} onChange={handleChange} className="w-full" />
                    </label>
                    <label className="input input-accent flex items-center gap-2">
                        <MdEmail className="text-2xl text-primary"/>
                        <input required type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email*" className="w-full" /> 
                    </label>
                    <label className="input input-accent flex items-center gap-2">
                        <FaPhone className="text-2xl text-primary" />
                        <input required type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number*" className="w-full" />
                    </label>
                    <input required type="date" id="date" min={today} name="date" placeholder="Date" value={formData.date} onChange={handleChange} className="input input-accent w-full max-w-lg" />
                    <input required type="time" id="time" min="15:00" max="22:00" step="1800" name="time" placeholder="Time" value={formData.time} onChange={handleChange} className="input input-accent w-full max-w-lg" />
                    <label className="input input-accent flex items-center gap-2">
                        <FaUserGroup className="text-2xl text-primary" />
                        <input type="number" id="guests" name="guests" min="1" value={formData.guests} onChange={handleChange} placeholder="Number of Guests" className="w-full" />
                    </label>
                    <textarea id="message" name="message" placeholder="Special Requests" value={formData.message} onChange={handleChange} className="textarea textarea-lg textarea-accent w-full px-3" />
                    <div className="flex items-center justify-between">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Reserve
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}