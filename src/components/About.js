import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-teal-900">
            Hi there, I'm Rob.
            <br className="hidden lg:inline-block" /> I love to build amazing
            websites.
          </h1>
          <p className="mb-8 leading-relaxed">
            I'm a front end web developer and designer based in Vancouver, BC.  
            I primarily use React to build front end apps, but I've also built back end structures from Node servers to SQL databases.  
            <br></br>I also have a Digital Marketing certificate so I can build your site from the ground up with SEO in mind.  
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-orange-600 border-0 py-2 px-6 focus:outline-none hover:bg-orange-800 rounded text-lg text-center">
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-300 bg-teal-800 border-0 py-2 px-6 focus:outline-none hover:bg-teal-900 hover:text-white rounded text-lg text-center">
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={require("..//assets/RobInterurban.jpg")}
          />
        </div>
      </div>
    </section>
  );
}