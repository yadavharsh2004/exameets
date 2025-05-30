import React from "react";
import { Mail, Clock, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <div
      className=" w-full min-h-screen py-16 px-4 flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/contact.png')" }} // Replace with actual path
    >
      <div className="bg-white bg-opacity-90 p-10 rounded-lg shadow-2xl max-w-5xl w-full flex flex-col md:flex-row justify-between gap-10">
        
        {/* Left Side: Message */}
        <div className="flex-1 flex flex-col justify-center items-center text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6">We're here for help</h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-md">
            If you have any questions, feedback, or inquiries, feel free to reach out to us.
            <br className="hidden md:block" /> We'd love to hear from you.
          </p>
        </div>

        {/* Right Side: Contact Details */}
        <div className="flex-1 bg-sky-900 text-white p-8 rounded-md shadow-inner space-y-5">
          <h3 className="text-xl font-semibold">Please contact us at:</h3>
          <div className="flex items-start gap-3">
            <Mail className="w-6 h-6 mt-1" />
            <span className="text-base">examzeets@gmail.com</span>
          </div>
          <div className="flex items-start gap-3">
            <Clock className="w-6 h-6 mt-1" />
            <span className="text-base">Timings: Mon - Fri (9 AM - 6 PM)</span>
          </div>

          <h3 className="text-xl font-semibold pt-4">Office Address:</h3>
          <div className="flex items-start gap-3">
            <MapPin className="w-6 h-6 mt-1" />
            <span className="text-base">
              Exameets HQ Kadapa, Andhra Pradesh, India - 516003.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
