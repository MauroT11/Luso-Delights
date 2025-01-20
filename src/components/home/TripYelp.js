import React from 'react';
import { FaYelp } from "react-icons/fa";
import { FaTripadvisor } from "react-icons/fa";
import { FaCircle } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { FaCircleHalfStroke } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";

export default function TripYelp({ tripAdvisorRating, yelpRating }) {
    return (
        <div className="flex justify-center items-center gap-8 max-w-[90vw] ">
            <a className="p-4 flex border rounded items-center gap-4 bg-[#34E0A1] shadow-md shadow-[#34e0a1] border-[#34e0a1]" href="https://www.tripadvisor.com" target="_blank">
                <FaTripadvisor className="text-4xl" />
                <div className="flex gap-1">
                    <FaCircle />
                    <FaCircle />
                    <FaCircle />
                    <FaCircle />
                    <FaCircleHalfStroke />
                </div>
            </a>
            <a className="p-4 flex border items-center gap-4 rounded bg-[#ff1a1a] shadow-md text-white shadow-[#ff1a1a] border-[#ff1a1a]" href="https://www.yelp.com" target="_blank">
                <FaYelp className="text-4xl"/>
                <div className="flex gap-1 text-2xl">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStarHalfAlt />
                </div>
            </a>
        </div>
    );
}