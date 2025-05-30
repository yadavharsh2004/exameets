"use client";
import * as React from "react";

const JobListingHeader = () => {
  return (
    <header className="flex items-center justify-between px-20 py-3 bg-sky-200 font-medium text-black max-md:flex-wrap max-md:px-5">
      <h2 className="w-[150px] text-lg">Company</h2>
      <h2 className="w-[200px] text-lg">Role</h2>
      <h2 className="w-[100px] text-lg text-center">Experience</h2>
      <h2 className="w-[180px] text-lg text-center">Qualification</h2>
      <h2 className="w-[130px] text-lg text-center">Salary</h2>
      <h2 className="w-[120px] text-lg text-center">Location</h2>
      <h2 className="w-[140px] text-lg text-center">Posted Date</h2>
      <h2 className="w-[100px] text-lg text-center">More</h2>
    </header>
  );
};

export default JobListingHeader;
