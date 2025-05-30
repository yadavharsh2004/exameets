"use client";
import * as React from "react";

function Header() {
  return (
    <div className="box-border flex justify-between items-center px-5 py-0 w-full bg-sky-800 h-[66px] max-md:px-4 max-md:py-0 max-sm:flex-col max-sm:items-start max-sm:p-2.5 max-sm:h-auto">
      <div className="text-2xl text-white max-md:text-2xl">
        Welcome UserName..
      </div>
      <div className="flex items-center max-sm:flex-col max-sm:items-start">
        <span className="mx-2.5 my-0 text-2xl text-white max-md:text-2xl max-sm:mx-0 max-sm:my-1.5">
          Profile
        </span>
        <span className="mx-1.5 my-0 text-2xl text-white max-md:text-2xl">
          -
        </span>
        <span className="mx-2.5 my-0 text-2xl text-white max-md:text-2xl max-sm:mx-0 max-sm:my-1.5">
          Change Password
        </span>
        <span className="mx-1.5 my-0 text-2xl text-white max-md:text-2xl">
          -
        </span>
        <span className="mx-2.5 my-0 text-2xl text-white max-md:text-2xl max-sm:mx-0 max-sm:my-1.5">
          Logout
        </span>
      </div>
    </div>
  );
}

export default Header;
