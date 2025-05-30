import React from 'react';

const AdmissionsHeader = () => {
  return (
    <header className="flex items-center justify-between px-20 py-3 bg-sky-200 font-medium text-black max-md:flex-wrap max-md:px-5">
      <h2 className="w-[150px] text-lg text-center">Institution Name</h2>
      <h2 className="w-[100px] text-lg text-center">Course</h2>
      <h2 className="w-[140px] text-lg text-center">Apply Date</h2>
      <h2 className="w-[140px] text-lg text-center">Last Date</h2>
      <h2 className="w-[100px] text-lg text-center">More Info</h2>
    </header>
  );
};

export default AdmissionsHeader;
