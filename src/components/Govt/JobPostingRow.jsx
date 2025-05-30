"use client";
import * as React from "react";

function JobPostingRow() {
  return (
    <article
      className="flex items-center justify-between px-20 py-3 w-full bg-sky-100 text-black max-md:flex-wrap max-md:px-5"
      role="row"
    >
      <h2 className="w-[150px] text-base font-semibold">NIACL</h2>

      <div className="w-[250px] flex flex-col text-sm">
        <span>Administrative</span>
        <span>Officer - 50 posts</span>
      </div>

      <p className="w-[150px] text-sm">Any Degree</p>

      <div className="w-[250px] flex justify-between text-sm">
        <time dateTime="2024-09-06">06-Sep-2024</time>
        <time dateTime="2024-09-29">29-Sep-2024</time>
      </div>

      <a
        href="#details"
        className="w-[150px] text-sm text-blue-700 hover:underline text-center"
        aria-label="Get more details about NIACL Administrative Officer position"
      >
        Get Details &gt;&gt;
      </a>
    </article>
  );
}

export default JobPostingRow;
