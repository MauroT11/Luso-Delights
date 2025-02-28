import React from 'react';
import Pageheader from '@/components/Pageheader';
import Chef from "../../../public/images/CHEF2.jpg";
import cooks from "../../../public/images/cooks.jpg";
import servants from "../../../public/images/servants.jpg";
import atmosphere1 from "../../../public/images/atmosphere1.jpg";
import atmosphere2 from "../../../public/images/atmosphere2.jpg";
import charity1 from "../../../public/images/charity1.jpg";
import charity2 from "../../../public/images/charity2.jpg";
import food1 from "../../../public/images/food/food1.jpg";
import food2 from "../../../public/images/food/food2.jpg";
import food3 from "../../../public/images/food/food3.jpg";
import food4 from "../../../public/images/food/food4.jpg";
import gallery1 from "../../../public/images/gallery1.jpg";
import gallery2 from "../../../public/images/gallery2.jpg";
import village from "../../../public/images/village.jpg";
import Image from "next/image"
import Carousel from "@/components/carousel";
import ScrollAnimation from "@/components/ScrollAnimation";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

export default function Page() {

    return (
        <div className="flex flex-col pt-16 md:pt-20 sm:pt-16 pb-8 justify-center items-center">
            <Pageheader 
                header={'Our Story'}
                description={'Welcome to Sabor Delights! We are passionate about bringing you the best culinary experiences.'}
                img={"url('images/banners/storyBanner.jpg')"} 
                padding={28}
            />
            <div className="w-full px-4 sm:px-8 md:px-12 lg:w-5/6 xl:w-3/4 flex flex-col gap-16 md:gap-24 items-center">
                <section className="flex flex-col gap-4 items-center">
                    <div className="text-base md:text-lg pt-6 flex flex-col gap-6 md:gap-8">
                        <p className="text-center">It all began in a quaint village along the sun-drenched Algarve coast of Portugal. Maria Santos, inspired by her grandmother's culinary artistry, spent her childhood in the warmth of her grandmother's kitchen, where simple, fresh ingredients were transformed into unforgettable feasts. Driven by a passion to share her heritage, Maria journeyed to Great Yarmouth, where the scent of the sea reminded her of home.</p>
                        <div className="flex justify-center">
                            <Image src={village} width={600} height={300} alt="Portuguese village" className="rounded-2xl w-full max-w-2xl h-auto object-cover" />
                        </div>
                        <p className="text-center">With every dish meticulously crafted from the finest locally-sourced and imported ingredients, our restaurant is a homage to Portugal's rich culinary traditions. From fiery piri-piri chicken to comforting caldo verde, each bite is a journey through Portuguese gastronomy. Our signature dish, bacalhau à brás, brings a taste of Portugal to every table. At our restaurant, we believe in the power of food to bring people together, just as Maria's grandmother did. We invite you to join us in celebrating the warmth, hospitality, and vibrant flavors of Portugal.<br /><br /><span className="font-bold text-2xl">Welcome to our family, and bom apetite!</span></p>
                    </div>
                </section>

                <ScrollAnimation>
                    <section className="flex flex-col gap-4 items-center">
                        <h2 className="text-2xl md:text-3xl font-bold text-primary">Meet the Team</h2>
                        <div className="flex flex-col gap-4 items-center">
                            <h3 className="text-lg text-center font-bold text-accent">Our Talented Owner and Chef <br />Maria Santos</h3>
                            <Image src={Chef} width={600} height={300} alt="Chef Maria Santos" className="rounded-2xl w-full max-w-2xl h-auto object-cover" />
                        </div>
                        <div className="flex flex-col gap-4 items-center">
                            <h3 className="text-lg font-bold text-accent mt-4">Our dedicated staff members</h3>
                            <div className="flex flex-col md:flex-row gap-4">
                                <Image src={cooks} width={600} height={300} alt="Kitchen staff" className="rounded-2xl w-full h-auto object-cover" />
                                <Image src={servants} width={600} height={300} alt="Serving staff" className="rounded-2xl w-full h-auto object-cover" />
                            </div>
                        </div>
                    </section>
                </ScrollAnimation>

                <ScrollAnimation>
                    <section className="flex flex-col gap-4 items-center">
                        <h2 className="text-2xl md:text-3xl font-bold text-primary">Ambiance and Experience</h2>
                        <p className="text-base md:text-lg">Stepping into our restaurant is like being transported to a cozy Portuguese village, where the charm of rustic decor meets the warmth of genuine hospitality. Soft fado music fills the air, mingling with the aroma of sizzling dishes fresh from the kitchen. The intimate lighting and hand-painted tiles create an inviting atmosphere, perfect for savoring a leisurely meal with family and friends. Our friendly staff, dedicated to making every visit memorable, welcomes you with open arms, ensuring that each moment spent with us feels like a cherished gathering at home.</p>
                        <div className="flex flex-col md:flex-row gap-4 mt-2">
                            <Image src={atmosphere1} width={600} height={300} alt="Restaurant atmosphere" className="rounded-2xl w-full h-auto object-cover" />
                            <Image src={atmosphere2} width={600} height={300} alt="Restaurant interior" className="rounded-2xl w-full h-auto object-cover" />
                        </div>
                    </section>
                </ScrollAnimation>

                <ScrollAnimation>
                    <section className="flex flex-col gap-4 items-center">
                        <h2 className="text-2xl md:text-3xl font-bold text-primary">Community Involvement</h2>
                        <p className="text-base md:text-lg">At our restaurant, we believe that being a part of the community goes beyond serving delicious meals. We are committed to giving back and making a positive impact in Great Yarmouth. Through our "Taste of Portugal for a Cause" program, we regularly host charity dinners and fundraising events to support local schools, shelters, and food banks. Our team also volunteers their time and culinary skills at community centers, offering cooking workshops and donating meals to those in need. We are proud to be an active member of this vibrant community, dedicated to fostering a sense of togetherness and support for all.</p>
                        <div className="flex flex-col md:flex-row gap-4 mt-2">
                            <Image src={charity1} width={600} height={300} alt="Charity event" className="rounded-2xl w-full h-auto object-cover" />
                            <Image src={charity2} width={600} height={300} alt="Community involvement" className="rounded-2xl w-full h-auto object-cover" />
                        </div>
                    </section>
                </ScrollAnimation>

                <ScrollAnimation>
                    <section className="flex flex-col gap-4 items-center w-full">
                        <h2 className="text-2xl md:text-3xl font-bold text-primary">Gallery</h2>
                        <p className="text-base md:text-lg">Check out photos of our dishes and events...</p>
                        <div className="w-full overflow-hidden">
                            <Carousel food1={gallery1} food2={food2} food3={food3} food4={gallery2} food5={food1} food6={food4} />
                        </div>
                    </section>
                </ScrollAnimation>

                <ScrollAnimation>
                    <section className="flex flex-col gap-6 md:gap-8 items-center w-full">
                        <h2 className="text-2xl md:text-3xl font-bold text-primary">Contact Information</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full">
                            {/* Contact Us */}
                            <div className="bg-white p-5 md:p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-t-4 border-primary h-full">   
                                <div className="flex flex-col gap-4 md:gap-5">
                                    <h3 className="text-xl md:text-2xl font-bold text-primary pb-2 border-b border-accent/30">Contact Us</h3>
                                    <div className="flex flex-col gap-4 md:gap-5">
                                        <p className="text-base md:text-lg">
                                            <span className="font-medium">General enquiries:</span><br />
                                            <a href="mailto:info@lusodelights.com" className="text-primary hover:text-accent transition-colors duration-200 flex items-center gap-2">
                                                <FaEnvelope className="text-accent" /> info@lusodelights.com
                                            </a>
                                        </p>
                                        <p className="text-base md:text-lg">
                                            <span className="font-medium">Reservation enquiries:</span><br />
                                            <a href="mailto:reservations@lusodelights.com" className="text-primary hover:text-accent transition-colors duration-200 flex items-center gap-2">
                                                <FaEnvelope className="text-accent" /> reservations@lusodelights.com
                                            </a>
                                        </p>
                                        <p className="text-base md:text-lg">
                                            <span className="font-medium">Catering enquiries:</span><br />
                                            <a href="mailto:catering@lusodelights.com" className="text-primary hover:text-accent transition-colors duration-200 flex items-center gap-2">
                                                <FaEnvelope className="text-accent" /> catering@lusodelights.com
                                            </a>
                                        </p>
                                        <p className="text-base md:text-lg">
                                            <span className="font-medium">Telephone:</span><br />
                                            <a href="tel:01493237410" className="text-primary hover:text-accent transition-colors duration-200 flex items-center gap-2">
                                                <FaPhone className="text-accent" /> 01493 237410
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Address */}
                            <div className="bg-white p-5 md:p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-t-4 border-primary flex flex-col h-full">
                                <h3 className="text-xl md:text-2xl font-bold text-primary pb-2 border-b border-accent/30">Address</h3>
                                <div className="flex items-start gap-4 mt-4 md:mt-5 flex-grow">
                                    <FaMapMarkerAlt className="text-accent text-2xl md:text-3xl mt-1" />
                                    <div className="text-base md:text-lg flex flex-col gap-1">
                                        <p>10 Market Street</p>
                                        <p>Great Yarmouth</p>
                                        <p>Norfolk</p>
                                        <p>NR30 1NB</p>
                                        <p>United Kingdom</p>
                                    </div>
                                </div>
                                <a 
                                    href="https://maps.google.com/?q=10+Market+Street,Great+Yarmouth,Norfolk,NR30+1NB,UK" 
                                    target="_blank" 
                                    rel="noreferrer"
                                    className="btn btn-sm btn-primary text-white mt-4 mx-auto hover:scale-105 transition-all duration-300"
                                >
                                    View on Map
                                </a>
                            </div>
                            
                            {/* Opening Hours */}
                            <div className="bg-white p-5 md:p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-t-4 border-primary h-full md:col-span-2 lg:col-span-1">
                                <h3 className="text-xl md:text-2xl font-bold text-primary pb-2 border-b border-accent/30">Opening Hours</h3>
                                <div className="flex flex-col gap-5 md:gap-6 mt-4 md:mt-5">
                                    <div className="flex items-center gap-3">
                                        <FaClock className="text-accent text-xl md:text-2xl flex-shrink-0" />
                                        <div className="text-base md:text-lg">
                                            <p className="font-medium text-primary">Monday - Friday</p>
                                            <p>12:00pm - 10:00pm</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <FaClock className="text-accent text-xl md:text-2xl flex-shrink-0" />
                                        <div className="text-base md:text-lg">
                                            <p className="font-medium text-primary">Saturday - Sunday</p>
                                            <p>10:00am - 11:00pm</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <FaClock className="text-accent text-xl md:text-2xl flex-shrink-0" />
                                        <div className="text-base md:text-lg">
                                            <p className="font-medium text-primary">Bank Holidays</p>
                                            <p>10:00am - 10:00pm</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </ScrollAnimation>
            </div>
        </div>
    );
}