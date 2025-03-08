"use client";

import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect px-6 py-4 backdrop-blur-md bg-primary/10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold gradient-text opacity-90">
          Al-Mamun Sikder
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <NavLink href="#home">Home</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </div>

        {/* Mobile Navigation Toggle */}
        <button 
          className="md:hidden text-secondary opacity-90"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden glass-effect mt-2 py-4 px-6 rounded-lg backdrop-blur-md bg-primary/10">
          <div className="flex flex-col space-y-4">
            <MobileNavLink href="#home" onClick={toggleMenu}>Home</MobileNavLink>
            <MobileNavLink href="#skills" onClick={toggleMenu}>Skills</MobileNavLink>
            <MobileNavLink href="#experience" onClick={toggleMenu}>Experience</MobileNavLink>
            <MobileNavLink href="#projects" onClick={toggleMenu}>Projects</MobileNavLink>
            <MobileNavLink href="#contact" onClick={toggleMenu}>Contact</MobileNavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <Link 
      href={href} 
      className="relative text-foreground/90 hover:text-secondary transition-all duration-300"
    >
      {children}
    </Link>
  );
};

const MobileNavLink = ({ 
  href, 
  onClick, 
  children 
}: { 
  href: string; 
  onClick: () => void; 
  children: React.ReactNode 
}) => {
  return (
    <Link 
      href={href} 
      onClick={onClick}
      className="text-foreground/90 hover:text-secondary transition-all duration-300 block"
    >
      {children}
    </Link>
  );
};

export default Navbar; 