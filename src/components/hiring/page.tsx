export default function Hiring() {
    return (
        <div className="pt-15 pb-15 w-full  space-y-10 p-5 md:px-28">
            {/* Section Title */}
            <h1 className="font-bold text-4xl text-gray-800 text-center pb-10">
                Hire WordPress Website Expert in 5 Minutes
            </h1>

            {/* Card Grid */}
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                {/* Call Us Card */}
                <div className="bg-black border-t-8 border-[#ffb299] shadow-transparent h-56 flex items-center justify-center p-8 rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ease-in-out">
                    <div className="text-white">
                        <h2 className="text-3xl pb-5">Call Us</h2>
                        <p className="text-lg">
                            You’ll tell what you need. We can fix anything from small fixes to full website builds.
                        </p>
                    </div>
                </div>

                {/* Connect Card */}
                <div className="bg-black border-t-8 border-[#ffb299] shadow-transparent h-56 flex items-center justify-center p-8 rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ease-in-out">
                    <div className="text-white">
                        <h2 className="text-3xl pb-5">Connect</h2>
                        <p className="text-lg">
                            We are ready to connect with you. Right away for your project to chat with and get your scope 100% defined.
                        </p>
                    </div>
                </div>

                {/* Collaborate Card */}
                <div className="bg-black border-t-8 border-[#ffb299] shadow-transparent h-56 flex items-center justify-center p-8 rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ease-in-out">
                    <div className="text-white">
                        <h2 className="text-3xl pb-5">Collaborate</h2>
                        <p className="text-lg">
                            You’ll get an estimate, hire us (WordPress developer), and start collaborating until the end of the project.
                        </p>
                    </div>
                </div>
            </div>

            {/* Footer Section */}
            <div className="flex flex-col items-center justify-center w-full mt-5 sm:mt-3 space-y-4 sm:space-y-3">
                {/* Horizontal Line */}
                <hr className="w-2/3 h-1 bg-black border-0 rounded sm:w-1/2 md:w-1/3 lg:w-1/4 mb-5 mt-5" />

                {/* Button to Start a Project */}
                <button
                    type="button"
                    className="py-2.5 px-7 mb-5 text-lg text-white bg-black rounded-sm hover:bg-[#ffb299] hover:text-black font-bold transform hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out"
                >
                    START A PROJECT
                </button>
            </div>
        </div>
    );
}
