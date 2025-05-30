import React from "react";
import SearchSection from "../MainContent/SearchSection";
import NewsSection from "../MainContent/NewsSection";
import NotificationBanner from "../RegisterBanner/NotificationBanner";

const Login = () => {
  return (
    <>
    <NotificationBanner />
      <main className="flex flex-wrap gap-5 p-5 max-md:flex-col min-h-screen bg-sky-50 relative">
        {/* Left Image Section */}
        <div className="flex-1 flex items-center justify-center min-w-[300px] overflow-hidden">
          <img
            src="/login-background.png" // Ensure the image is placed in the public folder
            alt="Welcome"
            className="object-cover w-full h-full rounded-xl"
            style={{ objectPosition: "left bottom" }}
          />
        </div>

        {/* Right Side (Search + News, Disabled) */}
        <aside className="flex-1 p-5 bg-sky-100 min-w-[300px] opacity-50 pointer-events-none">
          <SearchSection />
          <NewsSection />
        </aside>

        {/* Login Form on top */}
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
            <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
            <form className="flex flex-col gap-4">
              <input
                type="email"
                placeholder="Email"
                className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
              <input
                type="password"
                placeholder="Password"
                className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
              <button
                type="submit"
                className="bg-sky-500 text-white py-2 rounded-md hover:bg-sky-600 transition"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </main>
    
    </>
  );
};

export default Login;
