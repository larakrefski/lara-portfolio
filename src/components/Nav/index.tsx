"use client";
import { useState, useEffect } from 'react';
import Image from "next/image";
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { link } from 'fs/promises';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact Me', href: '#contact' },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  // Close menu when a link is clicked
  const toggleMenu = () => setIsOpen(!isOpen);

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
    <>
      <nav className="fixed top-0 w-full h-[80px] md:h-[104px] bg-white z-50 border-b border-gray-100 flex items-center justify-between px-6 md:px-10">
      
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image 
            src="/images/logo/lara-logo-final.svg"  // Direct path to public folder
            alt="Lara Krefski logo"
            width={394}
            height={83}
            priority
            className="h-auto w-[270px] md:w-[375px] object-contain"
          />      
        </Link>

        {/* Desktop Links - Hidden on Mobile/Tablet */}
        <ul className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => {
            const isContact = link.name === 'Contact Me';
            const isActive = activeSection === link.href;

            return (
              <li key={link.name} className="relative flex items-center h-full">
                <a
                  href={link.href}
                  className={`
                    relative font-display text-[1.2rem] xl:text-[1.5rem] font-bold uppercase transition-opacity hover:opacity-80 text-[#141e22]
                    ${isContact 
                      ? 'bg-[#90C9E1] px-[10px] pt-[5px] pb-[1px] rounded-sm'
                      : 'py-2'
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

        {/* Mobile Menu Toggle Button */}
        <button 
          className="lg:hidden z-50 text-[#141e22]" 
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </nav>

      {/* Mobile Overlay Menu */}
      <div className={`
        fixed left-0 w-full bg-white shadow-xl transition-transform duration-500 ease-in-out z-40 
        top-[80px] md:top-[104px]
        ${isOpen ? 'translate-y-0' : '-translate-y-full'}
      `}>
        {/* 1. We removed h-screen. Now it only grows to fit the links.
            2. We start with a spacer to clear the main Navbar (80px on mobile).
        */}
        <div className="flex flex-col w-full pb-10 border-t border-gray-50">
          <nav className="px-10 pt-6">
            <ul className="flex flex-col space-y-6">
              {navLinks.map((link) => {
                const isContact = link.name === 'Contact Me';

                return (
                  <li key={link.name} className="border-b border-gray-50 pb-4 last:border-0">
                    <a
                      href={link.href}
                      onClick={toggleMenu}
                      className={`
                        block font-display text-2xl font-bold uppercase transition-colors
                        ${isContact 
                          ? 'bg-[#90C9E1] text-[#141e22] px-6 py-2 rounded-sm inline-block' 
                          : 'text-[#141e22]'
                        }
                      `}
                    >
                      {link.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}