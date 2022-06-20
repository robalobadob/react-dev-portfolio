import React from "react";
import { FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";

export default function Footer() {
    return (
        <footer className="bg-teal-800 mt-9">
            <nav className="container mx-auto w-1/2 flex p-5 items-center">
                <a className="mx-auto text-4xl text-white hover:text-orange-600" href="https://github.com/robalobadob/" target="_blank" rel="noreferrer">
                    <FiGithub />
                </a>
                
                <a className="mx-auto text-4xl text-white hover:text-orange-600" href="https://www.linkedin.com/in/rob-hoover/" target="_blank" rel="noreferrer">
                    <FiLinkedin />
                </a>
                
                <a className="mx-auto text-4xl text-white hover:text-orange-600" href="https://www.instagram.com/robalobadob/" target="_blank" rel="noreferrer">
                    <FiInstagram />
                </a>

                <a className="mx-auto text-4xl text-white hover:text-orange-600" href="mailto: hello@robhoover.dev" target="_blank" rel="noreferrer">
                    <HiOutlineMail />
                </a>
            </nav>
        </footer>
    )
}