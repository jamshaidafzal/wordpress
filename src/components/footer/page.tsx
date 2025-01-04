import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';



export default function Footer() {

  return (
    <div className="bg-[#151D22] h-auto pt-10">
    {/* Main Grid Container for Footer */}
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
      {/* First Column: Logo and Description */}
      <div className="flex flex-col items-start">
        <img
          src="/wordpress-images/Company-Logo-in-white-in-png-2-1024x232.png"
          alt="Company Logo"
          className="w-72 h-auto object-contain mb-4"
        />
        <p className="text-left text-white text-lg">
          With unbeatable WordPress development quality services and business
          solutions, WordPress Expert is a leading WordPress website development
          company.
        </p>
      </div>
  
      {/* Second Column: Company Links */}
      <div className="flex flex-col items-start">
        <h2 className="text-white font-medium text-3xl mb-4">Company</h2>
        <a href="#" className="text-white mt-2 text-lg hover:text-[#ffb299]">
          See our work
        </a>
        <a href="#" className="text-white mt-2 text-lg hover:text-[#ffb299]">
          Services
        </a>
        <a href="#" className="text-white mt-2 text-lg hover:text-[#ffb299]">
          Privacy Policy
        </a>
        <a href="#" className="text-white mt-2 text-lg hover:text-[#ffb299]">
          Refund Policy
        </a>
      </div>
  
      {/* Third Column: Services Links */}
      <div className="flex flex-col items-start">
        <h2 className="text-white font-medium text-3xl mb-4">Services</h2>
        <a href="#" className="text-white mt-2 text-lg hover:text-[#ffb299]">
          WordPress Development
        </a>
        <a href="#" className="text-white mt-2 text-lg hover:text-[#ffb299]">
          WooCommerce Development
        </a>
        <a href="#" className="text-white mt-2 text-lg hover:text-[#ffb299]">
          WordPress Troubleshooting
        </a>
        <a href="#" className="text-white mt-2 text-lg hover:text-[#ffb299]">
          Plugin Development
        </a>
        <a href="#" className="text-white mt-2 text-lg hover:text-[#ffb299]">
          Theme Development
        </a>
      </div>
  
      {/* Fourth Column: Get In Touch Section */}
      <div className="flex flex-col items-start">
        <h2 className="text-white font-medium text-3xl mb-4">Get In Touch</h2>
        <p className="text-white text-lg mb-4">Contact Us</p>
        <form className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Signup for Newsletters"
            className="p-2 text-black w-60 rounded-sm"
          />
          <button
            type="button"
            className="py-2 px-4 text-lg text-black bg-[#ffb299] rounded-sm hover:bg-white hover:text-black font-bold transform hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  
    {/* Footer Bottom Section */}
    <div className="flex flex-col items-center justify-center bg-[#151D22] py-5">
      {/* Social Media Links */}
      <div className="flex space-x-4 mb-4">
        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <FontAwesomeIcon
            icon={faFacebook}
            className="w-5 h-5 text-white hover:text-[#ffb299]"
          />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
          <FontAwesomeIcon
            icon={faInstagram}
            className="w-5 h-5 text-white hover:text-[#ffb299]"
          />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
          <FontAwesomeIcon
            icon={faLinkedin}
            className="w-5 h-5 text-white hover:text-[#ffb299]"
          />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
          <FontAwesomeIcon
            icon={faXTwitter}
            className="w-5 h-5 text-white hover:text-[#ffb299]"
          />
        </a>
      </div>
      {/* Footer Copyright Text */}
      <p className="text-white text-center text-lg">
        © 2025 WordpreesExpert. All rights reserved.
      </p>
    </div>
  </div>
    );
}