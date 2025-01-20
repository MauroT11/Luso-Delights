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
                    </div>
                    
                </div>
                <div className="flex flex-row gap-16">
                    <nav className="flex flex-col gap-2 text-lg">
                        <div>
                            <h6 className="footer-title pb-2 font-bold text-2xl">Services</h6>
                        </div>
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </nav>
                <nav className="flex flex-col gap-2 text-lg">
                    <div>
                        <h6 className="footer-title pb-2 font-bold text-2xl">Company</h6>
                    </div>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav className="flex flex-col gap-2 text-lg">
                    <div>
                        <h6 className="footer-title pb-2 font-bold text-2xl">Legal</h6>
                    </div>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
                </div>
                <div>
                    <p className="footer-title pb-2 font-bold text-2xl">About us</p>
                    <p className="text-lg ">Luso Delights brings the authentic flavors of Portugal to the heart of Great Yarmouth. Enjoy traditional recipes with a modern twist, crafted with love by Chef Antonio Monterio, straight from Porto and Lisbon.</p>
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