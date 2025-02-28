"use client"

import React, { useState, useEffect } from "react";
import Pageheader from '@/components/Pageheader';
import Dishes from '@/components/menu/Dishes';
import Drinks from '@/components/menu/Drinks';
import { createClient } from '@supabase/supabase-js';
import { FaArrowUp } from 'react-icons/fa';

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
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className="flex flex-col pt-16 md:pt-20 sm:pt-16 pb-8 justify-center items-center">
            <div className="flex flex-col gap-6 md:gap-8 items-center w-full">
                <Pageheader 
                header={'Menu'}
                description={'Browse through all our dishes and drinks!'}
                img={"url('images/banners/menuBanner.jpg')"} 
                padding={20}
                />
                
                {/* Category Navigation - Mobile Optimized */}
                <div className="w-full max-w-full px-2 sm:px-4">
                    <div className="flex flex-wrap justify-center gap-2 py-3 px-2">
                        <a 
                            className="btn btn-sm md:btn-md border-none min-w-[80px] md:min-w-[110px] rounded-full 
                                bg-primary text-white font-bold shadow-md hover:shadow-lg transition-all duration-300 
                                hover:scale-105"
                            href="#starters"
                        >
                            Starters
                        </a>
                        <a 
                            className="btn btn-sm md:btn-md border-none min-w-[80px] md:min-w-[110px] rounded-full 
                                bg-primary text-white font-bold shadow-md hover:shadow-lg transition-all duration-300 
                                hover:scale-105"
                            href="#mains"
                        >
                            Mains
                        </a>
                        <a 
                            className="btn btn-sm md:btn-md border-none min-w-[80px] md:min-w-[110px] rounded-full 
                                bg-primary text-white font-bold shadow-md hover:shadow-lg transition-all duration-300 
                                hover:scale-105"
                            href="#desserts"
                        >
                            Desserts
                        </a>
                        <a 
                            className="btn btn-sm md:btn-md border-none min-w-[80px] md:min-w-[110px] rounded-full 
                                bg-primary text-white font-bold shadow-md hover:shadow-lg transition-all duration-300 
                                hover:scale-105"
                            href="#sides"
                        >
                            Sides
                        </a>
                        <a 
                            className="btn btn-sm md:btn-md border-none min-w-[80px] md:min-w-[110px] rounded-full 
                                bg-primary text-white font-bold shadow-md hover:shadow-lg transition-all duration-300 
                                hover:scale-105"
                            href="#drinks"
                        >
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
                <div className="w-full px-4 sm:px-6 md:px-8">
                    <div id="starters" className="flex flex-col gap-6 md:gap-8 items-center pt-10 md:pt-16">
                        <h2 className="text-2xl md:text-3xl text-primary font-bold">Starters</h2>
                        <Dishes dishes={dishes?.filter(dish => dish.category_id === 1) || []} />
                    </div>
                    <div id="mains" className="flex flex-col gap-6 md:gap-8 items-center pt-20 md:pt-28">
                        <h2 className="text-2xl md:text-3xl text-primary font-bold">Mains</h2>
                        <Dishes dishes={dishes?.filter(dish => dish.category_id === 2) || []} />
                    </div>
                    <div id="desserts" className="flex flex-col gap-6 md:gap-8 items-center pt-20 md:pt-28">
                        <h2 className="text-2xl md:text-3xl text-primary font-bold">Desserts</h2>
                        <Dishes dishes={dishes?.filter(dish => dish.category_id === 3) || []} />
                    </div>
                    <div id="sides" className="flex flex-col gap-6 md:gap-8 items-center pt-20 md:pt-28">
                        <h2 className="text-2xl md:text-3xl text-primary font-bold">Sides</h2>
                        <Dishes dishes={sides || []} />
                    </div>
                    <div id="drinks" className="flex flex-col gap-6 md:gap-8 items-center pt-20 md:pt-28">
                        <h2 className="text-2xl md:text-3xl text-primary font-bold">Drinks</h2>
                        <Drinks drinks={drinks || []} />
                    </div>
                    <div className="flex justify-center mt-16 mb-4">
                        <button 
                            onClick={scrollToTop}
                            className="btn btn-primary btn-circle shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
                            aria-label="Back to top"
                        >
                            <FaArrowUp className="text-lg" />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}