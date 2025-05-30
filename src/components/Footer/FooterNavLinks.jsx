import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const FooterNavLinks = () => {
  const links = [
    { name: "Contact Us", path: "/contact" },
    { name: "About Us", path: "/about" },
    { name: "Community", path: "/community" },
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Our Team", path: "/team" },
  ];

  return (
    <nav className="flex flex-wrap gap-2.5 justify-center text-xl">
      {links.map((link, index) => (
        <React.Fragment key={link.name}>
          <Link to={link.path} className="hover:text-sky-200 transition-colors">
            {link.name}
          </Link>
          {index < links.length - 1 && <span className="text-sky-200">|</span>}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default FooterNavLinks;
