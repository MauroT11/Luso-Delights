"use client"

import React, { useState } from 'react';
import Pageheader from '@/components/Pageheader';
import { FaUser } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaUserGroup } from "react-icons/fa6";
import { FaPen } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";

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
    const [showModal, setShowModal] = useState(false);
    const [showConfirmationModal, setShowConfirmationModal] = useState(false);

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
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleConfirm = () => {
        // Handle confirm logic here
        console.log('Reservation confirmed:', formData);
        setShowModal(false);
        setShowConfirmationModal(true);
    };

    const handleCloseConfirmationModal = () => {
        setShowConfirmationModal(false);
    };

    const today = new Date().toISOString().split('T')[0];

    return (
        <div className="flex flex-col pt-24 pb-8 justify-center items-center">
            <Pageheader 
                header={'Reservations'}
                description={'Book a table at our restaurant!'}
                img={"url('images/banners/reservationBanner.jpg')"} 
                padding={20}
            />
            <div className=" mt-8">
            <p className="mb-4 text-primary text-center font-bold text-2xl">Please note the following rules for making a reservation:</p>
                    <ul className="list-disc list-inside text-lg">
                        <li>Reservations can only be made for times between <b>3 PM (15:00)</b> and <b>10 PM (22:00)</b>.</li>
                        <li>Reservations must be made at least <b>one day</b> in advance.</li>
                        <li>Each reservation can accommodate <b>up to 10</b> guests.</li>
                        <li>Please provide any special requests or dietary restrictions in the message field.</li>
                    </ul>
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
                    <div className="flex items-center justify-center">
                        <button
                            className="bg-blue-500 btn-wide hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline "
                            type="submit"
                        >
                            Reserve
                        </button>
                    </div>
                </div>
            </form>
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="flex flex-col gap-2 bg-white items-center p-8 rounded shadow-lg min-w-[400px]">
                        <div className="flex flex-col gap-4">
                            <h2 className="text-2xl font-bold mb-4">Reservation Details</h2>
                            <p><strong>Name:</strong> {formData.name}</p>
                            <p><strong>Email:</strong> {formData.email}</p>
                            <p><strong>Phone:</strong> {formData.phone}</p>
                            <p><strong>Date:</strong> {formData.date}</p>
                            <p><strong>Time:</strong> {formData.time}</p>
                            <p><strong>Number of Guests:</strong> {formData.guests}</p>
                            {formData.message == '' ? null : <p><strong>Special Requests:</strong> {formData.message}</p>}
                        </div>
                        <div className="flex justify-center gap-4 mt-4">
                            <button
                                className="btn btn-error text-white text-lg font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                onClick={handleCloseModal}
                            >
                                <FaPen />Edit
                            </button>
                            <button
                                className="btn btn-primary text-lg text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                onClick={handleConfirm}
                            >
                                <FaCheck />Confirm
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {showConfirmationModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-8 rounded text-center shadow-lg">
                        <h2 className="text-2xl font-bold mb-4">Reservation Confirmed</h2>
                        <p className="text-lg">Your reservation for {formData.date} at {formData.time} has been confirmed.</p>
                        <p className="text-lg">We will send a confirmation email to you.</p>
                        <p className="text-lg">We look forward to seeing you soon.</p>
                        <button
                            className="mt-4 btn text-lg btn-primary btn-wide text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            onClick={handleCloseConfirmationModal}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}