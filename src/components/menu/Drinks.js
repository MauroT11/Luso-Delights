import React from 'react';

export default function Drinks({ drinks }) {
    return (
        <div className="grid grid-cols-4 gap-4">
            {drinks.map(drink => (
                <div key={drink.drink_id} className="flex flex-col gap-2 p-4 min-w-[380px]">
                    <div className="flex justify-between gap-2 items-center">
                        <h2 className="text-2xl text-center text-primary font-bold">{drink.name}</h2>
                        <p className="text-md font-bold">£{drink.price.toFixed(2)}</p>
                    </div>
                    <p>{drink.description}</p>
                    <div className="flex gap-2">
                        {drink.is_alcoholic && <div className="badge badge-warning">Alcoholic</div>}
                    </div>
                </div>
            ))}
        </div>
    );
}