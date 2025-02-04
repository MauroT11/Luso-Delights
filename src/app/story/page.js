import React from 'react';
import Pageheader from '@/components/Pageheader';

export default function Page() {

    return (
        <div className="flex flex-col gap-8 pt-24 pb-8 justify-center items-center">
            <Pageheader 
                header={'About Us'}
                description={'Welcome to Sabor Delights! We are passionate about bringing you the best culinary experiences.'}
                img={"url('/images/4.webp')"} 
            />
            <div className="w-3/4 flex flex-col gap-16 items-center">
                <section className="flex flex-col gap-4 items-center">
                    <h2 className="text-3xl font-bold text-primary">Our Story</h2>
                    <p>It all began in a quaint village along the sun-drenched Algarve coast of Portugal. Maria Santos, inspired by her grandmother's culinary artistry, spent her childhood in the warmth of her grandmother's kitchen, where simple, fresh ingredients were transformed into unforgettable feasts. Driven by a passion to share her heritage, Maria journeyed to Great Yarmouth, where the scent of the sea reminded her of home.</p>
                    <p>With every dish meticulously crafted from the finest locally-sourced and imported ingredients, our restaurant is a homage to Portugal's rich culinary traditions. From fiery piri-piri chicken to comforting caldo verde, each bite is a journey through Portuguese gastronomy. Our signature dish, bacalhau à brás, brings a taste of Portugal to every table.</p>
                    <p>At our restaurant, we believe in the power of food to bring people together, just as Maria's grandmother did. We invite you to join us in celebrating the warmth, hospitality, and vibrant flavors of Portugal. Welcome to our family, and bom apetite!</p>
                    <div className="flex gap-4">
                        <div className="skeleton h-32 w-32"></div>
                        <div className="skeleton h-32 w-32"></div>
                    </div>
                    
                </section>

                <section className="flex flex-col gap-4 items-center">
                    <h2 className="text-3xl font-bold text-primary">Meet the Team</h2>
                    <div className="flex flex-col gap-4 items-center">
                        <h3 className="text-lg font-bold text-accent">Our Talented Owner and Chef</h3>
                        <div className="skeleton h-52 w-52"></div>
                    </div>
                    <div className="flex flex-col gap-4 items-center">
                        <h3 className="text-lg font-bold text-accent">Our dedicated staff members</h3>
                        <div className="flex gap-4">
                            <div className="skeleton h-52 w-52"></div>
                            <div className="skeleton h-52 w-52"></div>
                            <div className="skeleton h-52 w-52"></div>
                        </div>
                    </div>
                </section>

                <section className="flex flex-col gap-4 items-center">
                    <h2 className="text-3xl font-bold text-primary">Ambiance and Experience</h2>
                    <p>Stepping into our restaurant is like being transported to a cozy Portuguese village, where the charm of rustic decor meets the warmth of genuine hospitality. Soft fado music fills the air, mingling with the aroma of sizzling dishes fresh from the kitchen. The intimate lighting and hand-painted tiles create an inviting atmosphere, perfect for savoring a leisurely meal with family and friends. Our friendly staff, dedicated to making every visit memorable, welcomes you with open arms, ensuring that each moment spent with us feels like a cherished gathering at home.</p>
                    <div className="flex gap-4">
                            <div className="skeleton h-52 w-52"></div>
                            <div className="skeleton h-52 w-52"></div>
                            <div className="skeleton h-52 w-52"></div>
                        </div>
                </section>

                <section className="flex flex-col gap-4 items-center">
                    <h2 className="text-3xl font-bold text-primary">Community Involvement</h2>
                    <p>At our restaurant, we believe that being a part of the community goes beyond serving delicious meals. We are committed to giving back and making a positive impact in Great Yarmouth. Through our "Taste of Portugal for a Cause" program, we regularly host charity dinners and fundraising events to support local schools, shelters, and food banks. Our team also volunteers their time and culinary skills at community centers, offering cooking workshops and donating meals to those in need. We are proud to be an active member of this vibrant community, dedicated to fostering a sense of togetherness and support for all.</p>
                    <div className="flex gap-4">
                            <div className="skeleton h-52 w-52"></div>
                            <div className="skeleton h-52 w-52"></div>
                            <div className="skeleton h-52 w-52"></div>
                        </div>
                </section>

                <section className="flex flex-col gap-4 items-center">
                    <h2 className="text-3xl font-bold text-primary">Gallery</h2>
                    <p>Check out photos of our dishes and events...</p>
                    <div className="flex gap-4">
                            <div className="skeleton h-52 w-52"></div>
                            <div className="skeleton h-52 w-52"></div>
                            <div className="skeleton h-52 w-52"></div>
                        </div>
                </section>

                <section className="flex flex-col gap-4 items-center">
                    <h2 className="text-3xl font-bold text-primary">Contact Information</h2>
                        <div className="grid grid-cols-3 gap-4 py-8">
                        <div>   
                            <div className="flex flex-col text-2xl gap-4">
                                <h2 className="text-2xl font-bold text-accent">Contact Us</h2>
                                <p>General enquires:<br /><a href="mailto:info@lusodelights.com" className="text-primary hover:text-accent">info@lusodelights.com</a></p>
                                <p>Reservation enquires:<br /><a href="mailto:reservations@lusodelights.com" className="text-primary hover:text-accent">reservations@lusodelights.com</a></p>
                                <p>Catering Enquires:<br /><a href="mailto:catering@lusodelights.com" className="text-primary hover:text-accent">catering@lusodelights.com</a></p>
                                <p>Telephone No:<br /><a href="tel:01493237410" className="text-primary hover:text-accent">01493 237410</a></p>
                            </div>
                            
                        </div>
                        <div className="flex flex-col items-center gap-4 text-2xl">
                            <h2 className="text-2xl font-bold text-accent">Address</h2>
                            <p>10 Market Street</p>
                            <p>Great Yarmouth</p>
                            <p>Norfolk</p>
                            <p>NR30 1NB</p>
                            <p>United Kingdom</p>
                        </div>
                        <div className="flex flex-col items-center gap-4">
                           <h2 className="text-2xl font-bold text-accent">Opening hours</h2>
                            <div className="text-2xl text-center flex flex-col gap-4">
                                <p><span className="text-primary font-bold">Monday - Friday</span><br />12:00pm - 10:00pm</p>
                                <p><span className="text-primary font-bold">Saturday - Sunday</span><br />10:00am - 11:00pm</p>
                                <p><span className="text-primary font-bold">Bank Holidays</span><br />10:00am - 11:00pm</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}