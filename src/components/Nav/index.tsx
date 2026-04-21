"use client";
import { useState, useEffect } from 'react';
import Image from "next/image";
import Link from 'next/link';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact Me', href: '#contact' },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      // Get the current scroll position
      const scrollPosition = window.scrollY;

      // Clears the active state if we're near the top of the page
      if (scrollPosition < 120) {
        setActiveSection('');
        return;
      }

      const sections = navLinks.map(link => document.querySelector(link.href));
      const detectionPoint = scrollPosition + 150;


      sections.forEach(section => {
        if (section && section instanceof HTMLElement) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;

          if (detectionPoint >= sectionTop && detectionPoint < sectionBottom) {
            setActiveSection(`#${section.id}`);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 w-full h-[104px] bg-white backdrop-blur-md z-50 border-b border-white flex items-center justify-between px-10">
      {/* Logo */}
      <Link href="/" className="flex items-center">
        <Image 
          src="/images/logo/lara-logo-final.svg"  // Direct path to public folder
          alt="Lara Krefski logo"
          width={394}
          height={83}
          priority
          className="h-auto w-[250px] md:w-[300px] lg:w-[394px] object-contain"
        />      
      </Link>


      {/* Links */}
      <ul className="flex items-center space-x-12">
        {navLinks.map((link) => {
          const isContact = link.name === 'Contact Me';
          const isActive = activeSection === link.href;

          return (
            <li key={link.name} className="relative flex items-center h-full">
              <a
                href={link.href}
                className={`
                  relative font-display text-[1.5rem] font-bold uppercase transition-opacity hover:opacity-80 text-[#141e22]
                  ${isContact 
                    ? 'bg-[#90C9E1] px-[10px] py-[5px] rounded-sm'
                    : 'py-2' // Adds some hit-area for non-button links
                  }
                `}
              >
                {link.name}

                {/* Active Underline: Only shows for non-contact links when active */}
                {isActive && !isContact && (
                  <span 
                    className="absolute bottom-0 left-0 w-full h-[4px] bg-[#90c9e1]" 
                    aria-hidden="true"
                  />
                )}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}