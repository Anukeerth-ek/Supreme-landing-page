"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Play, Pause } from "lucide-react";
import Head from "next/head";

const sections = [
     {
          id: 0,
          label: "Passenger Vehicles",
          icon: "🚗",
          title: "Passenger vehicles",
          description: "Revving up Nonwoven innovation from interior to exterior.",
     },
     {
          id: 1,
          label: "Commercial Vehicles",
          icon: "🚛",
          title: "Commercial vehicles",
          description: "Advancing Nonwoven engineering for heavy-duty vehicles.",
     },
];

export default function AnimatedHero() {
     const [isPaused, setIsPaused] = useState(true);
     const [activeSection, setActiveSection] = useState(0);
     const sectionRefs = useRef<HTMLElement[]>([]);

     useEffect(() => {
          const observer = new IntersectionObserver(
               (entries) => {
                    entries.forEach((entry) => {
                         if (entry.isIntersecting) {
                              const index = Number(entry.target.getAttribute("data-index"));
                              setActiveSection(index);
                         }
                    });
               },
               {
                    threshold: 0.6,
               }
          );

          sectionRefs.current.forEach((section) => {
               if (section) observer.observe(section);
          });

          return () => observer.disconnect();
     }, []);

     const handlePlayPause = () => setIsPaused((prev) => !prev);

     return (
          <>
               <Head>
                    <title>Supreme Circle - 360-degree Nonwoven Solutions</title>
                    <meta
                         name="description"
                         content="Evolving the drive with 360-degree nonwoven solutions for passenger vehicles"
                    />
               </Head>

               <main className="min-h-screen bg-black text-white relative overflow-hidden">
                    {/* Background Patterns */}
                    <motion.div
                         animate={{ rotate: 45 }}
                         transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
                         className="absolute top-20 left-20 w-96 h-96 border border-gray-600 opacity-10 pointer-events-none"
                    />
                    <motion.div
                         animate={{ rotate: -30 }}
                         transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
                         className="absolute bottom-20 right-20 w-64 h-64 border border-gray-600 opacity-10 pointer-events-none"
                    />
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight mb-8 text-center">
                         Evolving the drive with <span className="font-medium">360-degree</span>
                         <br />
                         nonwoven solutions
                    </h1>
                    {/* Grid Layout */}
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                         {/* Left Side */}
                         <div className="relative flex">
                              {/* Vertical Slider */}
                              <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10 flex flex-col items-center pl-4 space-y-4">
                                   {sections.map((section) => (
                                        <motion.button
                                             whileTap={{ scale: 0.9 }}
                                             key={section.id}
                                             onClick={() =>
                                                  sectionRefs.current[section.id].scrollIntoView({
                                                       behavior: "smooth",
                                                       block: "center",
                                                  })
                                             }
                                             className={`transition-all duration-300 flex flex-col items-center text-xs ${
                                                  activeSection === section.id
                                                       ? "text-white"
                                                       : "text-gray-500 hover:text-gray-300"
                                             }`}
                                        >
                                             <div className="text-xl">{section.icon}</div>
                                             <span>{section.label}</span>
                                        </motion.button>
                                   ))}
                              </div>
                              {/* <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-8">
                                   Evolving the drive with <span className="font-medium">360-degree</span>
                                   <br />
                                   nonwoven solutions
                              </h1> */}
                              {/* Scrollable Content */}
                              <div className="flex-1 flex flex-col space-y-2 px-16 py-12">
                                   {sections.map((section, index) => (
                                        <motion.section
                                             key={section.id}
                                             ref={(el) => {
                                                  sectionRefs.current[index] = el!;
                                             }}
                                             data-index={index}
                                             initial={{ opacity: 0, y: 50 }}
                                             whileInView={{ opacity: 1, y: 0 }}
                                             transition={{ duration: 0.6 }}
                                             className="flex flex-col justify-center"
                                        >
                                             <div className="border-l-2 border-white pl-6">
                                                  <h2 className="text-2xl lg:text-3xl font-light mb-4">{section.title}</h2>
                                                  <p className="text-gray-300 text-lg leading-relaxed">
                                                       {section.description}
                                                  </p>
                                             </div>
                                        </motion.section>
                                   ))}
                              </div>
                         </div>

                         {/* Right Side */}
                         <div className="hidden lg:flex items-center justify-center p-8 sticky top-0 h-screen">
                              <motion.div
                                   initial={{ opacity: 0, scale: 0.8 }}
                                   animate={{ opacity: 1, scale: 1 }}
                                   transition={{ duration: 1 }}
                                   className="relative w-full max-w-md"
                              >
                                   <div className="aspect-square bg-transparent flex items-center justify-center">
                                        <motion.div
                                             animate={{ opacity: [0.7, 1, 0.7] }}
                                             transition={{
                                                  repeat: Infinity,
                                                  duration: 3,
                                                  ease: "easeInOut",
                                             }}
                                             className="text-white text-center p-8 border border-gray-600 rounded-lg bg-gray-900/20"
                                        >
                                             <p className="text-lg mb-4">
                                                  {sections[activeSection].label} - 3D Visualization
                                             </p>
                                             <p className="text-sm text-gray-400">
                                                  This video shows the 3D car visualization
                                             </p>
                                        </motion.div>
                                   </div>
                              </motion.div>
                         </div>
                    </div>

                    {/* Play/Pause */}
                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-8">
                         <motion.button
                              whileTap={{ scale: 0.9 }}
                              onClick={handlePlayPause}
                              className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors duration-200"
                         >
                              {isPaused ? (
                                   <Play size={20} className="text-white" />
                              ) : (
                                   <Pause size={20} className="text-white" />
                              )}
                         </motion.button>
                    </div>
               </main>
          </>
     );
}
