import React from "react";

export const NavItem = ({ icon, label }) => {
  return (
    <button
      className="flex flex-col items-center justify-center cursor-pointer"
      aria-label={label}
    >
      <div className="relative w-[70px] h-[70px]">
        <svg
          width="7"
          height="70"
          viewBox="0 0 70 70"
          className="absolute inset-0"
        >
          <circle
            cx="35"
            cy="35"
            r="35"
            fill="#DFF1FF"
            stroke="#283D50"
            strokeWidth="5"
          />
        </svg>

        <div className="relative w-[75px] h-[75px] rounded-full overflow-hidden border-[2px] border-[#283D50] bg-[#DFF1FF] flex items-center justify-center">
        {/* <img
          src={icon}
          alt={label}
          className="w-full h-full object-cover"
        /> */}
        {/* <div className="text-[#283D50] size-100">{icon}</div> */}
        <div className="text-[#283D50]">
          {React.cloneElement(icon, { size: 35 })} {/* 👈 ensures icon is properly sized */}
        </div>
      </div>
      </div>
      <span className="mt-2 text-black font-inter text-[20px]">{label}</span>
    </button>
  );
};
