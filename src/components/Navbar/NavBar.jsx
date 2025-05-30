"use client";
import React from "react";
import { Logo } from "./Logo";
import { NavItems } from "./NavItems";
import { Link } from "react-router-dom";
import MessageBanner from "../MessageBar/MessageBanner";

export const NavBar = () => {
  return (
    <>
      <MessageBanner />
      <header className="flex justify-between items-center px-9 py-5 w-full ">
        <Link to="/">
          <Logo />
        </Link>
        <nav className="flex gap-8 items-center max-md:hidden">
          <NavItems />
        </nav>
      </header>
    </>
  );
};
