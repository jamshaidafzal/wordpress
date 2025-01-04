"use client";

import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const FAQS = ({ title, content }: { title: string; content: string }) => {
  // State to toggle the visibility of the FAQ answer
  const [isFaq, setIsFaq] = useState(false);

  return (
    <div className="bg-white border-l-8 border-[#ffb299] rounded-md shadow-md">
      {/* FAQ Question Section */}
      <div
        className="flex justify-between font-bold text-xl p-5 cursor-pointer"
        onClick={() => setIsFaq(!isFaq)}
      >
        {/* FAQ Title */}
        {title}
        {/* Arrow Icon with rotation animation */}
        <button>
          <IoIosArrowDown
            className={`transform transition-transform duration-500 ${
              isFaq ? "rotate-180" : "rotate-0"
            } my-auto`}
          />
        </button>
      </div>
      
      {/* FAQ Answer Section with smooth transition */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isFaq ? "max-h-[500px] p-5" : "max-h-0"
        }`}
      >
        <p className="text-gray-700">{content}</p>
      </div>
    </div>
  );
};

export default FAQS;
