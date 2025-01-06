export default function BOOKUS() {
    return (
        // Main container for the "Book Us" section
        <div className="bg-[#ffb299] flex flex-col items-center justify-center w-full pt-20 pb-20  space-y-10 p-5 md:px-28">
            {/* Heading for the section */}
            <h1 className="text-black !important font-bold pb-10 text-5xl">
                Ready to hire your WordPress developer?
            </h1>

            {/* Button to book a consultant */}
            <button
                type="button"
                className="py-2.5 px-7 mb-5 text-lg text-white bg-black rounded-sm hover:bg-white hover:text-black font-bold transform hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out"
            >
                Book A CONSULTANT (FREE)
            </button>

            {/* Section for additional details with bullet points */}
            <div className="flex items-center space-x-4 text-lg text-gray-950">
                {/* Free estimate text */}
                <span>Free estimate</span>
                {/* Divider between text */}
                <span className="w-1 h-1 bg-black rounded-full inline-block"></span>
                {/* 24/7 availability text */}
                <span>24/7 hours available</span>
                {/* Divider between text */}
                <span className="w-1 h-1 bg-black rounded-full inline-block"></span>
                {/* Risk-free guarantee text */}
                <span>100% risk-free</span>
            </div>
        </div>
    );
}
