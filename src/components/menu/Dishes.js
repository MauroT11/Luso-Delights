import React from 'react';
import { FaLeaf } from "react-icons/fa6";
import { LuWheatOff } from "react-icons/lu";
import { FaPepperHot } from "react-icons/fa";

export default function Dishes({ dishes }) {
    return (
        <div className="grid grid-cols-4 gap-4">
            {dishes.map(dish => (
                <div key={dish.dish_id} className="flex flex-col gap-2 p-4 max-w-[400px]">
                    <div className="flex justify-between gap-2 items-center">
                        <h2 className="text-2xl text-center text-primary font-bold">{dish.name}</h2>
                        <p className="text-md font-bold">£{dish.price.toFixed(2)}</p>
                    </div>
                    <p>{dish.description}</p>
                    <div className="flex gap-2">
                        {dish.is_vegetarian && <div className="badge badge-success gap-1"><FaLeaf /><p>Vegetarian</p></div>}
                        {dish.is_gluten_free && <div className="badge badge-warning gap-1"><LuWheatOff /><p>Gluten free</p></div>}
                        {dish.is_spicy && <div className="badge badge-error text-white gap-1"><FaPepperHot /><p>Spicy</p></div>}
                    </div>
                </div>
            ))}
        </div>
    );
}