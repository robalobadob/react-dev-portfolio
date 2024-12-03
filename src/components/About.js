import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow w-2/3 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <p className="sm:text-3xl mb-2 font-medium">Hi there! 👋 My name is</p>
          <h1 className="mb-8 text-5xl sm:text-6xl lg:text-8xl text-caput">Rob Hoover</h1>
          <p className="mb-3 leading-relaxed w-[70%]">I'm a front-end web developer and designer based in Vancouver, BC with experience handling complex React and HTML / CSS coding, design and extensions to meet organization's front-facing internet needs. Detail-oriented collaboration with others to define project expectations and demand. My Digital Marketing certificate helps me build your site from the ground up with SEO in mind.</p>
          <p className="mb-8 leading-relaxed w-[70%]">
            In my free time, I like to take my{" "}
            <a href="https://www.instagram.com/adventuresofcoach/" target="_blank" rel="noreferrer" className="underline decoration-steel decoration-wavy">
              two
            </a>{" "}
            <a href="https://www.instagram.com/goosey.thechocolatelab/" target="_blank" rel="noreferrer" className="underline decoration-steel decoration-wavy">
              {" "}
              dogs
            </a>{" "}
            on hikes in the mountains and at night I sing in a{" "}
            <a href="https://anchoress.ca" target="_blank" rel="noreferrer" className="underline decoration-steel decoration-wavy">
              punk band
            </a>
            .
          </p>
          <div className="flex justify-center">
            <a href="#contact" className="inline-flex bg-npb border-0 py-2 px-6 focus:outline-none hover:bg-blue-300 rounded text-lg text-center">
              Work With Me
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg w-1/3 justify-center">
          <img className="object-cover object-center rounded h-50" alt="hero" src={require("../assets/rob.jpg")} />
        </div>
      </div>
    </section>
  );
}
