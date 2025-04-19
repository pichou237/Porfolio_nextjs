"use client";

import { useState } from "react";
import NavItem from "./NavItem";
import MenuToggle from "./MenuToggle";
import { Button } from "@/src/components/ui/button";
import Image from 'next/image';

// importation image logo
import logo from '@/public/images/logoPerson.png';

const menuItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About me" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/cv/CV_stephane.pdf'; // accès direct depuis le dossier public
    link.download = 'CV_Stephane_Banemb.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav className="flex items-center justify-between px-6 py-2">
      {/* Logo */}
      <a href="#">
        <Image src={logo} alt="logo personnal" height={140} width={140} />
      </a>

      {/* Menu Toggle (Mobile) */}
      <MenuToggle isOpen={isOpen} toggleMenu={toggleMenu} />

      {/* Menu List */}
      <ul
        className={`absolute md:static top-25 left-0 w-full md:w-auto bg-white md:bg-transparent p-4 md:p-0 shadow-md md:shadow-none md:flex md:items-center md:gap-6 transition-all duration-300 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        {menuItems.map(({ href, label }) => (
          <NavItem key={href} href={href} label={label} onClick={closeMenu} />
        ))}

        {/* Bouton Download CV */}
        <li className="text-center md:text-left mt-4 md:mt-0">
          <Button
            className="bg-orange-500 hover:bg-orange-600 text-white"
            onClick={handleDownloadCV}
          >
            Download CV
          </Button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
