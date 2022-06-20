import { HiCode } from "react-icons/hi"
import React from 'react';
import { projects } from "../data"

export default function Projects() {
    return (
        <section id="projects" className="body-font">
            <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                <div className="flex flex-col w-full mb-20">
                    <HiCode className="mx-auto inline-block w-10 mb-4 text-6xl text-orange-400" />
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-teal-900">
                        Apps I've Built
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                        Here is a variety of my past work.
                        <br></br>Click to view in a new tab.
                        <br></br>This portfolio itself was built with React using Tailwind CSS.
                    </p>
                </div>
                <div className="flex flex-wrap -m-4">
                    {projects.map((project) => (
                        <a
                            href={project.link}
                            target="_blank"
                            key={project.image}
                            className="sm:w-1/2 w-100 p-4">
                            <div className="flex relative">
                                <img
                                    alt="gallery"
                                    className="absolute inset-0 w-full h-full object-cover object-center"
                                    src={project.image}
                                />
                                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-75 md:opacity-0 md:hover:opacity-100">
                                    <h2 className="tracking-widest text-sm title-font font-medium text-orange-500 mb-1">
                                        {project.subtitle}
                                    </h2>
                                    <h1 className="title-font text-lg font-medium text-white mb-3">
                                        {project.title}
                                    </h1>
                                    <p className="leading-relaxed text-gray-300">
                                        {project.description}
                                    </p>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}