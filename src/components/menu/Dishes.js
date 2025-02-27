import React from 'react';
import { FaLeaf } from "react-icons/fa6";
import { LuWheatOff } from "react-icons/lu";
import { FaPepperHot } from "react-icons/fa";

export default function Dishes({ dishes }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 w-full">
            {dishes.map(dish => (
                <div 
                    key={dish.dish_id} 
                    className="flex flex-col gap-3 p-5 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
                >
                    <div className="flex justify-between items-center gap-2">
                        <h3 className="text-xl font-bold text-primary">{dish.name}</h3>
                        <p className="text-lg font-bold text-accent whitespace-nowrap">£{dish.price.toFixed(2)}</p>
                    </div>
                    
                    <p className="text-gray-700 text-sm flex-grow">{dish.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mt-1">
                        {dish.is_vegetarian && (
                            <div className="badge badge-success gap-1 py-2 px-3">
                                <FaLeaf className="text-sm" />
                                <span className="text-xs font-medium">Vegetarian</span>
                            </div>
                        )}
                        {dish.is_gluten_free && (
                            <div className="badge badge-warning gap-1 py-2 px-3">
                                <LuWheatOff className="text-sm" />
                                <span className="text-xs font-medium">Gluten free</span>
                            </div>
                        )}
                        {dish.is_spicy && (
                            <div className="badge badge-error gap-1 py-2 px-3 text-white">
                                <FaPepperHot className="text-sm" />
                                <span className="text-xs font-medium">Spicy</span>
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}