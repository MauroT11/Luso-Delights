import React from 'react';
import { FaPinterest } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";

export default function Social() {
    return (
        <div className="lg:flex lg:flex-wrap grid grid-cols-3 justify-center gap-16">
            <a className="social-column text-5xl hover:text-accent duration-200 transition ease-in-out hover:scale-125" target="_blank" href="https://www.facebook.com">
                <FaFacebook className="text-[#1877F2]" />
                {/* <p>Facebook</p> */}
            </a>
            <a className="social-column text-5xl hover:text-accent duration-200 transition ease-in-out hover:scale-125" target="_blank" href="https://www.instagram.com">
                <AiFillInstagram className="text-[#E4405F]" />
                {/* <p>Instagram</p> */}
            </a>
            <a className="social-column text-5xl hover:text-accent duration-200 transition ease-in-out hover:scale-125" target="_blank" href="https://www.tiktok.com">
                <FaTiktok className="text-[#000000]" />
                {/* <p>TikTok</p> */}
            </a>
            <a className="social-column text-5xl hover:text-accent duration-200 transition ease-in-out hover:scale-125" target="_blank" href="https://www.twitter.com">
                <FaXTwitter className="text-[#000000]" />
                {/* <p>X</p> */}
            </a>
            <a className="social-column text-5xl hover:text-accent duration-200 transition ease-in-out hover:scale-125" target="_blank" href="https://www.pinterest.com">
                <FaPinterest className="text-[#E60023]" />
                {/* <p>Pinterest</p> */}
            </a>
            <a className="social-column text-5xl hover:text-accent duration-200 transition ease-in-out hover:scale-125" target="_blank" href="https://www.youtube.com">
                <FaYoutube className="text-[#FF0000]" />
                {/* <p>YouTube</p> */}
            </a>
        </div>
    );
}