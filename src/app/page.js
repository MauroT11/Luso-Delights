import Image from "next/image";
import Carousel from "@/components/carousel";
import Calendar from "@/components/home/Calendar";
import Testimonials from "@/components/home/Testimonials";
import TripYelp from "@/components/home/TripYelp";
import Social from "@/components/home/Social";
import Newsletter from "@/components/home/Newsletter";
import Reserve from "@/components/home/Reserve";
import food1 from "../../public/images/food/food1.jpg";
import food2 from "../../public/images/food/food2.jpg";
import food3 from "../../public/images/food/food3.jpg";
import food4 from "../../public/images/food/food4.jpg";
import food5 from "../../public/images/food/food5.jpg";
import food6 from "../../public/images/food/food6.jpg";
import ScrollAnimation from "@/components/ScrollAnimation";

export default function Home() {
  return (
    <div className="flex flex-col pt-20 pb-8 gap-32 justify-center items-center">
      <div 
        className="relative hero min-h-[85vh] w-full bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: "url('images/banners/homeBanner.jpg')",
        }}
      >
        <div className="hero-overlay bg-black bg-opacity-50 absolute inset-0"></div>
        
        <div className="container mx-auto px-6 z-10 text-center py-16 md:py-0">
          <div className="flex flex-col items-center justify-center">
            <h1 className="mb-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-3xl leading-tight">
              Experience Authentic Portuguese Flavours
            </h1>
            <p className="mb-8 text-lg md:text-xl text-white/90 max-w-2xl">
              Discover traditional recipes with a modern twist, crafted with love and passion
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 md:gap-8 w-full sm:w-auto">
              <a 
                className="btn btn-primary text-lg md:text-xl px-6 py-3 md:px-8 rounded-full shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105"
                href="/reservations"
              >
                Reserve a Table
              </a>
              <a 
                className="btn btn-outline border-2 border-white text-white hover:bg-white/10 text-lg md:text-xl px-6 py-3 md:px-8 rounded-full shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105"
                href="/catering"
              >
                Book Catering
              </a>
            </div>
          </div>
        </div>
      </div>

      <ScrollAnimation>
        <div className="flex flex-col justify-center items-center gap-10 w-full max-w-7xl mx-auto px-4 py-12" id="featured">
          <div className="text-center mb-6">
            <h2 className="text-4xl text-primary font-bold mb-3">Featured Dishes</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Experience our chef's most exquisite Portuguese creations that will delight your taste buds.</p>
          </div>
          
          <div className="w-full rounded-xl overflow-hidden shadow-lg">
            <Carousel food1={food1} food2={food2} food3={food3} food4={food4} food5={food5} food6={food6} />
          </div>
          
          <div className="mt-8">
            <a href="/menu" className="group flex items-center gap-2 text-primary font-bold text-xl hover:text-accent transition-colors duration-300">
              <span>View Our Complete Menu</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5-5 5M5 7l5 5-5 5" />
              </svg>
            </a>
          </div>
        </div>
      </ScrollAnimation>

      <ScrollAnimation>
        <div className="flex items-end text-center gap-32 max-w-[90vw]">
          <Reserve />
        </div>
      </ScrollAnimation>

      <ScrollAnimation>
        <div className="flex flex-col justify-center items-center gap-8 max-w-[90vw]">
          <Calendar />
        </div>
      </ScrollAnimation>

      <ScrollAnimation>
        <div className="flex flex-col justify-center items-center gap-16 max-w-[90vw]">
          <Testimonials />
          <TripYelp />
        </div>
      </ScrollAnimation>

      <ScrollAnimation>
        <div className="flex flex-col justify-center items-center gap-8 max-w-[90vw]">
          <h1 className="text-3xl text-center text-primary font-bold ">Follow us on social media!</h1>
          <Social />
        </div>
      </ScrollAnimation>

      <ScrollAnimation>
        <div className="flex flex-col justify-center items-center gap-8 max-w-[90vw]">
          <h1 className="text-3xl text-primary font-bold ">Newsletter</h1>
          <Newsletter />
        </div>
      </ScrollAnimation>
    </div>
  );
}
