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
          // src="https://cdn.builder.io/api/v1/image/assets/TEMP/2788c2b0896ec2827d779df74276475e065459bd?placeholderIfAbsent=true&apiKey=a2aa714b7b80432f8c75d4bafeacb991"
          alt="Sort icon"
          src= {"/filter.png"}
          className="object-contain shrink-0 my-auto aspect-[1.63] w-[40px]"
        />
      </div>
    </button>
  );
};

export default SortButton;
