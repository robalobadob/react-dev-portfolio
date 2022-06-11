import projectImage1 from "../src/assets/FacialRecognitionProject.jpg";
import projectImage2 from "../src/assets/AnchoressWebSite.jpg";
import projectImage3 from "../src/assets/RobofriendsApp.jpg";
import projectImage4 from "../src/assets/GardennsWebsite.jpg";

export const projects = [
    {
        title: "Facial Recognition App",
        subtitle: "React, Node.js, PostgreSQL",
        description: 
            "An app built with React on the front end, a server built with Node.js with a secure user registration feature that is stored on a database built with PostgreSQL.  The app itself is an image uploader to identify faces using the Clarifai API. It is built following a tutorial by Andrei Neagoie on zerotomastery.io",
        image: projectImage1,
        link: "https://facial-recognition-app-react.herokuapp.com/"
    },
    {
        title: "Artist Website",
        subtitle: "HTML, CSS",
        description:
          "A multipage Website for a band, built using Bootstrap and SCSS.",
        image: projectImage2,
        link: "https://anchoress.ca",
      },
      {
        title: "Robofriends",
        subtitle: "React / Redux",
        description:
          "An app built with React app that creates a search function within a dataset populated by an API. Built following a tutorial by Andrei Neagoie on zerotomastery.io",
        image: projectImage3,
        link: "https://github.com/robalobadob/robofriends/issues",
      },
      {
        title: "Client Website",
        subtitle: "Bootstrap 5, SCSS",
        description:
          "A small business website for a client, built using Bootstrap and SCSS.",
        image: projectImage4,
        link: "https://gardenns.com",
      }
];

export const skills = [
    "Web Development",
    "HTML",
    "CSS",
    "Javascript",
    "React",
    "PostgreSQL",
    "Web Design",
    "UX/UI",
    "Digital Marketing",
    "SEO"
];

export const testimonial = [
    {
        quote: 
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
        image: projectImage1,
        name: "Andrei",
        company: "ZTM"
    },
    {
        quote:
            "Gosh wow, what a great dude and a swell developer!",
        image: projectImage4,
        name: "Kim Enns",
        company: "GardEnns"
    }
]