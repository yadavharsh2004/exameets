"use client";
import * as React from "react";

const OrganizationHeader = () => {
  return (
    <header className="flex items-center justify-between px-20 py-3 bg-sky-200 font-medium text-black max-md:flex-wrap max-md:px-5">
      <h2 className="w-[150px] text-lg">Organization</h2>
      <h2 className="w-[250px] text-lg">Details</h2>
      <h2 className="w-[150px] text-lg">Qualification</h2>
      <div className="w-[250px] text-lg text-center">
        <p>Registration</p>
        <div className="flex justify-between text-sm mt-1">
          <span>Starts</span>
          <span>Ends</span>
        </div>
      </div>
      <h2 className="w-[150px] text-lg text-center">More Info</h2>
    </header>
  );
};

export default OrganizationHeader;
