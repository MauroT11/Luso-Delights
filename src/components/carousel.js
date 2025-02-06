import React from 'react';
import Image from "next/image"

export default function Carousel({food1, food2, food3, food4, food5, food6}) {
    return (
      <div className="carousel carousel-center border-2 border-accent bg-neutral rounded-box max-w-[70vw] space-x-4 p-4]">
        <div className="carousel-item">
          <Image
            src={food1}
            className="w-full"
            width={500} 
            height={300}
            alt="food1" />
        </div>
        <div className="carousel-item">
          <Image
            src={food2}
            width={500}
            height={300}
            className="w-full"
            alt="food2" />
        </div>
        <div className="carousel-item">
          <Image
            src={food3}
            width={500}
            height={300}
            className="w-full"
            alt="food3" />
        </div>
        <div className="carousel-item">
          <Image
            src={food4}
            width={500}
            height={300}
            className="w-full"
            alt="food4" />
        </div>
        <div className="carousel-item">
          <Image
            src={food5}
            width={500}
            height={300}
            className="w-full"
            alt="food5" />
        </div>
        <div className="carousel-item">
          <Image
            src={food6}
            width={500}
            height={300}
            className="w-full"
            alt="Tfood6" />
        </div>
        {/* <div className="carousel-item w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
            className="w-full"
            alt="Tailwind CSS Carousel component" />
        </div> */}
      </div>
    );
}