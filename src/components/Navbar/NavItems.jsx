import React from "react";
import { NavItem } from "./NavItem";
import { NavIcons } from "./NavIcons";
import { Link } from "react-router-dom";
import {
  Home,
  Briefcase,
  ShieldCheck,
  GraduationCap,
  BookOpen,
  FileText,
  School,
} from "lucide-react";

export const NavItems = () => {
  const navItems = [
    { icon: <Home size={20} />, label: "Home", path: "/" },
    { icon: <Briefcase size={20} />, label: "Software Jobs", path: "/tech-jobs" },
    { icon: <ShieldCheck size={20} />, label: "Govt Jobs", path: "/govt-jobs" },
    { icon: <GraduationCap size={20} />, label: "Internship", path: "/internship" },
    { icon: <BookOpen size={20} />, label: "Admissions", path: "/admissions" },
    { icon: <FileText size={20} />, label: "PYQ", path: "/pyq" },
    { icon: <School size={20} />, label: "Courses", path: "/courses" },
  ];

  return (
    <div>
      {/* Display icons if you want */}
      {/* <div dangerouslySetInnerHTML={{ __html: NavIcons }} /> */}
      
      {/* Navbar items */}
      <div className="flex gap-8 items-center">
        {navItems.map((item, index) => (
          <Link to={item.path} key={index} >
            <NavItem icon={item.icon} label={item.label}  />
          </Link>
        ))}
      </div>
    </div>
  );
};
