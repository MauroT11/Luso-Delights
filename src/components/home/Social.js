import React from 'react';
import { FaPinterest } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";

export default function Social() {
    return (
        <div className="flex  gap-16">
            <a className="social-column text-5xl hover:text-accent duration-200" target="_blank" href="https://www.facebook.com">
                <FaFacebook />
                {/* <p>Facebook</p> */}
            </a>
            <a className="social-column text-5xl hover:text-accent duration-200" target="_blank" href="https://www.instagram.com">
                <AiFillInstagram />
                {/* <p>Instagram</p> */}
            </a>
            <a className="social-column text-5xl hover:text-accent duration-200" target="_blank" href="https://www.tiktok.com">
                <FaTiktok />
                {/* <p>TikTok</p> */}
            </a>
            <a className="social-column text-5xl hover:text-accent duration-200" target="_blank" href="https://www.twitter.com">
                <FaXTwitter />
                {/* <p>X</p> */}
            </a>
            <a className="social-column text-5xl hover:text-accent duration-200" target="_blank" href="https://www.pinterest.com">
                <FaPinterest />
                {/* <p>Pinterest</p> */}
            </a>
            <a className="social-column text-5xl hover:text-accent duration-200" target="_blank" href="https://www.youtube.com">
                <FaYoutube />
                {/* <p>YouTube</p> */}
            </a>
        </div>
    );
}