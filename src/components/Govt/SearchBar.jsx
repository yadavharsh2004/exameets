"use client";
import React from "react";

const SearchBar = () => {
  return (
    <div className="flex flex-wrap flex-auto gap-10 px-5 py-1 text-xl text-black bg-white rounded-xl max-md:pr-5 max-md:max-w-full">
      <input
        type="text"
        placeholder="Search Internships here.."
        className="flex-1 outline-none bg-transparent"
        aria-label="Search internships"
      />
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/b52c89b5fca2d5cfb9fd0e974a9cf5a8d07675da?placeholderIfAbsent=true&apiKey=a2aa714b7b80432f8c75d4bafeacb991"
        alt="Search"
        className="object-contain shrink-0 my-auto aspect-[1.09] w-[25px]"
      />
    </div>
  );
};

export default SearchBar;
