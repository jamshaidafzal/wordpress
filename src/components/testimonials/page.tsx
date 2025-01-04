export default function Testimonials() {
    return (
        <div className="pt-20">
            {/* Section Title and Introduction */}
            <div className="items-center justify-center text-center pb-10">
                <h1 className="text-5xl text-gray-800 text-center">Why We’re Best in WordPress </h1>
                <h1 className="text-5xl text-gray-800 text-center mb-5">Website Development</h1>
                <p className="text-lg">We don’t just say it, we can prove it – Our satisfied customers were excited</p>
                <p className="text-lg">to share their thoughts about our professional WordPress development services.</p>
            </div>

            {/* Testimonials Grid */}
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-2">
                
                {/* Testimonial 1 */}
                <div className="bg-[#EDF5F2] border-l-8 border-[#ffb299] shadow-transparent h-76 flex items-center justify-center p-8 rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ease-in-out">
                    <div>
                        {/* Testimonial Text */}
                        <p className="text-lg pb-8">
                            I was Searching a long term WordPress expert on the internet and found these experts. I can safely say the WordPress Expert Team is one of the best people I have ever worked with on a project. Apart from WordPress Expert Team, professionalism, talent, and skill, the one thing I liked most is I never felt “Rushed” by them. If they can share my work, then you can see what I’m talking about for yourself. As you will see, I had pictures, text, videos, and a booking engine added to my website. I’m very happy with the final product. As a matter of fact...
                        </p>
                        {/* Testimonial Author */}
                        <h2 className="text-2xl font-bold">Jason</h2>
                    </div>
                </div>

                {/* Testimonial 2 */}
                <div className="bg-[#EDF5F2] border-l-8 border-[#ffb299] shadow-transparent h-76 flex items-center justify-center p-8 rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ease-in-out">
                    <div>
                        {/* Testimonial Text */}
                        <p className="text-lg pb-8">
                            This service was excellent. The WordPress Expert team went above and beyond to get the final result that I wanted. I was very particular about what I wanted and they ensured they delivered the best result for me. I really appreciate the level of professionalism and dedication they demonstrated throughout the project. Their attention to detail and willingness to accommodate my specific requests made the entire experience seamless and enjoyable. I would highly recommend their services to anyone in need of high-quality WordPress development.
                        </p>
                        {/* Testimonial Author */}
                        <h2 className="text-2xl font-bold">Stacey</h2>
                    </div>
                </div>

                {/* Testimonial 3 */}
                <div className="bg-[#EDF5F2] border-l-8 border-[#ffb299] shadow-transparent h-76 flex items-center justify-center p-8 rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ease-in-out">
                    <div>
                        {/* Testimonial Text */}
                        <p className="text-lg pb-8">
                            Very quick response time polite and professional. Was very easy to communicate. I am happy with my service, she exceeded my expectations. Thank you so much…
                        </p>
                        {/* Testimonial Author */}
                        <h2 className="text-2xl font-bold">Lisajohnson220</h2>
                    </div>
                </div>

                {/* Testimonial 4 */}
                <div className="bg-[#EDF5F2] border-l-8 border-[#ffb299] shadow-transparent h-76 flex items-center justify-center p-8 rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ease-in-out">
                    <div>
                        {/* Testimonial Text */}
                        <p className="text-lg pb-8">
                            First time hiring WordPress Expert, and I found they are very professional, and was willing to answer my questions. They provided me a reasonable estimate and took care of my request immediately. I will be back!
                        </p>
                        {/* Testimonial Author */}
                        <h2 className="text-2xl font-bold">Armadaone</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}
