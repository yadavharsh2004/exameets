"use client";
import * as React from "react";

function JobListingCard() {
  return (
    <article
      className="flex items-center justify-between px-20 py-3 w-full bg-sky-100 text-black max-md:flex-wrap max-md:px-5"
      role="row"
    >
      <h2 className="w-[150px] text-base font-semibold">Creatiwise</h2>

      <div className="w-[200px] flex flex-col text-sm">
        <span>Frontend Developer</span>
        <span className="text-xs text-gray-600">Full-time</span>
      </div>

      <p className="w-[100px] text-sm text-center">0</p>

      <p className="w-[180px] text-sm text-center">B.E/B.Tech/CS</p>
      <p className="w-[130px] text-sm text-center">Not Disclosed</p>
      <p className="w-[120px] text-sm text-center">Pune</p>

      <time className="w-[140px] text-sm text-center" dateTime="2024-10-12">
        12-Oct-2024
      </time>

      <a
        href="#apply"
        className="w-[100px] text-sm text-blue-700 hover:underline text-center"
        aria-label="View and apply for Frontend Developer at Creatiwise"
      >
        View &amp; Apply
      </a>
    </article>
  );
}

export default JobListingCard;
