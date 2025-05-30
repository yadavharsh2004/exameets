import React from 'react';

const AdmissionsCard = () => {
  return (
    <article
      className="flex items-center justify-between px-20 py-3 w-full bg-sky-100 text-black max-md:flex-wrap max-md:px-5"
      role="row"
    >
      <p className="w-[150px] text-sm text-center">IPU CET</p>
      <p className="w-[100px] text-sm text-center">U.G/P.G./Ph.d</p>
      <p className="w-[140px] text-sm text-center">06-Sep-2024</p>
      <time className="w-[140px] text-sm text-center" dateTime="2024-10-12">
        12-Oct-2024
      </time>
      <a
        href="#apply"
        className="w-[100px] text-sm text-blue-700 hover:underline text-center"
        aria-label="View and apply"
      >
        View &amp; Apply
      </a>
    </article>
  );
};

export default AdmissionsCard;
