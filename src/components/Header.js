import React from 'react';
import { REM, Mr_Dafoe } from "next/font/google";

export default function Header() {

  // const mrDafoe = Mr_Dafoe({ 
  //   subsets: ['latin'], 
  //   weight:'400',
  //   style:'normal',
  // });

  return (
    <header className="flex justify-between text-primary font-bold items-center p-8 bg-white fixed w-full z-10">
        <h1 className="text-4xl font-mrdafoe">Sabor Delights</h1>
        <nav>
            <ul className="flex text-2xl space-x-4">
                <li><a href="/">Menu</a></li>
                <li><a href="/about">Reservations</a></li>
                <li><a href="/contact">Events</a></li>
                <li><a href="/contact">About Us</a></li>
            </ul>
        </nav>
      
    </header>
  );
}