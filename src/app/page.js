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

export default function Home() {
  return (
    <div className="flex flex-col pt-24 pb-8 gap-32 justify-center items-center">
      <div
        className="hero min-h-[80vh] bg-base-200"
        style={{
          backgroundImage: "url('images/banners/homeBanner.jpg')",
        }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="absolute bottom-40">
            <h1 className="mb-5 text-5xl font-bold text-primary">Experience Authentic Portuguese Flavours</h1>
            <div className="flex justify-center gap-8">
              <a className="btn btn-primary text-2xl" href="/menu">Reserve a table</a>
              <a className="btn btn-primary text-2xl">Book Catering</a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-8 max-w-[90vw]">
        <h1 className="text-4xl text-primary font-bold">Featured Dishes</h1>
        <Carousel food1={food1} food2={food2} food3={food3} food4={food4} food5={food5} food6={food6} />
        <div>
          <a href="/menu" className="hover:text-accent duration-200 text-primary font-bold text-3xl">View Our Menu</a>
        </div>
      </div>
      <div className="flex items-end text-center gap-32 max-w-[90vw]">
        <Reserve />
      </div>
      <div className="flex flex-col justify-center items-center gap-8 max-w-[90vw]">
        <Calendar />
      </div>
      <div className="flex flex-col justify-center items-center gap-16 max-w-[90vw]">
        <Testimonials />
        <TripYelp />
      </div>
      <div className="flex flex-col justify-center items-center gap-8 max-w-[90vw]">
        <h1 className="text-3xl text-primary font-bold ">Follow us on social media!</h1>
        <Social />
      </div>
      <div className="flex flex-col justify-center items-center gap-8 max-w-[90vw]">
        <h1 className="text-3xl text-primary font-bold ">Newsletter</h1>
        <Newsletter />
      </div>
      <div></div>
    </div>
  );
}
