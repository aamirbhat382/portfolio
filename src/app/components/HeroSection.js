import { headers } from "next/headers";
import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-r from-blue-500 to-indigo-600 h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <h1 className=" text-2xl md:text-3xl font-bold mb-4 text-white">
              Hi, I am <br></br>
              <span className="text-gray-900 text-4xl md:text-6xl font-semibold">
                Aamir Hussain
              </span>
            </h1>

            <p className="text-lg md:text-xl mb-6 text-gray-700">
         
              I'm a {" "}
                <span className="text-gray-200 font-bold">
                passionate developer
              </span>{" "}
              with a love for creating innovative solutions. Experienced in    
              
              {" "}<span className="text-gray-200 font-bold">
                backend development
              </span>{" "}
              , specializing in building scalable and efficient applications
              using technologies such as Node.js, Express.js, and MongoDB. With
              a keen eye for detail and a knack for problem-solving, I strive to
              deliver high-quality code and exceptional user experiences.
            </p>
            <Link href="#contact" className="bg-white text-indigo-600 font-semibold py-3 px-8 rounded-full hover:bg-indigo-600 hover:text-white transition duration-300 ease-in-out">
              Contact 
            </Link>
          </div>
          <div className="flex justify-center md:justify-end">
            <div className="rounded-full overflow-hidden w-64 h-64 md:w-80 md:h-80">
              <img
                src="https://aamirbhat382.github.io/Aamirbhat/images/profile-pic%20(5).png"
                alt="Hero"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

