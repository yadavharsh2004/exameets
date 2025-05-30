"use client";
import React from "react";
import BannerText from "./BannerText";
import BannerNavigation from "./BannerNavigation";

const NotificationBanner = () => {
  return (
    <header className="flex justify-between items-center px-20 w-full text-white bg-sky-800 h-[52px]">
      <BannerText />
      <BannerNavigation />
    </header>
  );
};

export default NotificationBanner;
