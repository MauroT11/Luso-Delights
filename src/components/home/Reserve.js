import Image from "next/image";
import React from 'react'
import reservationBanner from "../../../public/images/banners/reservationBanner.jpg";
import cateringBanner from "../../../public/images/banners/cateringBanner.jpg";

const Reserve = () => {
  return (
    <div className="flex gap-16">
        <div className="flex flex-col items-center gap-4">
            <h1 className="text-4xl text-primary font-bold">Reserve a table</h1>
            <Image src={reservationBanner} width={600} height={600} alt="Reservations" className="rounded-lg" />
            <p className="text-lg">Experience exceptional dining at our restaurant!</p>
            <a href="/reservations" className="hover:text-accent duration-200 text-primary font-bold text-2xl">Reserve Now</a>
        </div>
        <div className="flex flex-col items-center gap-4">
            <h1 className="text-4xl text-primary font-bold">Book Catering</h1>
            <Image src={cateringBanner} width={600} height={600} alt="Reservations" className="rounded-lg" />
            <p className="text-lg">Planning an event? Let us cater to your needs with our delightful menu options.</p>
            <a href="/catering" className="hover:text-accent duration-200 text-primary font-bold text-2xl">Book Catering</a>
        </div>
    </div>
  )
}

export default Reserve

