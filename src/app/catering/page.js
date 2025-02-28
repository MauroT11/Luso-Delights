"use client"

import React, { useState } from 'react';
import Pageheader from '@/components/Pageheader';
import { FaUser } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaUserGroup } from "react-icons/fa6";
import { FaPen } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import Guidelines from '@/components/Guidelines';                     

export default function Page() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        date: '',
        fromTime: '',
        toTime: '',
        guests: 1,
        eventType: '',
        location: '',
        otherEventType: '',
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

    const formatDate = (dateString) => {
        if (!dateString) return '';
        
        const [year, month, day] = dateString.split('-');
        return `${day}/${month}/${year}`;
    };

    const today = new Date().toISOString().split('T')[0];
    const oneMonthFromToday = new Date();
    oneMonthFromToday.setMonth(oneMonthFromToday.getMonth() + 1);
    const minDate = oneMonthFromToday.toISOString().split('T')[0];

    return (
        <div className="flex flex-col pt-16 md:pt-20 sm:pt-16 pb-8 justify-center items-center">
            <Pageheader 
                header={'Catering'}
                description={'Book us for your next event!'}
                img={"url('images/banners/cateringBanner.jpg')"} 
                padding={20}
            />
            
            <Guidelines 
                title="Catering Guidelines" 
                subtitle="Please read before making a catering booking." 
                guidelines={[
                    {
                        prefix: "We require a minimum of ",
                        emphasis: "1 month",
                        suffix: " notice for catering requests."
                    },
                    {
                        prefix: "Catering services are available for events with ",
                        emphasis: "25-300 guests",
                        suffix: "."
                    },
                    {
                        prefix: "Please provide details such as the ",
                        emphasis: "event date, location and time",
                        suffix: " of the event."
                    },
                    {
                        prefix: "Specify any ",
                        emphasis: "special requests",
                        suffix: " such as themes, dietary restrictions, etc."
                    },
                    {
                        prefix: "We offer catering services for various events including ",
                        emphasis: "weddings, birthdays, corporate events",
                        suffix: ", and more."
                    }
                ]}
            />
            <form onSubmit={handleSubmit} className="w-full max-w-lg mt-8 bg-white rounded-lg shadow-lg p-8 border border-accent/20">
                <h3 className="text-2xl font-bold mb-6 text-primary text-center">Catering Request</h3>
                <div className="flex flex-col gap-5">
                    <div className="form-control">
                        <label className="input input-accent flex items-center gap-3 hover:shadow-md transition duration-300 focus-within:shadow-lg border-2 focus-within:border-primary rounded-lg">
                            <FaUser className="text-2xl text-primary" />
                            <input 
                                required 
                                type="text" 
                                id="name" 
                                name="name" 
                                placeholder="Full Name*" 
                                value={formData.name} 
                                onChange={handleChange} 
                                className="w-full focus:outline-none" 
                            />
                        </label>
                    </div>
                    
                    <div className="form-control">
                        <label className="input input-accent flex items-center gap-3 hover:shadow-md transition duration-300 focus-within:shadow-lg border-2 focus-within:border-primary rounded-lg">
                            <MdEmail className="text-2xl text-primary"/>
                            <input 
                                required 
                                type="email" 
                                id="email" 
                                name="email" 
                                value={formData.email} 
                                onChange={handleChange} 
                                placeholder="Email*" 
                                className="w-full focus:outline-none" 
                            /> 
                        </label>
                    </div>
                    
                    <div className="form-control">
                        <label className="input input-accent flex items-center gap-3 hover:shadow-md transition duration-300 focus-within:shadow-lg border-2 focus-within:border-primary rounded-lg">
                            <FaPhone className="text-2xl text-primary" />
                            <input 
                                required 
                                type="tel" 
                                id="phone" 
                                name="phone" 
                                value={formData.phone} 
                                onChange={handleChange} 
                                placeholder="Phone Number*" 
                                className="w-full focus:outline-none" 
                            />
                        </label>
                    </div>
                    
                    <div className="form-control">
                        <label className="input input-accent flex items-center gap-3 hover:shadow-md transition duration-300 focus-within:shadow-lg border-2 focus-within:border-primary rounded-lg">
                            <FaLocationDot className="text-2xl text-primary" />
                            <input 
                                required 
                                type="text" 
                                id="location" 
                                name="location" 
                                value={formData.location} 
                                onChange={handleChange} 
                                placeholder="Event Location*" 
                                className="w-full focus:outline-none" 
                            />
                        </label>
                    </div>
                    
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-primary font-semibold">Event Date*</span>
                        </label>
                        <input 
                            required 
                            type="date" 
                            id="date" 
                            min={minDate} 
                            name="date" 
                            value={formData.date} 
                            onChange={handleChange} 
                            className="input input-accent w-full hover:shadow-md transition duration-300 focus:shadow-lg border-2 focus:border-primary rounded-lg" 
                        />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-primary font-semibold">From Time*</span>
                            </label>
                            <input
                                required
                                type="time"
                                id="fromTime"
                                name="fromTime"
                                placeholder="From Time"
                                value={formData.fromTime}
                                onChange={handleChange}
                                className="input input-accent w-full hover:shadow-md transition duration-300 focus:shadow-lg border-2 focus:border-primary rounded-lg"
                                min="12:00"
                                max="15:00"
                                step="3600"
                            />
                        </div>
                        
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-primary font-semibold">To Time*</span>
                            </label>
                            <input
                                required
                                type="time"
                                id="toTime"
                                name="toTime"
                                placeholder="To Time"
                                value={formData.toTime}
                                onChange={handleChange}
                                className="input input-accent w-full hover:shadow-md transition duration-300 focus:shadow-lg border-2 focus:border-primary rounded-lg"
                                min="18:00"
                                max="01:00"
                                step="3600"
                            />
                        </div>
                    </div>
                    
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-primary font-semibold">Event Type*</span>
                        </label>
                        <select
                            className="select select-bordered select-accent w-full hover:shadow-md transition duration-300 focus:shadow-lg border-2 focus:border-primary rounded-lg"
                            required
                            id="eventType"
                            name="eventType"
                            value={formData.eventType}
                            onChange={handleChange}
                        >
                            <option value="">Select Event Type</option>
                            <option value="Wedding">Wedding</option>
                            <option value="Birthday">Birthday</option>
                            <option value="Corporate">Corporate</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    
                    {formData.eventType === 'Other' && (
                        <div className="form-control">
                            <label className="input input-accent flex items-center gap-3 hover:shadow-md transition duration-300 focus-within:shadow-lg border-2 focus-within:border-primary rounded-lg">
                                <input
                                    type="text"
                                    id="otherEventType"
                                    name="otherEventType"
                                    placeholder="Specify Event Type*"
                                    value={formData.otherEventType}
                                    onChange={handleChange}
                                    className="w-full focus:outline-none"
                                />
                            </label>
                        </div>
                    )}
                    
                    <div className="form-control">
                        <label className="input input-accent flex items-center gap-3 hover:shadow-md transition duration-300 focus-within:shadow-lg border-2 focus-within:border-primary rounded-lg">
                            <FaUserGroup className="text-2xl text-primary" />
                            <input 
                                type="number" 
                                id="guests" 
                                name="guests" 
                                min="25" 
                                max="300" 
                                step="25" 
                                value={formData.guests} 
                                onChange={handleChange} 
                                placeholder="Number of Guests (25-300)*" 
                                className="w-full focus:outline-none" 
                            />
                        </label>
                    </div>
                    
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-primary font-semibold">Special Requests</span>
                        </label>
                        <textarea 
                            id="message" 
                            name="message" 
                            placeholder="Themes, dietary restrictions, special arrangements, etc." 
                            value={formData.message} 
                            onChange={handleChange} 
                            className="textarea textarea-lg textarea-accent w-full px-4 hover:shadow-md transition duration-300 focus:shadow-lg border-2 focus:border-primary rounded-lg resize-none" 
                        />
                    </div>
                    
                    <div className="form-control mt-4">
                        <button
                            className="btn btn-primary btn-wide text-white text-lg font-bold py-3 px-6 mx-auto rounded-full hover:scale-105 transition duration-300 shadow-md hover:shadow-lg"
                            type="submit"
                        >
                            Submit Request
                        </button>
                        <p className="text-xs text-center mt-2 text-gray-500">* Required fields</p>
                    </div>
                </div>
            </form>
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm z-50 transition-all duration-300">
                    <div className="flex flex-col gap-4 bg-white items-center p-8 rounded-lg shadow-2xl min-w-[450px] border-2 border-primary/20 animate-fadeIn">
                        <div className="flex flex-col w-full text-lg gap-5">
                            <div className="text-center border-b border-accent/30 pb-4">
                                <h2 className="text-3xl font-bold mb-2 text-primary">Catering Details</h2>
                                <p className="text-sm text-gray-600">Please review your catering request details below.</p>
                            </div>
                            
                            <div className="space-y-3 py-2">
                                <div className="flex flex-col md:flex-row md:justify-between">
                                    <p className="font-medium">Name:</p>
                                    <p className="text-gray-700">{formData.name}</p>
                                </div>
                                
                                <div className="flex flex-col md:flex-row md:justify-between">
                                    <p className="font-medium">Email:</p>
                                    <p className="text-gray-700">{formData.email}</p>
                                </div>
                                
                                <div className="flex flex-col md:flex-row md:justify-between">
                                    <p className="font-medium">Phone:</p>
                                    <p className="text-gray-700">{formData.phone}</p>
                                </div>
                                
                                <div className="flex flex-col md:flex-row md:justify-between">
                                    <p className="font-medium">Date:</p>
                                    <p className="text-gray-700">{formatDate(formData.date)}</p>
                                </div>
                                
                                <div className="flex flex-col md:flex-row md:justify-between">
                                    <p className="font-medium">From Time:</p>
                                    <p className="text-gray-700">{formData.fromTime}</p>
                                </div>
                                
                                <div className="flex flex-col md:flex-row md:justify-between">
                                    <p className="font-medium">To Time:</p>
                                    <p className="text-gray-700">{formData.toTime}</p>
                                </div>
                                
                                <div className="flex flex-col md:flex-row md:justify-between">
                                    <p className="font-medium">Location:</p>
                                    <p className="text-gray-700">{formData.location}</p>
                                </div>
                                
                                <div className="flex flex-col md:flex-row md:justify-between">
                                    <p className="font-medium">Event Type:</p>
                                    <p className="text-gray-700">{formData.eventType}</p>
                                </div>
                                
                                {formData.otherEventType && (
                                    <div className="flex flex-col md:flex-row md:justify-between">
                                        <p className="font-medium">Other Event Type:</p>
                                        <p className="text-gray-700">{formData.otherEventType}</p>
                                    </div>
                                )}
                                
                                <div className="flex flex-col md:flex-row md:justify-between">
                                    <p className="font-medium">Number of Guests:</p>
                                    <p className="text-gray-700">{formData.guests}</p>
                                </div>
                                
                                {formData.message && (
                                    <div className="flex flex-col border-t border-accent/30 pt-3 mt-3">
                                        <p className="font-medium">Special Requests:</p>
                                        <p className="text-gray-700 italic">{formData.message}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                        
                        <div className="flex justify-center gap-4 mt-6 w-full">
                            <button
                                className="btn btn-outline btn-error gap-2 text-lg font-bold py-2 px-4 rounded-lg hover:scale-105 transition duration-300"
                                onClick={handleCloseModal}
                            >
                                <FaPen className="text-sm" /> Edit
                            </button>
                            <button
                                className="btn btn-primary gap-2 text-lg text-white font-bold py-2 px-4 rounded-lg hover:scale-105 transition duration-300"
                                onClick={handleConfirm}
                            >
                                <FaCheck className="text-sm" /> Confirm
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {showConfirmationModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm z-50 transition-all duration-300">
                    <div className="flex flex-col gap-4 bg-white items-center p-8 rounded-lg shadow-2xl max-w-md w-full border-2 border-primary/20 animate-fadeIn">
                        <div className="text-center border-b border-accent/30 pb-4 w-full">
                            <h2 className="text-3xl font-bold mb-2 text-primary">Catering Request Confirmed</h2>
                            <div className="flex items-center justify-center my-4">
                                <div className="bg-green-100 text-green-700 rounded-full p-3">
                                    <FaCheck className="text-3xl" />
                                </div>
                            </div>
                        </div>
                        
                        <div className="space-y-3 py-4 text-center">
                            <p className="text-lg">Your catering request for <span className="font-medium">{formatDate(formData.date)}</span> from <span className="font-medium">{formData.fromTime}</span> to <span className="font-medium">{formData.toTime}</span> has been confirmed.</p>
                            <p className="text-lg">Confirmation email will be sent out shortly. We will follow up soon for more details.</p>
                            <p className="text-lg">Thank you for choosing Luso Delights!</p>
                        </div>
                        
                        <button
                            className="btn btn-primary btn-wide gap-2 text-white text-lg font-bold py-3 px-6 mt-4 rounded-lg hover:scale-105 transition duration-300 shadow-md"
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