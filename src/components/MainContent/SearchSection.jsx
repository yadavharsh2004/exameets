"use client";
import React, { useState } from "react";

function SearchSection() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    // Implement search functionality
    console.log("Searching for:", searchTerm);
  };

  const handleCancel = () => {
    setSearchTerm("");
  };

  return (
    <section className="relative">
      <div className="flex items-center p-2.5 bg-white rounded-[50px]">
        <input
          type="search"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1 px-5 border-[nonepx]"
          aria-label="Search"
        />
        <button aria-label="Search button">
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[25px] h-[23px]"
          >
            <path
              d="M9.97812 6.15401e-07C8.41642 0.000782134 6.87669 0.344577 5.48269 1.00375C4.0887 1.66293 2.87931 2.6191 1.95174 3.79541C1.02417 4.97173 0.404282 6.33538 0.141906 7.77676C-0.120469 9.21814 -0.0180176 10.697 0.441028 12.0946C0.900073 13.4922 1.70291 14.7694 2.785 15.8237C3.8671 16.878 5.19828 17.6799 6.67154 18.1649C8.14481 18.65 9.71907 18.8047 11.2678 18.6166C12.8165 18.4285 14.2965 17.9028 15.5888 17.0819L21.7586 22.8537C21.93 23.0259 22.1366 23.164 22.3662 23.2598C22.5959 23.3556 22.8437 23.4071 23.0951 23.4113C23.3464 23.4154 23.5961 23.3721 23.8292 23.284C24.0622 23.1959 24.274 23.0647 24.4517 22.8982C24.6295 22.7318 24.7696 22.5336 24.8638 22.3153C24.9579 22.0971 25.0041 21.8634 24.9997 21.628C24.9953 21.3927 24.9403 21.1607 24.8379 20.9457C24.7356 20.7307 24.5881 20.5372 24.4042 20.3768L18.2394 14.6002C19.2593 13.1948 19.8508 11.5558 19.9502 9.85921C20.0496 8.16266 19.6533 6.47283 18.8037 4.97142C17.9541 3.47 16.6835 2.21378 15.1285 1.33785C13.5735 0.46191 11.7929 -0.000615839 9.97812 6.15401e-07ZM3.73846 9.34713C3.73846 7.79775 4.39585 6.31183 5.56602 5.21625C6.73618 4.12067 8.32326 3.50518 9.97812 3.50518C11.633 3.50518 13.2201 4.12067 14.3902 5.21625C15.5604 6.31183 16.2178 7.79775 16.2178 9.34713C16.2178 10.8965 15.5604 12.3824 14.3902 13.478C13.2201 14.5736 11.633 15.1891 9.97812 15.1891C8.32326 15.1891 6.73618 14.5736 5.56602 13.478C4.39585 12.3824 3.73846 10.8965 3.73846 9.34713Z"
              fill="#015990"
            />
          </svg>
        </button>
      </div>
      <div className="flex gap-5 mt-5">
        <button
          onClick={handleSearch}
          className="px-8 py-3 text-white bg-sky-800 rounded-xl hover:bg-sky-900 focus:outline-none focus:ring-2 focus:ring-sky-500"
        >
          Search
        </button>
        <button
          onClick={handleCancel}
          className="px-8 py-3 text-white bg-sky-800 rounded-xl hover:bg-sky-900 focus:outline-none focus:ring-2 focus:ring-sky-500"
        >
          Cancel
        </button>
      </div>
    </section>
  );
}

export default SearchSection;
