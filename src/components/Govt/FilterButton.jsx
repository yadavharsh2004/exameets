import React from "react";

const FilterButton = () => {
  return (
    <button
      className="grow shrink-0 text-2xl text-black whitespace-nowrap basis-0 w-fit"
      aria-label="Filter government jobs"
    >
      <div className="flex gap-5 justify-between px-7 py-2 rounded-xl bg-white bg-opacity-90 max-md:px-5">
        <span>Filter</span>
        <img
          // src="https://cdn.builder.io/api/v1/image/assets/TEMP/3a2cb1474046e95ec5a97bfd89d87dc0bde7a322?placeholderIfAbsent=true&apiKey=a2aa714b7b80432f8c  75d4bafeacb991"
          // alt="Filter icon"
          src= {"/filter.png"}
          className="object-contain shrink-0 my-auto aspect-[1.63] w-[40px]"
        />
      </div>
    </button>
  );
};

export default FilterButton;
