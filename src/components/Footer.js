import React from "react";
import LIIcon from "../assets/li.png";
import IGIcon from "../assets/ig.png";
import GHIcon from "../assets/gh.png";

export default function Footer() {
    return (
        <footer className="bg-teal-800">
            <div className="px-5 py-3 mx-auto text-center lg:px-40">
                <nav className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a className="mr-5 hover:orange-600" href="https://www.linkedin.com/in/rob-hoover/" target="_blank" rel="noreferrer">
                        <img src={LIIcon} />
                    </a>
                    <a className="mr-5 hover:text-orange-600" href="https://github.com/robalobadob/" target="_blank" rel="noreferrer">
                        <img src={GHIcon} />
                    </a>
                    <a className="mr-5 hover:text-orange-600" href="https://www.instagram.com/robalobadob/" target="_blank" rel="noreferrer">
                        <img src={IGIcon} />
                    </a>
                </nav>
            </div>
        </footer>
    )
}