import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const ContactSection = () => {
  return (
    <section id="contact" className="bg-gradient-to-r from-blue-500 to-indigo-600 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Contact Me</h2>
          <p className="text-lg text-gray-200 mb-10">
            Have a project in mind or want to collaborate? Feel free to reach
            out to me!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col items-start">
              <div className="flex items-center mb-4">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-indigo-200 mr-1"
                />
                <a
                  href="mailto:aamirbhat382@gmail.com"
                  className="text-indigo-200 font-semibold hover:underline"
                >
                  <span className="sr-only">Email:</span>
                  aamirbhat382@gmail.com
                </a>
              </div>

              <div className="flex items-center mb-4">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="text-indigo-200 mr-1"
                />
                <div>
                  <p className="text-indigo-200 font-semibold">+91-6005203531</p>
                </div>
              </div>
              <div className="flex items-center mb-4">
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="text-indigo-200 mr-1"
                />
                <p className="text-indigo-200 font-semibold">Srinagar, India</p>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <a
                href="https://www.linkedin.com/in/aamirbhat382"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white font-semibold hover:underline mb-4 transition duration-300 ease-in-out transform hover:scale-105 inline-block"
              >
                <FontAwesomeIcon icon={faLinkedin} className="mr-2" />
                LinkedIn
              </a>
              <a
                href="https://github.com/aamirbhat382"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white font-semibold hover:underline transition duration-300 ease-in-out transform hover:scale-105 inline-block"
              >
                <FontAwesomeIcon icon={faGithub} className="mr-2" />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
