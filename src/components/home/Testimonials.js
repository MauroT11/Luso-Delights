import React from 'react';

export default function Testimonials() {
    return (
        <div>
            <p className="text-center">Here are some testimonials from our satisfied customers.</p>
            <div className="grid grid-cols-3 gap-4">
                <div className="p-4 border rounded shadow">
                    <p>"Amazing food and great service!"</p>
                    <p>- Customer 1</p>
                </div>
                <div className="p-4 border rounded shadow">
                    <p>"A delightful experience, highly recommend!"</p>
                    <p>- Customer 2</p>
                </div>
                <div className="p-4 border rounded shadow">
                    <p>"The best Portuguese flavors I've ever tasted!"</p>
                    <p>- Customer 3</p>
                </div>
                <div className="p-4 border rounded shadow">
                    <p>"A must-visit for food lovers!"</p>
                    <p>- Customer 4</p>
                </div>
                <div className="p-4 border rounded shadow">
                    <p>"Exceptional quality and taste!"</p>
                    <p>- Customer 5</p>
                </div>
                <div className="p-4 border rounded shadow">
                    <p>"Will definitely come back again!"</p>
                    <p>- Customer 6</p>
                </div>
            </div>
        </div>
    );
}