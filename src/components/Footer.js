import React from 'react';


export default function Footer() {
    return (
        <div>
            <footer className="footer grid grid-cols-3 justify-stretch bg-primary text-white p-10">
                <div>
                    <p className="footer-title pb-2 font-bold text-2xl">Luso Delights</p>
                    <div className="text-lg">
                        <p>10 Market Street</p>
                        <p>Great Yarmouth</p>
                        <p>Norfolk</p>
                        <p>NR30 1NB</p>
                        <p>United Kingdom</p>
                        <p>01493 237410 </p>
                    </div>
                    
                </div>
                <div className="flex flex-row gap-16">
                    <nav className="flex flex-col gap-2 text-lg">
                        <div>
                            <h6 className="footer-title pb-2 font-bold text-2xl">Site</h6>
                        </div>
                        <a className="link link-hover" href="menu">Menu</a>
                        <a className="link link-hover" href="reservations">Reservations</a>
                        <a className="link link-hover" href="/catering">Catering</a>
                        <a className="link link-hover" href="events">Events</a>
                        <a className="link link-hover" href="story">Our Story</a>
                    </nav>
                <nav className="flex flex-col gap-2 text-lg">
                    <div>
                        <h6 className="footer-title pb-2 font-bold text-2xl">Social</h6>
                    </div>
                    <a className="link link-hover" href="https://www.facebook.com/" target="_blank">Facebook</a>
                    <a className="link link-hover" href="https://www.instagram.com">Instagram</a>
                    <a className="link link-hover" href="https://www.tiktok.com">TikTok</a>
                    <a className="link link-hover" href="https://www.x.com">X</a>
                    <a className="link link-hover" href="https://www.youtube.com">YouTube</a>
                    <a className="link link-hover" href="https://www.pinterest.com">Pinterest</a>
                </nav>
                <nav className="flex flex-col gap-2 text-lg">
                    <div>
                        <h6 className="footer-title pb-2 font-bold text-2xl">Legal</h6>
                    </div>
                    <a className="link link-hover" href="/legal/termsofuse">Terms of use</a>
                    <a className="link link-hover" href="/legal/privacypolicy">Privacy policy</a>
                    <a className="link link-hover" href="/legal/cookiepolicy">Cookie policy</a>
                </nav>
                </div>
                <div>
                    <div>
                        <p className="footer-title pb-2 font-bold text-2xl">About us</p>
                        <p className="text-lg ">Luso Delights brings the authentic flavors of Portugal to the heart of Great Yarmouth. Enjoy traditional recipes with a modern twist, crafted with love by Chef Maria Santos, straight the coast of Algarve.</p>
                    </div>
                    <div>
                        <p className="footer-title py-2 font-bold text-2xl">Opening Hours</p>
                        <p className="text-lg"><b>Monday - Friday:</b> 12:00pm - 10:00pm</p>
                        <p className="text-lg"><b>Saturday - Sunday:</b> 10:00am - 11:00pm</p>
                        <p className="text-lg"><b>Bank Holidays:</b> 10:00am - 11:00pm</p>
                    </div>
                    

                </div>
                </footer>
                <footer className="footer justify-center bg-primary text-white border-base-300 border-t px-10 py-4">
                <aside className="flex items-center">
                    <p>
                    &copy; 2025 Luso Delights. All rights reserved.
                    </p>
                </aside>
            </footer>
        </div>
    );
}