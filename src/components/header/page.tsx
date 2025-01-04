'use client';
import React, { JSX, useState } from "react";
import Link from "next/link";

const Navbar = (): JSX.Element => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isClick, setClick] = useState(false);

  const toggleNavbar = (): void => {
    setClick(!isClick);
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 z-50 fixed top-0 left-0 w-full">
      {/* Navbar Container */}
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto p-4">

        {/* Logo Section */}
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="/wordpress-images/black-logo.png" className="h-20" alt="WordPress Expert Logo" />
        </a>

        {/* Menu Toggle Button (Mobile View) */}
        <button
          onClick={toggleNavbar}
          className="md:hidden inline-flex items-center p-2 text-sm text-gray-500 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
          aria-controls="navbar"
          aria-expanded={isClick ? 'true' : 'false'}
        >
          <span className="sr-only">Open menu</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Navbar Links (Visible for Desktop, Toggle for Mobile) */}
        <div
          id="mega-menu-icons"
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isClick ? 'block' : 'hidden'}`}>

          {/* Navbar Links */}
          <ul className="flex flex-col mt-4 font-medium md:flex-row md:mt-0 md:space-x-8 rtl:space-x-reverse">
            <li>
              <a href="/" className="block py-2 px-3 text-[#ffb299] text-lg border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-black md:p-0 dark:text-white md:dark:hover:text-[#ffb299] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">HOME</a>
            </li>

            <li>
              <Link href="/how-it-works" className="block py-2 px-3 text-black text-lg border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#ffb299] md:p-0 dark:text-white md:dark:hover:text-[#ffb299] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">HOW IT WORKS</Link>
            </li>

            <li>
              <Link href="/see-our-work" className="block py-2 px-3 text-black text-lg border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#ffb299] md:p-0 dark:text-white md:dark:hover:text-[#ffb299] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">SEE OUR WORK</Link>
            </li>

            {/* Services Dropdown */}
            <li className="relative">
              <button
                id="mega-menu-icons-dropdown-button"
                onClick={() => setDropdownOpen(!isDropdownOpen)}
                className="flex items-center justify-between w-150 py-2 px-3 font-medium text-gray-900 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#ffb299] md:p-0 dark:text-white md:dark:hover:text-[#ffb299] dark:hover:bg-gray-700 dark:hover:text-[#ffb299] md:dark:hover:bg-transparent text-lg dark:border-gray-700"
              >
                SERVICES
                <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                </svg>
              </button>
              {isDropdownOpen && (
                <div id="mega-menu-icons-dropdown" className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full max-w-full bg-white border border-gray-100 rounded-lg shadow-md dark:border-gray-700 dark:bg-gray-700">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
                  
                  <ul className="space-y-4">
                    <li className="flex items-center space-x-2">
                      <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4h4V3H5zm6 0v4h4V3h-4zM5 11v4h4v-4H5zm6 0v4h4v-4h-4zM3 17h14v-4H3v4z" />
                      </svg>
                      <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group">Theme Development</a>
                    </li>
                    <li className="flex items-center space-x-2">
                      <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4h4V3H5zm6 0v4h4V3h-4zM5 11v4h4v-4H5zm6 0v4h4v-4h-4zM3 17h14v-4H3v4z" />
                      </svg>
                      <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group">Custom Wordpress Website</a>
                    </li>
                    <li className="flex items-center space-x-2">
                      <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4h4V3H5zm6 0v4h4V3h-4zM5 11v4h4v-4H5zm6 0v4h4v-4h-4zM3 17h14v-4H3v4z" />
                      </svg>
                      <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group">Security & Performance</a>
                    </li>
                  </ul>
              
                  
                  <ul className="space-y-4">
                    <li className="flex items-center space-x-2">
                      <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4h4V3H5zm6 0v4h4V3h-4zM5 11v4h4v-4H5zm6 0v4h4v-4h-4zM3 17h14v-4H3v4z" />
                      </svg>
                      <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group">Plugin Development</a>
                    </li>
                    <li className="flex items-center space-x-2">
                      <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4h4V3H5zm6 0v4h4V3h-4zM5 11v4h4v-4H5zm6 0v4h4v-4h-4zM3 17h14v-4H3v4z" />
                      </svg>
                      <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group">Wordpress Website Seo</a>
                    </li>
                    <li className="flex items-center space-x-2">
                      <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4h4V3H5zm6 0v4h4V3h-4zM5 11v4h4v-4H5zm6 0v4h4v-4h-4zM3 17h14v-4H3v4z" />
                      </svg>
                      <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group">Troubleshooting & Maintenance</a>
                    </li>
                  </ul>
              
                  
                  <ul className="space-y-4">
                    <li className="flex items-center space-x-2">
                      <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4h4V3H5zm6 0v4h4V3h-4zM5 11v4h4v-4H5zm6 0v4h4v-4h-4zM3 17h14v-4H3v4z" />
                      </svg>
                      <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group">E-commerce Development</a>
                    </li>
                    <li className="flex items-center space-x-2">
                      <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4h4V3H5zm6 0v4h4V3h-4zM5 11v4h4v-4H5zm6 0v4h4v-4h-4zM3 17h14v-4H3v4z" />
                      </svg>
                      <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group">Custom Api's & Integration</a>
                    </li>
                    <li className="flex items-center space-x-2">
                      <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4h4V3H5zm6 0v4h4V3h-4zM5 11v4h4v-4H5zm6 0v4h4v-4h-4zM3 17h14v-4H3v4z" />
                      </svg>
                      <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group">WordPress Conversion</a>
                    </li>
                  </ul>
                </div>
              </div>
              
              )}
            </li>

            <li>
             <Link href='/team'className="block py-2 px-3 text-black text-lg border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#ffb299] md:p-0 dark:text-white md:dark:hover:text-[#ffb299] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">OUR TEAM</Link>
            </li>
            <li>
              <Link
                href="/get-in-touch"
                className="py-2.5 px-7 mb-5 text-lg text-white bg-black rounded-sm hover:bg-[#ffb299] hover:text-white font-bold transform hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out"
                aria-current="page"
              >
                Get in Touch
              </Link>
            </li>


          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
