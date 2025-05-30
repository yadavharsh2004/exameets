import React from "react";

const SortButton = () => {
  return (
    <button
      className="self-start text-2xl text-black"
      aria-label="Sort government jobs"
    >
      <div className="flex gap-5 justify-between px-8 py-1.5 rounded-xl bg-white bg-opacity-90 max-md:px-5">
        <span>Sort by</span>
        <img
          alt="Sort icon"
          src= {"/filter.png"}
          className="object-contain shrink-0 my-auto aspect-[1.63] w-[40px]"
        />
      </div>
    </button>
  );
};

export default SortButton;
