"use client";

import { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  return (
    <nav className="bg-white fixed w-full z-50 md:justify-items-center md:px-52">
      <div className=" mx-auto flex items-center space-x-8 gap-12  p-5">
        {/* Logo */}
        <div className="w-72"><img src="/wordpress-images/black-logo.png" /></div>

        {/* Hamburger Menu Icon */}
        <button
          className="block md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className="space-y-2">
            <div className="w-8 h-1 bg-black"></div>
            <div className="w-8 h-1 bg-black"></div>
            <div className="w-8 h-1 bg-black"></div>
          </div>
        </button>

        {/* Desktop Menu */}
        <ul className="hidden  md:flex  items-center w-full ">
          <div className="flex items-center space-x-8 ">
            <li className="cursor-pointer text-lg text-black hover:text-[#ffb299]">HOME</li>
            <li className="cursor-pointer text-lg text-black hover:text-[#ffb299]">HOW IT WORKS</li>
            <li className="cursor-pointer text-lg text-black hover:text-[#ffb299] ">SEE OUR WORK</li>
            <li
              className="relative cursor-pointer text-lg text-black hover:text-[#ffb299]"
              onMouseEnter={() => setIsServicesDropdownOpen(true)}
              onMouseLeave={() => setIsServicesDropdownOpen(false)}
            >
              SERVICES
              <span
                className={`absolute left-full m-1 text-sm transition-transform duration-300 text-[#ffb299] ${isServicesDropdownOpen ? "rotate-180" : "rotate-0"
                  }`}
              >
                ▼
              </span>
              {/* Mega Menu for Desktop */}
              {isServicesDropdownOpen && (
                <div className="absolute left-1/2 transform -translate-x-1/2 top-full bg-white text-black w-max shadow-lg p-12 grid grid-cols-3  gap-16 z-50">
                  {/* 1st Row */}
                  <div className="flex items-start space-x-2">
                    <svg
                      className="w-5 h-5 text-gray-500 dark:text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 3v4h4V3H5zm6 0v4h4V3h-4zM5 11v4h4v-4H5zm6 0v4h4v-4h-4zM3 17h14v-4H3v4z"
                      />
                    </svg>
                    <h3 className=" cursor-pointer text-lg text-black hover:text-[#ffb299]">Theme Development</h3>
                  </div>

                  <div className="flex items-start space-x-2">
                    <svg
                      className="w-5 h-5 text-gray-500 dark:text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 3v4h4V3H5zm6 0v4h4V3h-4zM5 11v4h4v-4H5zm6 0v4h4v-4H5zm3 17h14v-4H3v4z"
                      />
                    </svg>
                    <h3 className="cursor-pointer text-lg text-black hover:text-[#ffb299]">Plugin Development</h3>
                  </div>

                  <div className="flex items-start space-x-2">
                    <svg
                      className="w-5 h-5 text-gray-500 dark:text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 3v4h4V3H5zm6 0v4h4V3h-4zM5 11v4h4v-4H5zm6 0v4h4v-4H5zm3 17h14v-4H3v4z"
                      />
                    </svg>
                    <h3 className="cursor-pointer text-lg text-black hover:text-[#ffb299]">E-commerce Development</h3>
                  </div>


                  {/* 2nd Row */}
                  <div className="flex items-start space-x-2">
                    <svg
                      className="w-5 h-5 text-gray-500 dark:text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 3v4h4V3H5zm6 0v4h4V3h-4zM5 11v4h4v-4H5zm6 0v4h4v-4h-4zM3 17h14v-4H3v4z"
                      />
                    </svg>
                    <h3 className="cursor-pointer text-lg text-black hover:text-[#ffb299]">Custom Wordpress Website</h3>
                  </div>

                  <div className="flex items-start space-x-2">
                    <svg
                      className="w-5 h-5 text-gray-500 dark:text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 3v4h4V3H5zm6 0v4h4V3h-4zM5 11v4h4v-4H5zm6 0v4h4v-4H5zm3 17h14v-4H3v4z"
                      />
                    </svg>
                    <h3 className="cursor-pointer text-lg text-black hover:text-[#ffb299]">Wordpress Website Seo</h3>
                  </div>

                  <div className="flex items-start space-x-2">
                    <svg
                      className="w-5 h-5 text-gray-500 dark:text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 3v4h4V3H5zm6 0v4h4V3h-4zM5 11v4h4v-4H5zm6 0v4h4v-4H5zm3 17h14v-4H3v4z"
                      />
                    </svg>
                    <h3 className="cursor-pointer text-lg text-black hover:text-[#ffb299]">Custom Api's & Integration</h3>
                  </div>

                  {/* 3rd Row */}
                  <div className="flex items-start space-x-2">
                    <svg
                      className="w-5 h-5 text-gray-500 dark:text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 3v4h4V3H5zm6 0v4h4V3h-4zM5 11v4h4v-4H5zm6 0v4h4v-4h-4zM3 17h14v-4H3v4z"
                      />
                    </svg>
                    <h3 className="cursor-pointer text-lg text-black hover:text-[#ffb299]">Security & Performance</h3>
                  </div>

                  <div className="flex items-start space-x-2">
                    <svg
                      className="w-5 h-5 text-gray-500 dark:text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 3v4h4V3H5zm6 0v4h4V3h-4zM5 11v4h4v-4H5zm6 0v4h4v-4H5zm3 17h14v-4H3v4z"
                      />
                    </svg>
                    <h3 className="text-xl cursor-pointer  text-black hover:text-[#ffb299]">Troubleshooting & Maintenance</h3>
                  </div>

                  <div className="flex items-start space-x-2">
                    <svg
                      className="w-5 h-5 text-gray-500 dark:text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 3v4h4V3H5zm6 0v4h4V3h-4zM5 11v4h4v-4H5zm6 0v4h4v-4H5zm3 17h14v-4H3v4z"
                      />
                    </svg>
                    <h3 className="cursor-pointer text-lg text-black hover:text-[#ffb299]">WordPress Conversion</h3>
                  </div>

                </div>

              )}
            </li>
            <li className="cursor-pointer text-lg text-black hover:text-[#ffb299]">OUR TEAM</li>
          </div>
          <li className="cursor-pointer py-2.5 px-8 text-lg text-white bg-black rounded-sm hover:bg-[#ffb299] hover:text-white font-bold transform hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out ml-52">
            Get in Touch
          </li>


        </ul>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white  px-5 ">
          <ul className="space-y-4">
            <li className="cursor-pointer text-lg text-black hover:text-[#ffb299]">HOME</li>
            <li className="cursor-pointer text-lg text-black hover:text-[#ffb299]">HOW IT WORKS</li>
            <li className="cursor-pointer text-lg text-black hover:text-[#ffb299]">SEE OUR WORK</li>
            <li
              className="cursor-pointer text-lg text-black hover:text-[#ffb299] relative"
              onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
            >
              SERVICES
              <span
                className={`absolute left-full  transition-transform duration-300 text-[#ffb299] ${isServicesDropdownOpen ? "rotate-180" : "rotate-0"
                  }`}
              >
                ▼
              </span>
              {/* Mega Menu for Mobile */}
              {isServicesDropdownOpen && (
                <div className="bg-white text-black p-6 grid grid-cols-1 gap-4">
                  {/* 1st Row */}
                  <div>
                    <h3 className="cursor-pointer text-lg text-black hover:text-[#ffb299]">Theme Development</h3>
                    
                  </div>
                  <div>
                    <h3 className="cursor-pointer text-lg text-black hover:text-[#ffb299]">Custom WordPress Website</h3>
                    
                  </div>
                  <div>
                    <h3 className="cursor-pointer text-lg text-black hover:text-[#ffb299]">Security & Performance</h3>
                    
                  </div>

                  {/* 2nd Row */}
                  <div>
                    <h3 className="cursor-pointer text-lg text-black hover:text-[#ffb299]">Plugin Development</h3>
                    
                  </div>
                  <div>
                    <h3 className="cursor-pointer text-lg text-black hover:text-[#ffb299]">WordPress SEO</h3>
                    
                  </div>
                  <div>
                    <h3 className="cursor-pointer text-lg text-black hover:text-[#ffb299]">Troubleshooting</h3>
                    
                  </div>

                  {/* 3rd Row */}
                  <div>
                    <h3 className="cursor-pointer text-lg text-black hover:text-[#ffb299]">E-commerce Development</h3>
                    
                  </div>
                  <div>
                    <h3 className="cursor-pointer text-lg text-black hover:text-[#ffb299]">Custom API Integrations</h3>
                    
                  </div>
                  <div>
                    <h3 className=" cursor-pointer text-lg text-black hover:text-[#ffb299]">WordPress Conversion</h3>
                   
                  </div>
                </div>
              )}
            </li>
            <li className="cursor-pointer text-lg text-black hover:text-[#ffb299]">OUR TEAM</li>
            <li className="cursor-pointer py-2.5 px-7 text-lg text-white bg-black rounded-sm hover:bg-[#ffb299] hover:text-white font-bold transform hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out">
              Get in Touch
            </li>

          </ul>
        </div>
      )}
    </nav>
  );
}
