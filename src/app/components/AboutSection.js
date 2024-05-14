import React from 'react';

const AboutSection = () => {
  return (
    <section id='about' className="bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">About Me</h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
            Hi, I am Aamir Hussain, a <span className="text-blue-400 font-semibold">passionate developer</span> with a love for creating innovative solutions. I specialize in <span className="text-blue-400 font-semibold">backend development</span>, with expertise in building scalable and efficient applications using technologies such as Node.js, Express.js, and MongoDB. With a keen eye for detail and a knack for problem-solving, I strive to deliver high-quality code and exceptional user experiences.
          </p>
          <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
            In my free time, I enjoy experimenting with new technologies, contributing to open-source projects, and continuously learning to stay up-to-date with the latest trends in web development.
          </p>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            Let&apos;s connect and discuss how we can collaborate on your next project!
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
