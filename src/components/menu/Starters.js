import React from 'react';

export default function Starters({ dishes }) {
    return (
        <div className="bg-gray-200 rounded-lg  p-2 my-4 min-h-[450px] grid grid-cols-3 items-center">
            {dishes.map((dish, index) => (
                <div key={index}>
                    <h2>{dish.name}</h2>
                    <p>{dish.description}</p>
                    <p>Price: £{dish.price}</p>
                </div>
            ))}
        </div>
    );
}