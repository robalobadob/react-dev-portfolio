import projectImage1 from "../src/assets/FacialRecognitionProject.jpg";
import projectImage2 from "../src/assets/AnchoressWebSite.jpg";
import projectImage3 from "../src/assets/RobofriendsApp.jpg";
import projectImage4 from "../src/assets/EarlyOnsetRecordsSite.jpg";
import projectImage5 from "../src/assets/GardennsWebsite.jpg";

export const projects = [
    {
        title: "Facial Recognition App",
        subtitle: "React, Express.js, PostgreSQL",
        description: 
            "An app built with React.js on the front end, a RESTful API server built with Express.js and deployed on Heroku. It has session management with authenticated routes, with user information and hashed passwords stored securely in a database with PostgreSQL.",
        image: projectImage1,
        link: "https://facial-recognition-app-react.herokuapp.com/"
    },
    {
        title: "Artist Website",
        subtitle: "Bootstrap 5, SCSS",
        description:
          "A multipage website for a band, built using Bootstrap and SCSS before bundling with Parcel. Hosted via cPanel. There are multiple iframes pulled from Bandcamp and YouTube. Site also includes a hidden page that must be linked to directly that is also blocked from search indexing.",
        image: projectImage2,
        link: "https://anchoress.ca",
      },
      {
        title: "Robofriends",
        subtitle: "React / Redux, Tachyons",
        description:
          "A stateful app built initially with React.js before being reformated with Redux that offers a search function for example datasets provided by multiple APIs. Styled using Tachyons CSS.",
        image: projectImage3,
        link: "https://github.com/robalobadob/robofriends/",
      },
      {
        title: "Record Label Website",
        subtitle: "Shopify, Liquid",
        description:
          "A startup record label ecommerce platform by artists for artists, built with a Shopify template and then customized with Liquid. Primarily based around a vinyl subscription model with additional merchandise items for individual sale. Also set up a private Discord for artists and admin.",
        image: projectImage4,
        link: "https://earlyonsetrecords.com/",
      },
      {
        title: "Client Website",
        subtitle: "Bootstrap 5, SCSS",
        description:
          "A small business website for a client, built using Bootstrap and SCSS before bundling with Parcel.",
        image: projectImage5,
        link: "https://gardenns.com",
      }
];

export const skills = [
    "Web Development",
    "HTML/CSS/JS",
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
        name: "Airrick Dunfield",
        company: "BCIT"
    },
    {
      quote:
          "Gosh wow, what a great dude and a swell developer!",
      image: projectImage4,
      name: "Ryan Dolejsi",
      company: "Early Onset Records"
    },
    {
        quote:
            "Gosh wow, what a great dude and a swell developer!",
        image: projectImage5,
        name: "Kim Enns",
        company: "GardEnns"
    }
]