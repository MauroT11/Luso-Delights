import Image from "next/image";
import Carousel from "@/components/home/carousel";
import Calendar from "@/components/home/Calendar";
import Testimonials from "@/components/home/Testimonials";

export default function Home() {
  return (
    <div className="flex flex-col pt-28 pb-8 gap-24 justify-center items-center">
      <div
        className="hero min-h-[80vh] bg-base-200"
        style={{
          backgroundImage: "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
        }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="absolute bottom-40">
            <h1 className="mb-5 text-5xl font-bold text-primary">Experience Authentic Portuguese Flavours</h1>
            <div className="flex justify-center gap-8">
              <button className="btn btn-primary text-2xl">Get Started</button>
              <button className="btn btn-primary text-2xl">Get Started</button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-8 max-w-[90vw]">
        <h1 className="text-3xl text-primary font-bold">Featured Dishes</h1>
        <Carousel />
      </div>
      <div className="flex flex-col justify-center items-center gap-8 max-w-[90vw]">
        <h1 className="text-3xl text-primary font-bold ">Events</h1>
        <Calendar />
      </div>
      <div className="flex flex-col justify-center items-center gap-8 max-w-[90vw]">
        <h1 className="text-3xl text-primary font-bold">Testimonials</h1>
        <Testimonials />
      </div>
    </div>
  );
}
