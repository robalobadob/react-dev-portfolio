import { HiArrowRight } from "react-icons/hi";
import React from "react";

export default function Navbar() {
    return (
        <header className="top-0 z-10">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <h1 className="title-font font-medium text-caput mb-4 md:mb-0">
                    <a href="#about" className="ml-3 text-xl hover:opacity-50">
                        Rob Hoover
                    </a>
                </h1>
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-1 md:border-gray-700 flex flex-wrap items-center text-base text-caput justify-center">
                    <a href="#projects" className="mr-5 hover:opacity-50">
                        Past Work
                    </a>
                    <a href="#skills" className="mr-5 hover:opacity-50">
                        Skills
                    </a>
                    <a href="#testimonials" className="mr-5 hover:opacity-50">
                        Testimonials
                    </a>
                </nav>
                <a
                    href="#contact"
                    className="inline-flex items-center bg-npb border-0 py-1 px-3 focus:outline-none hover:bg-blue-300 rounded text-base mt-4 md:mt-0">
                    HIRE ME
                    <HiArrowRight className="w-4 h-4 ml-1" />
                </a>
            </div>
        </header>
    );
}