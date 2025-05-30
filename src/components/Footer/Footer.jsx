"use client";
import React from "react";
import FooterNavLinks from "./FooterNavLinks";
import FooterSocialLinks from "./FooterSocialLinks";
import FooterCopyright from "./FooterCopyright";
import FooterDivider from "./FooterDivider";

const Footer = () => {
  return (
    <footer className="p-5 w-full text-white bg-sky-800">
      <div className="flex flex-col gap-5 items-center">
        <h2 className="text-3xl">Exameets</h2>
        <FooterNavLinks />
        <FooterCopyright />
        <p className="text-xl">Developed in Partnership with Ceeras</p>
        <FooterSocialLinks />
        <FooterDivider />
        <p className="mt-2.5 text-xl">
          Success is not final, Failure is not final, It is the courage to
          continue that counts | Success is not final, Failure is not final, It
          is the courage to continue that co
        </p>
      </div>
    </footer>
  );
};

export default Footer;
