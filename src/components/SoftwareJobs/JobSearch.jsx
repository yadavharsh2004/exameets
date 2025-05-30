import React from "react";
import SearchBar from "../Govt/SearchBar";
import FilterButton from "../Govt/FilterButton";
import SortButton from "../Govt/SortButton";

const JobSearch = ({header}) => {
  return (
    <div>
      <section className="flex flex-col py-6 pr-1 pl-8 w-full bg-sky-100 max-md:pl-5 max-md:mr-0.5 max-md:max-w-full">
        <header>
          <h1 className="self-start text-2xl font-semibold text-black max-md:max-w-full">
            {header}
          </h1>
        </header>

        <div className="flex flex-wrap gap-7 mt-7 ml-3 w-full max-md:max-w-full">
          <h2 className="grow my-auto text-2xl font-medium text-black">
            Search
          </h2>
          <div className="flex flex-wrap gap-2 items-start">
            <SearchBar />
            <FilterButton />
          </div>
          <SortButton />
        </div>
      </section>
    </div>
  );
};

export default JobSearch;
