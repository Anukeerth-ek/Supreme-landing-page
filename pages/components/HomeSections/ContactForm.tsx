import React, { useState } from "react";

export default function ContactForm() {
     const [formData, setFormData] = useState({
          fullName: "",
          email: "",
          subject: "",
          message: "",
     });

     const handleInputChange = (e) => {
          const { name, value } = e.target;
          setFormData((prev) => ({
               ...prev,
               [name]: value,
          }));
     };

     const handleSubmit = (e) => {
          e.preventDefault();
          console.log("Form submitted:", formData);
          alert("Message sent successfully!");
          // Reset form
          setFormData({
               fullName: "",
               email: "",
               subject: "",
               message: "",
          });
     };

     return (
          <div className="min-h-screen bg-blue-600 text-white">
               <div className="container mx-auto px-8 py-16">
                    <div className="flex flex-col lg:flex-row gap-16 max-w-6xl mx-auto">
                         <div className="lg:w-1/2 space-y-8">
                              <div>
                                   <h1 className="text-4xl font-light mb-4">Get in touch</h1>
                                   <div className="w-12 h-0.5 bg-white mb-8"></div>
                                   <p className="text-lg text-blue-100">For general enquiries</p>
                              </div>

                              <div className="space-y-6">
                                   <div>
                                        <h3 className="font-medium mb-2">Address :</h3>
                                        <p className="text-blue-100 leading-relaxed">
                                             110, 16th Road, Chembur, Mumbai – 400071
                                        </p>
                                   </div>

                                   <div>
                                        <h3 className="font-medium mb-2">Phone :</h3>
                                        <p className="text-blue-100">+91 22 25208822</p>
                                   </div>

                                   <div>
                                        <h3 className="font-medium mb-2">Email :</h3>
                                        <p className="text-blue-100">info@supremegroup.co.in</p>
                                   </div>
                              </div>
                         </div>

                         <div className="lg:w-1/2">
                              <div className="space-y-6">
                                   <div>
                                        <input
                                             type="text"
                                             name="fullName"
                                             placeholder="Full name"
                                             value={formData.fullName}
                                             onChange={handleInputChange}
                                             className="w-full bg-transparent border-b border-blue-300 pb-3 text-white placeholder-blue-200 focus:outline-none focus:border-white transition-colors duration-300"
                                        />
                                   </div>

                                   <div>
                                        <input
                                             type="email"
                                             name="email"
                                             placeholder="E-mail"
                                             value={formData.email}
                                             onChange={handleInputChange}
                                             className="w-full bg-transparent border-b border-blue-300 pb-3 text-white placeholder-blue-200 focus:outline-none focus:border-white transition-colors duration-300"
                                        />
                                   </div>

                                   <div>
                                        <input
                                             type="text"
                                             name="subject"
                                             placeholder="Subject"
                                             value={formData.subject}
                                             onChange={handleInputChange}
                                             className="w-full bg-transparent border-b border-blue-300 pb-3 text-white placeholder-blue-200 focus:outline-none focus:border-white transition-colors duration-300"
                                        />
                                   </div>

                                   <div>
                                        <textarea
                                             name="message"
                                             placeholder="Message"
                                             //   rows="4"
                                             value={formData.message}
                                             onChange={handleInputChange}
                                             className="w-full bg-transparent border-b border-blue-300 pb-3 text-white placeholder-blue-200 focus:outline-none focus:border-white transition-colors duration-300 resize-none"
                                        ></textarea>
                                   </div>

                                   <div className="pt-6">
                                        <button
                                             onClick={handleSubmit}
                                             className="bg-white text-blue-600 px-8 py-3 rounded-full font-medium hover:bg-blue-50 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                                        >
                                             Send
                                        </button>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
}
