import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow w-2/3 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="sm:text-4xl text-3xl mb-2 font-semibold text-teal-900">
            Hi there, I'm Rob.
          </h1>
          <p className="sm:text-3xl mb-5 font-medium text-teal-900">
            I love to build websites.
          </p>
          <p className="mb-3 leading-relaxed">
            I'm a front-end web developer and designer based in Vancouver, BC.  
          </p>
          <p className="mb-3 leading-relaxed">
            I like to use React to build the front end of apps, but I've also built back end structures from RESTful API servers to SQL databases.  
          </p>
          <p className="mb-3 leading-relaxed">
            My Digital Marketing certificate helps me build your site from the ground up with SEO in mind.  
          </p>
          <p className="mb-8 leading-relaxed">
            In my free time, I like to take my <a href="https://www.instagram.com/adventuresofcoach/" target="_blank" rel="noreferrer" className="hover:underline hover:decoration-orange-400 hover:decoration-dashed">two</a> <a href="https://www.instagram.com/goosey.thechocolatelab/" target="_blank" rel="noreferrer" className="hover:underline hover:decoration-orange-400 hover:decoration-dotted"> dogs</a> on hikes in the mountains and at night I sing in a <a href="https://anchoress.ca" target="_blank" rel="noreferrer" className="hover:underline hover:decoration-orange-400 hover:decoration-wavy">punk band</a>.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex bg-orange-600 border-0 py-2 px-6 focus:outline-none hover:bg-orange-300 rounded text-lg text-center">
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-300 bg-teal-800 border-0 py-2 px-6 focus:outline-none hover:bg-teal-900 hover:text-white rounded text-lg text-center">
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg w-1/3 justify-center">
          <img
            className="object-cover object-center rounded h-50"
            alt="hero"
            src={require("..//assets/rob.jpg")}
          />
        </div>
      </div>
    </section>
  );
}