import React from "react";

const Navbar = () => {
     return (
          <div className="min-h-screen bg-gray-600 relative">
               <header className="absolute top-0 left-0 right-0 z-10 px-6 py-4">
                    <div className="flex justify-between items-center max-w-7xl mx-auto">
                         <div className="flex items-center space-x-2">
                              <div className="w-8 h-8 bg-cyan-400 rounded-full flex items-center justify-center">
                                   <span className="text-white font-bold text-lg">S</span>
                              </div>
                              <div className="text-white">
                                   <div className="font-bold text-lg leading-tight">SUPREME</div>
                                   <div className="text-cyan-400 text-sm font-medium">CIRCLE</div>
                              </div>
                         </div>

                         <div className="flex items-center space-x-4">
                              <button className="bg-cyan-400 hover:bg-cyan-500 text-white px-6 py-2 rounded-full font-medium transition-colors duration-200">
                                   Contact Us
                              </button>
                              <a
                                   href="#"
                                   className="text-white hover:text-cyan-400 transition-colors duration-200"
                                   aria-label="LinkedIn"
                              >
                                   {/* <Linkedin size={20} /> */}
                              </a>
                              <a
                                   href="#"
                                   className="text-white hover:text-cyan-400 transition-colors duration-200 flex items-center space-x-1"
                                   aria-label="Info"
                              >
                                   {/* <MessageCircle size={20} /> */}
                                   <span className="text-sm">info</span>
                              </a>
                         </div>
                    </div>
               </header>

               <main className="flex items-center justify-center min-h-screen px-6">
                    <div className="text-center text-white max-w-4xl mx-auto">
                         <div className="text-gray-300 text-lg mb-8 font-light tracking-wide">Performance in motion</div>

                         <h1 className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-4">
                              Soft Trims and NVH Solutions
                         </h1>

                         <p className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-300 leading-relaxed">
                              for seamless rides
                         </p>
                    </div>
               </main>

               <div className="absolute inset-0 bg-black bg-opacity-20 pointer-events-none"></div>
          </div>
     );
};

export default Navbar;
