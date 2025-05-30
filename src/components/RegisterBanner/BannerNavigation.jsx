"use client";
import React from "react";
import { useNavigate } from "react-router-dom";


const BannerNavigation = () => {
  const navigate = useNavigate(); // ✅ useNavigate hook
  
  const handleLogin = () => {
    navigate('/login');
  };

  const handleRegister = () => {
    // Handle register action
    navigate("/register");
  };

  return (
    <nav className="flex gap-5 items-center text-2xl font-medium">
      {/* <Link to={"/login"}> */}
        <button
          onClick={handleLogin}
          className="hover:text-sky-200 transition-colors"
          aria-label="Login"
        >
          Login
        </button>
      {/* </Link> */}
      <span className="text-2xl" aria-hidden="true">
        |
      </span>
      <button
        onClick={handleRegister}
        className="hover:text-sky-200 transition-colors"
        aria-label="Register"
      >
        Register
      </button>
    </nav>
  );
};

export default BannerNavigation;
