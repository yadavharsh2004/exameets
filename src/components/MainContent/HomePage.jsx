"use client";
import * as React from "react";
import WelcomeSection from "./WelcomeSection";
import SearchSection from "./SearchSection";
import NewsSection from "./NewsSection";
import NotificationBanner from "../RegisterBanner/NotificationBanner";

function HomePage() {
  return (
    <>
    <NotificationBanner />
    <main className="flex flex-wrap gap-5 p-5 max-md:flex-col">
      <WelcomeSection />
      <aside className="flex-1 p-5 bg-sky-100 min-w-[300px]">
        <SearchSection />
        <NewsSection />
      </aside>
    </main>
    </>
  );
}

export default HomePage;
