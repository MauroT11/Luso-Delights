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
    <div className="flex flex-col pt-16 sm:pt-18 md:pt-20 2xl:pt-24 3xl:pt-28 pb-6 md:pb-8 2xl:pb-10 3xl:pb-12 gap-16 sm:gap-20 md:gap-24 lg:gap-32 2xl:gap-40 3xl:gap-48 justify-center items-center">
      <div 
        className="relative hero min-h-[85vh] w-full bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: "url('images/banners/homeBanner.jpg')",
        }}
      >
        <div className="hero-overlay bg-black bg-opacity-50 absolute inset-0"></div>
        
        <div className="container mx-auto px-6 md:px-8 2xl:px-10 3xl:px-12 z-10 text-center py-8 md:py-12 2xl:py-16 3xl:py-20 max-w-7xl 3xl:max-w-[1600px] 4xl:max-w-[1920px]">
          <div className="flex flex-col items-center justify-center">
            <h1 className="mb-5 md:mb-6 2xl:mb-8 3xl:mb-10 text-3xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl 3xl:text-8xl font-bold text-white max-w-3xl 2xl:max-w-4xl 3xl:max-w-5xl leading-tight">
              Experience Authentic Portuguese Flavours
            </h1>
            <p className="mb-8 md:mb-10 2xl:mb-12 3xl:mb-16 text-lg md:text-xl 2xl:text-2xl 3xl:text-3xl text-white/90 max-w-2xl 2xl:max-w-3xl 3xl:max-w-4xl">
              Discover traditional recipes with a modern twist, crafted with love and passion
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 md:gap-8 2xl:gap-10 3xl:gap-12 w-full sm:w-auto">
              <a 
                className="btn btn-primary text-lg md:text-xl 2xl:text-2xl 3xl:text-3xl px-6 md:px-8 2xl:px-10 3xl:px-12 py-3 md:py-4 2xl:py-5 3xl:py-6 rounded-full shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 h-auto min-h-0 flex items-center justify-center"
                href="/reservations"
              >
                Reserve a Table
              </a>
              <a 
                className="btn btn-outline border-2 border-white text-white hover:bg-white/10 text-lg md:text-xl 2xl:text-2xl 3xl:text-3xl px-6 md:px-8 2xl:px-10 3xl:px-12 py-3 md:py-4 2xl:py-5 3xl:py-6 rounded-full shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 h-auto min-h-0 flex items-center justify-center"
                href="/catering"
              >
                Book Catering
              </a>
            </div>
          </div>
        </div>
      </div>

      <ScrollAnimation>
        <div className="flex flex-col justify-center items-center gap-10 2xl:gap-12 3xl:gap-16 w-full max-w-7xl 3xl:max-w-[1600px] 4xl:max-w-[1920px] mx-auto px-4 md:px-6 2xl:px-8 3xl:px-10 py-12 md:py-16 2xl:py-20 3xl:py-24" id="featured">
          <div className="text-center mb-6 md:mb-8 2xl:mb-10 3xl:mb-12">
            <h2 className="text-4xl md:text-5xl 2xl:text-6xl 3xl:text-7xl text-primary font-bold mb-3 md:mb-4 2xl:mb-5 3xl:mb-6">Featured Dishes</h2>
            <p className="text-lg md:text-xl 2xl:text-2xl 3xl:text-3xl text-gray-600 max-w-2xl 2xl:max-w-3xl 3xl:max-w-4xl mx-auto">Experience our chef's most exquisite Portuguese creations that will delight your taste buds.</p>
          </div>
          
          <div className="w-full rounded-xl overflow-hidden shadow-lg">
            <Carousel food1={food1} food2={food2} food3={food3} food4={food4} food5={food5} food6={food6} />
          </div>
          
          <div className="mt-8 md:mt-10 2xl:mt-12 3xl:mt-16">
            <a href="/menu" className="group flex items-center gap-2 md:gap-3 2xl:gap-4 text-primary font-bold text-xl md:text-2xl 2xl:text-3xl 3xl:text-4xl hover:text-accent transition-colors duration-300">
              <span>View Our Complete Menu</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6 2xl:h-8 2xl:w-8 3xl:h-10 3xl:w-10 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5-5 5M5 7l5 5-5 5" />
              </svg>
            </a>
          </div>
        </div>
      </ScrollAnimation>

      <ScrollAnimation>
        <div className="flex items-end text-center gap-32 max-w-[90vw] 3xl:max-w-[1600px] 4xl:max-w-[1920px]">
          <Reserve />
        </div>
      </ScrollAnimation>

      <ScrollAnimation>
        <div className="flex flex-col justify-center items-center gap-8 md:gap-10 2xl:gap-12 3xl:gap-16 max-w-[90vw] 3xl:max-w-[1600px] 4xl:max-w-[1920px]">
          <Calendar />
        </div>
      </ScrollAnimation>

      <ScrollAnimation>
        <div className="flex flex-col justify-center items-center gap-16 md:gap-20 2xl:gap-24 3xl:gap-32 max-w-[90vw] 3xl:max-w-[1600px] 4xl:max-w-[1920px]">
          <Testimonials />
          <TripYelp />
        </div>
      </ScrollAnimation>

      <ScrollAnimation>
        <div className="flex flex-col justify-center items-center gap-8 md:gap-10 2xl:gap-12 3xl:gap-16 max-w-[90vw] 3xl:max-w-[1600px] 4xl:max-w-[1920px]">
          <h1 className="text-3xl md:text-4xl 2xl:text-5xl 3xl:text-6xl text-center text-primary font-bold">Follow us on social media!</h1>
          <Social />
        </div>
      </ScrollAnimation>

      <ScrollAnimation>
        <div className="flex flex-col justify-center items-center gap-8 md:gap-10 2xl:gap-12 3xl:gap-16 max-w-[90vw] 3xl:max-w-[1600px] 4xl:max-w-[1920px]">
          <h1 className="text-3xl md:text-4xl 2xl:text-5xl 3xl:text-6xl text-primary font-bold">Newsletter</h1>
          <Newsletter />
        </div>
      </ScrollAnimation>
    </div>
  );
}