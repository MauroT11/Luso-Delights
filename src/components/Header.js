import React from 'react';
import Link from 'next/link';
import { REM, Mr_Dafoe } from "next/font/google";

export default function Header() {

  // const mrDafoe = Mr_Dafoe({ 
  //   subsets: ['latin'], 
  //   weight:'400',
  //   style:'normal',
  // });

  return (
    <header className="flex justify-between text-primary font-bold items-center p-8 bg-white fixed w-full z-10 border-b-2 border-accent">
        <Link className="text-4xl font-mrdafoe hover:text-accent duration-200" href="/">Luso Delights</Link>
        <nav>
            <ul className="flex text-2xl space-x-4">
                <li><a href="/menu" className="hover:text-accent duration-200">Menu</a></li>
                <li><a href="/reservations" className="hover:text-accent duration-200">Reservations</a></li>
                <li><a href="/events" className="hover:text-accent duration-200">Events</a></li>
                <li><a href="/About" className="hover:text-accent duration-200">About Us</a></li>
            </ul>
        </nav>
      
    </header>
  );
}