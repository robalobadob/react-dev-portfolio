import React from "react";
import { HiPlusCircle } from "react-icons/hi";

export default function Contact() {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [message, setMessage] = React.useState("");

    function encode(data) {
        return Object.keys(data)
            .map(
                (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
            )
            .join("&");
    }

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", name, email, message }),
        })
            .then(() => alert("Thanks for the message!  I'll get back to you as soon as I can."))
            .catch((error) => alert(error));
    }

    return (
        <section id="contact" className="relative">
            <div className="container px-5 py-5 mx-auto flex sm:flex-nowrap flex-wrap justify-center">
                <form
                    netlify
                    name="contact"
                    onSubmit={handleSubmit}
                    className="flex flex-col md:mx-auto md:py-8 mt-8 md:mt-0">
                    
                    <div className="text-center mb-10">
                        <HiPlusCircle className="w-10 inline-block mb-4 text-6xl text-npb" />
                        <h1 className="sm:text-5xl text-4xl font-medium title-font text-steel mb-4">
                            Work With Me
                        </h1>
                        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                            Let me know if I can help you with your newest project.
                        </p>
                    </div>
                    
                    <div className="relative mb-4">
                        <label htmlFor="name" className="leading-7 text-sm text-grey-400">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full bg-gray-500 rounded border border-gray-700 focus:border-npb focus:ring-2 focus:ring-steel text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="email" className="leading-7 text-sm text-grey-400">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full bg-gray-500 rounded border border-gray-700 focus:border-npb focus:ring-2 focus:ring-steel text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="message" className="leading-7 text-sm text-grey-400">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            className="w-full bg-gray-500 rounded border border-gray-700 focus:border-npb focus:ring-2 focus:ring-steel text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </div>
                    <button
                        type="submit"
                        className="text-black bg-npb border-0 py-2 px-6 focus:outline-steel hover:bg-blue-300 rounded text-lg">
                        Submit
                    </button>
                </form>
                <div>

                </div>
            </div>
        </section>
    );
}

