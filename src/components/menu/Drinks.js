import React from 'react';
import { FaWineBottle } from "react-icons/fa";

export default function Drinks({ drinks }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 w-full">
            {drinks.map(drink => (
                <div 
                    key={drink.drink_id} 
                    className="flex flex-col gap-3 p-5 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
                >
                    <div className="flex justify-between items-center gap-2">
                        <h3 className="text-xl font-bold text-primary">{drink.name}</h3>
                        <p className="text-lg font-bold text-accent whitespace-nowrap">£{drink.price.toFixed(2)}</p>
                    </div>
                    
                    <p className="text-gray-700 text-sm flex-grow">{drink.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mt-1">
                        {drink.is_alcoholic && (
                            <div className="badge badge-warning gap-1 py-2 px-3">
                                <FaWineBottle className="text-sm" />
                                <span className="text-xs font-medium">Alcoholic ({drink.alcohol_percentage}% ABV)</span>
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}