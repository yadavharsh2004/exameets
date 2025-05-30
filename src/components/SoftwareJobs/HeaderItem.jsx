"use client";

import * as React from "react";

const HeaderItem = ({ text }) => {
  return (
    <button
      className="self-stretch my-auto text-2xl font-medium text-black hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
      aria-label={`Sort by ${text}`}
    >
      {text}
    </button>
  );
};

export default HeaderItem;
