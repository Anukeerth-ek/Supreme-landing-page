import React, { useState } from "react";
import Head from "next/head";
// import { Pause, Play } from 'lucide-react';

const HomePage: React.FC = () => {
     const [activeSection, setActiveSection] = useState("Complete Body");
     const [isPaused, setIsPaused] = useState(false);

     const sections = [
          { id: "Complete Body", label: "Complete Body", icon: "🚗" },
          { id: "Front", label: "Front", icon: "🔵" },
          { id: "Cabin", label: "Cabin", icon: "⚫" },
          { id: "Trunk", label: "Trunk", icon: "⚫" },
          { id: "Exterior", label: "Exterior", icon: "🔧" },
     ];

     const handleSectionClick = (sectionId: string) => {
          setActiveSection(sectionId);

          console.log("Section changed to:", sectionId);
     };

     const handlePlayPause = () => {
          setIsPaused(!isPaused);

          console.log("Video", isPaused ? "played" : "paused");
     };

     const handleNextSlide = () => {
          console.log("Navigate to next slide");
     };

     return (
          <>
      <Head>
        <title>Supreme Circle - 360-degree Nonwoven Solutions</title>
        <meta name="description" content="Evolving the drive with 360-degree nonwoven solutions for passenger vehicles" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-black relative overflow-hidden">
        {/* Main Content Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
          
          {/* Left Side - Content */}
          <div className="flex flex-col justify-center px-8 lg:px-16 py-12">
            {/* Main Title */}
            <div className="mb-16">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight text-white mb-8">
                Evolving the drive with{' '}
                <span className="font-medium">360-degree</span>
                <br />
                nonwoven solutions
              </h1>
            </div>

            {/* Passenger Vehicles Section */}
            <div className="mb-8">
              <div className="border-l-2 border-white pl-6">
                <h2 className="text-2xl lg:text-3xl font-light text-white mb-4">
                  Passenger vehicles
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Revving up Nonwoven innovation from
                  <br />
                  interior to exterior.
                </p>
              </div>
            </div>

            {/* Commercial Vehicles (Partially visible) */}
            <div className="opacity-30">
              <div className="border-l-2 border-gray-600 pl-6">
                <h2 className="text-2xl lg:text-3xl font-light text-gray-500 mb-4">
                  Commercial vehicles
                </h2>
              </div>
            </div>
          </div>

          {/* Right Side - Video/3D Visualization */}
          <div className="flex items-center justify-center p-8">
            <div className="relative w-full max-w-lg">
              {/* Replace this div with your video component */}
              <div className="aspect-square bg-transparent flex items-center justify-center">
                {/* YOUR VIDEO COMPONENT GOES HERE */}
                <div className="text-white text-center p-8 border border-gray-600 rounded-lg bg-gray-900/20">
                  <p className="text-lg mb-4">Replace this div with your video component</p>
                  <p className="text-sm text-gray-400">
                    The video should show the 3D car visualization
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Navigation Controls */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-8">
          {/* Section Navigation */}
          <div className="flex items-center space-x-6">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => handleSectionClick(section.id)}
                className={`text-center transition-all duration-200 ${
                  activeSection === section.id
                    ? 'text-white'
                    : 'text-gray-500 hover:text-gray-300'
                }`}
              >
                <div className="text-2xl mb-1">{section.icon}</div>
                <div className="text-xs font-medium">{section.label}</div>
              </button>
            ))}
          </div>

          {/* Play/Pause Button */}
          <button
            onClick={handlePlayPause}
            className="ml-8 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors duration-200"
          >
            {/* {isPaused ? (
              <Play size={20} className="text-white ml-1" />
            ) : (
              <Pause size={20} className="text-white" />
            )} */}
          </button>
        </div>

        {/* Click anywhere text - Centered */}
        <div 
          className="absolute bottom-16 left-1/2 transform -translate-x-1/2 text-center cursor-pointer"
          onClick={handleNextSlide}
        >
          <p className="text-gray-400 text-sm mb-1">
            Click anywhere for next slide
          </p>
          <p className="text-gray-500 text-xs">
            (Only written for prototype)
          </p>
        </div>

        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div 
            className="h-full w-full"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }}
          />
        </div>
      </main>

       <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background geometric pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 border border-gray-600 rotate-45"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 border border-gray-600 rotate-12"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 border border-gray-500 rotate-45"></div>
      </div>

      {/* Main content container */}
      <div className="relative z-10 flex items-center justify-between h-screen px-16">
        
        {/* Left side content */}
        <div className="flex-1 max-w-xl">
          {/* Main heading */}
          <div className="mb-16">
            <h1 className="text-5xl font-light leading-tight mb-4">
              Evolving the drive with{' '}
              <span className="font-bold text-white">360-degree</span>
              <br />
              nonwoven solutions
            </h1>
          </div>

          {/* Commercial vehicles section */}
          <div className="border-l-2 border-white pl-8">
            <h2 className="text-2xl font-semibold mb-4">Commercial vehicles</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Advancing Nonwoven engineering for<br />
              heavy-duty vehicles.
            </p>
          </div>
        </div>

        {/* Right side - Truck image */}
        <div className="flex-1 flex justify-center items-center relative">
          <div className="relative">
            {/* Semi-transparent truck illustration */}
            <div className="w-96 h-64 relative">
              {/* Truck cab */}
              <div className="absolute top-8 left-0 w-32 h-24 bg-gradient-to-r from-gray-400 to-gray-500 opacity-70 rounded-sm">
                {/* Cab details */}
                <div className="absolute top-2 left-2 w-6 h-4 bg-gray-600 rounded-sm"></div>
                <div className="absolute top-2 right-2 w-12 h-4 bg-gray-600 rounded-sm"></div>
                <div className="absolute bottom-2 left-2 w-28 h-2 bg-gray-600 rounded-sm"></div>
              </div>
              
              {/* Truck chassis */}
              <div className="absolute top-20 left-28 w-48 h-16 bg-gradient-to-r from-gray-400 to-gray-500 opacity-70 rounded-sm">
                {/* Chassis details */}
                <div className="absolute top-2 left-4 w-40 h-3 bg-gray-600 rounded-sm"></div>
                <div className="absolute bottom-2 left-4 w-40 h-3 bg-gray-600 rounded-sm"></div>
              </div>

              {/* Wheels */}
              <div className="absolute bottom-4 left-8 w-8 h-8 bg-gray-500 rounded-full opacity-70"></div>
              <div className="absolute bottom-4 left-20 w-8 h-8 bg-gray-500 rounded-full opacity-70"></div>
              <div className="absolute bottom-4 left-56 w-8 h-8 bg-gray-500 rounded-full opacity-70"></div>
              <div className="absolute bottom-4 right-8 w-8 h-8 bg-gray-500 rounded-full opacity-70"></div>
              
              {/* Additional structural elements */}
              <div className="absolute top-12 left-32 w-2 h-20 bg-gray-500 opacity-60"></div>
              <div className="absolute top-12 left-44 w-2 h-20 bg-gray-500 opacity-60"></div>
              <div className="absolute top-12 right-12 w-2 h-20 bg-gray-500 opacity-60"></div>
            </div>

            {/* Navigation hint */}
            <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 text-center">
              <p className="text-gray-400 text-sm mb-2">Click anywhere for next slide</p>
              <p className="text-gray-500 text-xs">(Only written for prototype)</p>
            </div>
          </div>
        </div>
      </div>

      {/* Play/Pause button */}
      <button
        onClick={() => setIsPaused(!isPaused)}
        className="absolute bottom-8 right-8 w-12 h-12 border-2 border-white rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-colors duration-300"
      >
        {/* {isPaused ? <Play size={20} /> : <Pause size={20} />} */}
      </button>

      {/* Subtle animations */}
      <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-white rounded-full animate-pulse opacity-50"></div>
      <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-gray-400 rounded-full animate-ping opacity-30"></div>
    </div>
          </>
     );
};

export default HomePage;
