"use client"
import React, { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gray-900 text-white fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto py-6">
        <div className="flex justify-between items-center">
          <Link href="#home"  className="text-xl font-bold tracking-wider">
          Aamir Hussain
          </Link>
          <nav className="hidden md:flex">
            <ul className="flex space-x-6">
              <li>
                <Link href="#about" className="hover:text-gray-400">
               About
                </Link>
              </li>
                <li>
                    <Link href="#projects" className="hover:text-gray-400">
                    Projects
                    </Link>
                </li>
                <li>
                    <Link href="#contact" className="hover:text-gray-400">
                    Contact
                    </Link>
                </li>
            </ul>
          </nav>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Responsive Navigation Menu */}
      {isOpen && (
        <div className="bg-gray-800 md:hidden">
          <div className="container mx-auto py-4">
            <ul className="flex flex-col space-y-4">
              <li>
                <Link href="#about">
                  <a className="text-white hover:text-gray-400">About</a>
                </Link>
              </li>
              <li>
                <Link href="#projects">
                  <a className="text-white hover:text-gray-400">Projects</a>
                </Link>
              </li>
              <li>
                <Link href="#contact">
                  <a className="text-white hover:text-gray-400">Contact</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
