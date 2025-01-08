"use client";

import { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState('HOME');
  const menuItems = ['HOME', 'HOW IT WORKS', 'SEE OUR WORK', 'SERVICES', 'OUR TEAM'];

  const handleMenuClick = (menu: string) => {
    setActiveMenu(menu);
    if (menu !== 'SERVICES') {
      setIsServicesDropdownOpen(false); // Close dropdown if clicking on any other menu
    }
  };

  const handleServicesMouseEnter = () => {
    setIsServicesDropdownOpen(true);
  };

  const handleServicesMouseLeave = () => {
    // We don't want to close the dropdown immediately when leaving the services tab, we only close on leaving both.
  };

  const handleMegaMenuMouseEnter = () => {
    setIsServicesDropdownOpen(true);
  };

  const handleMegaMenuMouseLeave = () => {
    setTimeout(() => {
      setIsServicesDropdownOpen(false);
    }, 200); // Delay to prevent abrupt closing
  };

  return (
    <nav className="bg-white fixed w-full z-50   lg:px-2.5 lg:h-28" aria-label="Main Navigation">
      <div className="  lg:flex items-center   lg:mx-80 lg:pt-2.5 lg:pb-2.5 lg:h-28 lg:gap-x-6">
        {/* Logo */}
        <div className="lg:p-2.5">
          <img
            src="/wordpress-images/black-logo.png"
            alt="Logo"
            className="w-[205px] h-[72px]"
          />
        </div>

        {/* Hamburger Menu Icon */}
        <button
          aria-label="Toggle Mobile Menu"
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
        <div>
<ul className="hidden lg:flex items-center 2xl:p-2.5 ">
  <div className="flex items-center">
    {menuItems.map((item, index) => (
      <li
        key={item}
        className={`cursor-pointer whitespace-nowrap 2xl:px-4 2xl:pt-2 2xl:pb-2 text-lg relative 
          ${activeMenu === item ? "text-[#ffb299]" : "text-black hover:text-[#ffb299]"} 
          ${index === 0 ? "2xl:ml-8" : ""} ${index === menuItems.length - 1 ? "2xl:mr-8" : ""}`}
        onClick={() => handleMenuClick(item)}
        onMouseEnter={() => item === 'SERVICES' && handleServicesMouseEnter()} // Open dropdown on hover
        onMouseLeave={() => item === 'SERVICES' && handleServicesMouseLeave()} // Don't close dropdown on leave yet
      >
        {item}
        {item === 'SERVICES' && (
          <span
            className={`ml-1 text-sm transition-transform duration-300 ${isServicesDropdownOpen ? "rotate-180" : "rotate-0"}`}
          >
            ▼
          </span>
        )}
      </li>
    ))}
  </div>
</ul>


        {/* Mega Menu (This will be outside the loop) */}
        {(activeMenu === 'SERVICES' || isServicesDropdownOpen) && (
          <div
            className="absolute items-start left-1/2 transform -translate-x-1/2 top-full bg-white text-black w-max shadow-lg p-12 grid grid-cols-3 gap-16 z-50"
            onMouseEnter={handleMegaMenuMouseEnter}  // Ensure dropdown stays open when inside the menu
            onMouseLeave={handleMegaMenuMouseLeave}  // Close dropdown when mouse leaves
          >
            {/* 1st Row Services */}
            <div className="flex items-center space-x-4">
              <img
                src="/iconsss/web-setting.png"
                alt="Logo"
                className="w-8 h-8" // Make image 10x10 to match the text height
              />
              <h3 className="cursor-pointer text-xl text-black hover:text-[#ffb299]">
                Theme Development
              </h3>
            </div>

            <div className="flex items-center space-x-4">
              <img
                src="/iconsss/web-setting.png"
                alt="Logo"
                className="w-8 h-8" // Make image 10x10 to match the text height
              />
              <h3 className="cursor-pointer text-xl text-black hover:text-[#ffb299]">Plugin Development</h3>
            </div>

            <div className="flex items-center space-x-4">
              <img
                src="/iconsss/ecommerce.png"
                alt="Logo"
                className="w-8 h-8" // Make image 10x10 to match the text height
              />
              <h3 className="cursor-pointer text-xl text-black hover:text-[#ffb299]">E-commerce Development</h3>
            </div>
            {/* Additional rows can be added here */}
            {/* 2nd Row */}
            <div className="flex items-center space-x-4">
              <img
                src="/iconsss/web-development.png"
                alt="Logo"
                className="w-8 h-8" // Make image 10x10 to match the text height
              />

              <h3 className="cursor-pointer text-lg text-black hover:text-[#ffb299]">Custom Wordpress Website</h3>
            </div>

            <div className="flex items-center space-x-4">
              <img
                src="/iconsss/seo.png"
                alt="Logo"
                className="w-8 h-8" // Make image 10x10 to match the text height
              />

              <h3 className="cursor-pointer text-lg text-black hover:text-[#ffb299]">Wordpress Website Seo</h3>
            </div>

            <div className="flex items-center space-x-4">
              <img
                src="/iconsss/integration.png"
                alt="Logo"
                className="w-8 h-8" // Make image 10x10 to match the text height
              />

              <h3 className="cursor-pointer text-lg text-black hover:text-[#ffb299]">Custom Api's & Integration</h3>
            </div>


            <div className="flex items-center space-x-4">
              <img
                src="/iconsss/padlock.png"
                alt="Logo"
                className="w-8 h-8" // Make image 10x10 to match the text height
              />

              <h3 className="cursor-pointer text-lg text-black hover:text-[#ffb299]">Security & Performance</h3>
            </div>

            <div className="flex items-center space-x-4">
              <img
                src="/iconsss/trouble.png"
                alt="Logo"
                className="w-8 h-8" // Make image 10x10 to match the text height
              />


              <h3 className="text-xl cursor-pointer  text-black hover:text-[#ffb299]">Troubleshooting & Maintenance</h3>
            </div>
            <div className="flex items-center space-x-4">
              <img
                src="/iconsss/rpa.png"
                alt="Logo"
                className="w-8 h-8" // Make image 10x10 to match the text height
              />

              <h3 className="cursor-pointer text-lg text-black hover:text-[#ffb299]">WordPress Conversion</h3>
            </div>

          </div>
        )}
</div>
        {/* Separate 'Get in Touch' Button */}
        <div className=" hidden lg:ml-auto lg:p-2.5 lg:block">
        <button
          type="button"
          className="py-2.5 px-8 text-lg text-white bg-black rounded-sm hover:bg-[#ffb299] hover:text-white font-bold transform hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out"
        >
          Get in Touch
        </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white  px-5 ">
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
};

export default Navbar;
