"use client"

import React, { useState, useEffect } from "react";
import Pageheader from '@/components/Pageheader';
import Starters from '@/components/menu/Starters';
import { createClient } from '@supabase/supabase-js'

export default function Page() {

    const [dishes, setDishes] = useState([]);
    const [drinks, setDrinks] = useState([]);

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
                console.log(dishes)
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
                console.log(drinks)
                setDrinks(drinks)
            } 
        }
        fetchDishes()
        fetchDrinks()
    }, [])

    return (
        <div className="flex flex-col pt-24 pb-8 justify-center items-center">
            <div className="min-w-full">
                <Pageheader 
                header={'Menu'}
                description={'Browse through all our dishes and drinks!'}
                img={"url('/images/4.webp')"} 
                />
                <div className="flex justify-center my-4 gap-8">
                    <a className="btn btn-outline btn-accent " href="#starters">Starters</a>
                    <a className="btn btn-outline btn-accent" href="#mains">Mains</a>
                    <a className="btn btn-outline btn-accent" href="#deserts">Deserts</a>
                    <a className="btn btn-outline btn-accent" href="#drinks">Drinks</a>
                </div>
            </div>
            
            <div id="starters" className="h-full justify-items-center pt-28">
                <h2 className="text-3xl text-primary font-bold">Starters</h2>
                <Starters dishes={dishes} />
            </div>
            <div id="mains" className="h-full justify-items-center pt-28">
                <h2 className="text-3xl text-primary font-bold">Mains</h2>
            </div>
            <div id="deserts" className="min-h-full justify-items-center pt-28">
                <h2 className="text-3xl text-primary font-bold">Deserts</h2>
            </div>
            <div id="drinks" className="min-h-full justify-items-center pt-28">
                <h2 className="text-3xl text-primary font-bold">Drinks</h2>
            </div>
        </div>
    );
}