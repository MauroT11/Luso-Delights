import Image from "next/image";
import React from 'react'
import reservationBanner from "../../../public/images/banners/reservationBanner.jpg";
import cateringBanner from "../../../public/images/banners/cateringBanner.jpg";

const Reserve = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16 w-full px-4">
      <div className="flex-1 flex flex-col items-center gap-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-accent/10">
        <h2 className="text-3xl text-primary font-bold text-center">Reserve a Table</h2>
        <div className="relative w-full h-64 md:h-72 lg:h-80 overflow-hidden rounded-lg">
          <Image 
            src={reservationBanner} 
            fill
            style={{objectFit: "cover"}}
            alt="Reservations" 
            className="hover:scale-105 transition-transform duration-500" 
          />
        </div>
        <p className="text-lg text-center">Experience exceptional dining at our restaurant!</p>
        <a 
          href="/reservations" 
          className="btn btn-primary text-white rounded-full px-8 py-3 font-bold hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
        >
          Reserve Now
        </a>
      </div>
      
      <div className="flex-1 flex flex-col items-center gap-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-accent/10">
        <h2 className="text-3xl text-primary font-bold text-center">Book Catering</h2>
        <div className="relative w-full h-64 md:h-72 lg:h-80 overflow-hidden rounded-lg">
          <Image 
            src={cateringBanner} 
            fill
            style={{objectFit: "cover"}}
            alt="Catering Services" 
            className="hover:scale-105 transition-transform duration-500" 
          />
        </div>
        <p className="text-lg text-center">Planning an event? Let us cater to your needs with our delightful menu options.</p>
        <a 
          href="/catering" 
          className="btn btn-primary text-white rounded-full px-8 py-3 font-bold hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
        >
          Book Catering
        </a>
      </div>
    </div>
  )
}

export default Reserve