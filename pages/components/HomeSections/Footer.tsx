import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-50 py-20">
      <div className="container mx-auto px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Logo section centered at top */}
          <div className="flex justify-center mb-16">
            <div className="flex items-center">
              {/* Circular logo with S */}
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <div>
                <div className="text-blue-500 font-bold text-2xl leading-none">SUPREME</div>
                <div className="text-blue-500 font-bold text-lg leading-none">GROUP</div>
              </div>
            </div>
          </div>

          {/* Four columns layout */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
            
            {/* Applications column */}
            <div>
              <h3 className="font-semibold text-black mb-8 text-base">
                APPLICATIONS
              </h3>
              <ul className="space-y-5">
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors duration-200 text-sm">
                    Apparel
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors duration-200 text-sm">
                    Automotive
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors duration-200 text-sm">
                    Filtration
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors duration-200 text-sm">
                    Customised Solutions
                  </a>
                </li>
              </ul>
            </div>

            {/* Company column */}
            <div>
              <h3 className="font-semibold text-black mb-8 text-base">
                COMPANY
              </h3>
              <ul className="space-y-5">
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors duration-200 text-sm">
                    Innovation
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors duration-200 text-sm">
                    Global Competency
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors duration-200 text-sm">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors duration-200 text-sm">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* More column */}
            <div>
              <h3 className="font-semibold text-black mb-8 text-base">
                MORE
              </h3>
              <ul className="space-y-5">
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors duration-200 text-sm">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors duration-200 text-sm">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors duration-200 text-sm">
                    Terms and Conditions
                  </a>
                </li>
              </ul>
            </div>

            {/* Follow Us column */}
            <div>
              <h3 className="font-semibold text-black mb-8 text-base">
                FOLLOW US
              </h3>
              <ul className="space-y-5">
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors duration-200 text-sm">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors duration-200 text-sm">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors duration-200 text-sm">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors duration-200 text-sm">
                    Medium
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom section with copyright and address */}
          <div className="flex flex-col md:flex-row justify-between items-start text-sm text-gray-500 pt-4">
            <div className="mb-4 md:mb-0">
              ©2023. All Rights Reserved.
            </div>
            <div>
              Supreme house, 110, 16th Road, Chembur, Mumbai – 400071
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}