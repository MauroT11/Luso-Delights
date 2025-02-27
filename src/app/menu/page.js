"use client"

import React, { useState, useEffect } from "react";
import Pageheader from '@/components/Pageheader';
import Dishes from '@/components/menu/Dishes';
import Drinks from '@/components/menu/Drinks';
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY || '';
const supabase = createClient(supabaseUrl, supabaseKey);

export default function Page() {

    const [dishes, setDishes] = useState([]);
    const [drinks, setDrinks] = useState([]);
    const [sides, setSides] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

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
                // console.log(sides)
                setSides(sides)
            } 
        }

        const fetchData = async () => {
            try {
                await Promise.all([fetchDishes(), fetchDrinks(), fetchSides()]);
            } finally {
                setIsLoading(false);
            }
        };
        
        fetchData();
    }, [])

    return (
        <div className="flex flex-col pt-24 pb-8 justify-center items-center">
            <div className="flex flex-col gap-8 items-center min-w-full">
                <Pageheader 
                header={'Menu'}
                description={'Browse through all our dishes and drinks!'}
                img={"url('images/banners/menuBanner.jpg')"} 
                padding={20}
                />
                <div className="w-full max-w-4xl mx-auto overflow-x-auto">
                    <div className="flex justify-center my-8 px-4 gap-4 md:gap-6">
                        <a 
                            className="btn border-none min-w-[110px] rounded-full bg-primary text-white hover:bg-primary hover:text-white font-bold shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105" 
                            href="#starters">
                            Starters
                        </a>
                        <a 
                            className="btn border-none min-w-[110px] rounded-full bg-primary text-white hover:bg-primary hover:text-white font-bold shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105" 
                            href="#mains">
                            Mains
                        </a>
                        <a 
                            className="btn border-none min-w-[110px] rounded-full bg-primary text-white hover:bg-primary hover:text-white font-bold shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105" 
                            href="#desserts">
                            Desserts
                        </a>
                        <a 
                            className="btn border-none min-w-[110px] rounded-full bg-primary text-white hover:bg-primary hover:text-white font-bold shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105" 
                            href="#sides">
                            Sides
                        </a>
                        <a 
                            className="btn border-none min-w-[110px] rounded-full bg-primary text-white hover:bg-primary hover:text-white font-bold shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105" 
                            href="#drinks">
                            Drinks
                        </a>
                    </div>
                </div>
            </div>
            
            {isLoading? (
                <div className="flex justify-center items-center h-64">
                    <span className="loading loading-spinner loading-lg text-primary"></span>
                </div>
            ) : (
                <div>
                    <div id="starters" className="flex flex-col gap-8 items-center pt-16">
                        <h2 className="text-3xl text-primary font-bold">Starters</h2>
                        <Dishes dishes={dishes?.filter(dish => dish.category_id === 1) || []} />
                    </div>
                    <div id="mains" className="flex flex-col gap-8 items-center pt-28">
                        <h2 className="text-3xl text-primary font-bold">Mains</h2>
                        <Dishes dishes={dishes?.filter(dish => dish.category_id === 2) || []} />
                    </div>
                    <div id="desserts" className="flex flex-col gap-8 items-center pt-28">
                        <h2 className="text-3xl text-primary font-bold">Desserts</h2>
                        <Dishes dishes={dishes?.filter(dish => dish.category_id === 3) || []} />
                    </div>
                    <div id="sides" className="flex flex-col gap-8 items-center pt-28">
                        <h2 className="text-3xl text-primary font-bold">Sides</h2>
                        <Dishes dishes={sides || []} />
                    </div>
                    <div id="drinks" className="flex flex-col gap-8 items-center pt-28">
                        <h2 className="text-3xl text-primary font-bold">Drinks</h2>
                        <Drinks drinks={drinks || []} />
                    </div>
                </div>
            )}
            
        </div>
    );
}