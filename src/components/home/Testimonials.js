import React from 'react';
import { FaStar } from "react-icons/fa";

export default function Testimonials() {
    return (
        <div>
            <p className="text-center">Here are some testimonials from our satisfied customers.</p>
            <div className="grid grid-cols-3 gap-4 text-white">
                <div className="p-4 border text-center rounded shadow-md shadow-accent border-accent bg-accent">
                    <p className="text-2xl">&ldquo;Amazing food and great service!&rdquo;</p>
                    <p className="italic">- Customer 1</p>
                    {/* <p className="font-bold text-2xl">5/5</p> */}
                    <div className="flex justify-center gap-1">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>
                </div>
                <div className="p-4 border text-center rounded shadow-md shadow-accent border-accent bg-accent">
                    <p className="text-2xl">&ldquo;A delightful experience, highly recommend!&rdquo;</p>
                    <p className="italic">- Customer 2</p>
                    <div className="flex justify-center gap-1">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>
                </div>
                <div className="p-4 border text-center rounded shadow-md shadow-accent border-accent bg-accent">
                    <p className="text-2xl">&ldquo;The best Portuguese flavors I've ever tasted!&rdquo;</p>
                    <p className="italic">- Customer 3</p>
                    <div className="flex justify-center gap-1">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>
                </div>
                <div className="p-4 border text-center rounded shadow-md shadow-accent border-accent bg-accent">
                    <p className="text-2xl">&ldquo;A must-visit for food lovers!&rdquo;</p>
                    <p className="italic">- Customer 4</p>
                    <div className="flex justify-center gap-1">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>
                </div>
                <div className="p-4 border text-center rounded shadow-md shadow-accent border-accent bg-accent">
                    <p className="text-2xl">&ldquo;Exceptional quality and taste!&rdquo;</p>
                    <p className="italic">- Customer 5</p>
                    <div className="flex justify-center gap-1">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>
                </div>
                <div className="p-4 border text-center rounded shadow-md shadow-accent border-accent bg-accent">
                    <p className="text-2xl">&ldquo;Great food and cozy vibes! Loved the Piri Piri chicken and Pastéis de Nata.&rdquo;</p>
                    <p className="italic">- Customer 6</p>
                    <div className="flex justify-center gap-1">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>
                </div>
            </div>
        </div>
    );
}