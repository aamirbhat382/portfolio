// src/pages/index.js
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";

const projects = [
  {
    id: 1,
    title: "E-Commerce Website",
    description:
      "A fully functional e-commerce website built with React and Redux. Includes features such as user authentication, product browsing, cart management, and checkout process.",
    image:
      "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630",
    demoLink: "https://example.com/demo",
    codeLink: "https://github.com/example/project1",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "An application for managing tasks and projects. Built with MERN stack (MongoDB, Express.js, React, Node.js). Features include task creation, assignment, tracking, and reporting.",
    image: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_640.jpg",
    demoLink: "https://example.com/demo",
    codeLink: "https://github.com/example/project2",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "A personal portfolio website showcasing projects, skills, and contact information. Built with React and Tailwind CSS. Includes sections for about me, projects, and contact.",
    image: "https://buffer.com/library/content/images/2023/10/free-images.jpg",
    demoLink: "https://example.com/demo",
    codeLink: "https://github.com/example/project3",
  },
];
const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow bg-gray-100">
        <HeroSection />
        <AboutSection />
        <ProjectsSection projects={projects} />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
