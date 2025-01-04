export default function Services() {
  return (
    // Main wrapper with background color and padding for the services section
    <div className="bg-[#EDF5F2] pt-10 pb-10">
      
      {/* Section heading */}
      <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl text-gray-800 text-center pb-10">
        We're the Best Leading WordPress Web Design Company
      </h1>

      {/* Grid container for the service boxes */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
        
        {/* Service Box 1 */}
        <div className="bg-black shadow-transparent h-72 flex items-center justify-center p-8 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ease-in-out">
          {/* Content inside the service box */}
          <div className="flex flex-col items-center justify-center text-center text-white">
            <img src="/wordpress-images/Plugin-Development-and-Customize.png" className="w-1/4 mb-5 md:w-1/6 lg:w-1/6" alt="Service Image" />
            <h2 className="text-2xl font-bold mb-3">THEME DEVELOPMENT & CUSTOMIZATION</h2>
            <p className="text-lg md:text-xl px-4">Let our WordPress website expert help your website deliver top-notch functionality</p>
          </div>
        </div>

        {/* Repeat the same structure for each service box with unique content */}
        {/* Service Box 2 */}
        <div className="bg-black shadow-transparent h-72 flex items-center justify-center p-8 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ease-in-out">
          <div className="flex flex-col items-center justify-center text-center text-white">
            <img src="/wordpress-images/Plugin-Development-and-Customize.png" className="w-1/4 mb-5 md:w-1/6 lg:w-1/6" alt="Service Image" />
            <h2 className="text-2xl font-bold mb-3">PLUGIN DEVELOPMENT & CUSTOMIZATION</h2>
            <p className="text-lg md:text-xl px-4">Design and customize themes that fulfill your unique business needs</p>
          </div>
        </div>

        {/* Service Box 3 */}
        <div className="bg-black shadow-transparent h-72 flex items-center justify-center p-8 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ease-in-out">
          <div className="flex flex-col items-center justify-center text-center text-white">
            <img src="/wordpress-images/ecommerce.png" className="w-1/4 mb-5 md:w-1/6 lg:w-1/6" alt="Service Image" />
            <h2 className="text-2xl font-bold mb-3">E-COMMERCE DEVELOPMENT</h2>
            <p className="text-lg md:text-xl px-4">Bring your E-commerce project to life with our top WordPress specialists</p>
          </div>
        </div>

        {/* Service Box 4 */}
        <div className="bg-black shadow-transparent h-72 flex items-center justify-center p-8 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ease-in-out">
          <div className="flex flex-col items-center justify-center text-center text-white">
            <img src="/wordpress-images/Custom-wordpress-website-development.png" className="w-1/4 mb-5 md:w-1/6 lg:w-1/6" alt="Service Image" />
            <h2 className="text-2xl font-bold mb-3">CUSTOM WORDPRESS WEBSITE</h2>
            <p className="text-lg md:text-xl px-4">Our experts offer custom WordPress website design that suits your needs</p>
          </div>
        </div>

        {/* Service Box 5 */}
        <div className="bg-black shadow-transparent h-72 flex items-center justify-center p-8 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ease-in-out">
          <div className="flex flex-col items-center justify-center text-center text-white">
            <img src="/wordpress-images/seo.png" className="w-1/4 mb-5 md:w-1/6 lg:w-1/6" alt="Service Image" />
            <h2 className="text-2xl font-bold mb-3">WORDPRESS WEBSITE SEO</h2>
            <p className="text-lg md:text-xl px-4">Optimize your website for top rankings with our WordPress SEO services</p>
          </div>
        </div>

        {/* Service Box 6 */}
        <div className="bg-black shadow-transparent h-72 flex items-center justify-center p-8 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ease-in-out">
          <div className="flex flex-col items-center justify-center text-center text-white">
            <img src="/wordpress-images/api.png" className="w-1/4 mb-5 md:w-1/6 lg:w-1/6" alt="Service Image" />
            <h2 className="text-2xl font-bold mb-3">CUSTOM API'S & INTEGRATION</h2>
            <p className="text-lg md:text-xl px-4">Customized APIs and easy integration for optimal results – Thanks to our WP web agency</p>
          </div>
        </div>

        {/* Service Box 7 */}
        <div className="bg-black shadow-transparent h-72 flex items-center justify-center p-8 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ease-in-out">
          <div className="flex flex-col items-center justify-center text-center text-white">
            <img src="/wordpress-images/Security-and-Performace.png" className="w-1/4 mb-5 md:w-1/6 lg:w-1/6" alt="Service Image" />
            <h2 className="text-2xl font-bold mb-3">SECURITY & PERFORMANCE</h2>
            <p className="text-lg md:text-xl px-4">Secure and protect your high-performing website from alarming threats</p>
          </div>
        </div>

        {/* Service Box 8 */}
        <div className="bg-black shadow-transparent h-72 flex items-center justify-center p-8 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ease-in-out">
          <div className="flex flex-col items-center justify-center text-center text-white">
            <img src="/wordpress-images/technical-support.png" className="w-1/4 mb-5 md:w-1/6 lg:w-1/6" alt="Service Image" />
            <h2 className="text-2xl font-bold mb-3">TROUBLESHOOTING</h2>
            <p className="text-lg md:text-xl px-4">Let our development experts help you with WordPress Maintenance services!</p>
          </div>
        </div>

      </div>
    </div>
  );
}
