"use client"

import React, { useState, useEffect } from "react";
import Pageheader from '@/components/Pageheader';
import Dishes from '@/components/menu/Dishes';
import Drinks from '@/components/menu/Drinks';
import { createClient } from '@supabase/supabase-js'

export default function Page() {

    const [dishes, setDishes] = useState([]);
    const [drinks, setDrinks] = useState([]);
    const [sides, setSides] = useState([]);

    useEffect(() => {

        const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
        const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;
        const supabase = createClient(supabaseUrl, supabaseAnonKey);

        const fetchDishes = async () => {
            
            let { data: dishes, error } = await supabase
                .from('dishes')
                .select('*')
            if (error) {
                console.log('error', error)
            } else {
                // console.log(dishes)
                setDishes(dishes)
            } 
        }

        const fetchDrinks = async () => {
            
            let { data: drinks, error } = await supabase
                .from('drinks')
                .select('*')
            if (error) {
                console.log('error', error)
            } else {
                // console.log(drinks)
                setDrinks(drinks)
            } 
        }

        const fetchSides = async () => {
            
            let { data: sides, error } = await supabase
                .from('sides')
                .select('*')
            if (error) {
                console.log('error', error)
            } else {
                console.log(sides)
                setSides(sides)
            } 
        }

        fetchDishes()
        fetchDrinks()
        fetchSides()
    }, [])

    return (
        <div className="flex flex-col pt-24 pb-8 justify-center items-center">
            <div className="flex flex-col gap-8 items-center min-w-full">
                <Pageheader 
                header={'Menu'}
                description={'Browse through all our dishes and drinks!'}
                img={"url('/images/4.webp')"} 
                />
                <div className="flex justify-center my-4 gap-8">
                    <a className="btn btn-accent btn-lg" href="#starters">Starters</a>
                    <a className="btn btn-accent btn-lg" href="#mains">Mains</a>
                    <a className="btn btn-accent btn-lg" href="#deserts">Deserts</a>
                    <a className="btn btn-accent btn-lg" href="#sides">Sides</a>
                    <a className="btn btn-accent btn-lg" href="#drinks">Drinks</a>
                </div>
            </div>
            
            <div id="starters" className="flex flex-col gap-8 items-center pt-28">
                <h2 className="text-3xl text-primary font-bold">Starters</h2>
                <Dishes dishes={dishes.filter(dish => dish.category_id === 1)} />
            </div>
            <div id="mains" className="flex flex-col gap-8 items-center pt-28">
                <h2 className="text-3xl text-primary font-bold">Mains</h2>
                <Dishes dishes={dishes.filter(dish => dish.category_id === 2)} />
            </div>
            <div id="deserts" className="flex flex-col gap-8 items-center pt-28">
                <h2 className="text-3xl text-primary font-bold">Deserts</h2>
                <Dishes dishes={dishes.filter(dish => dish.category_id === 3)} />
            </div>
            <div id="sides" className="flex flex-col gap-8 items-center pt-28">
                <h2 className="text-3xl text-primary font-bold">Sides</h2>
                <Dishes dishes={sides} />
            </div>
            <div id="drinks" className="flex flex-col gap-8 items-center pt-28">
                <h2 className="text-3xl text-primary font-bold">Drinks</h2>
                <Drinks drinks={drinks} />
            </div>
        </div>
    );
}