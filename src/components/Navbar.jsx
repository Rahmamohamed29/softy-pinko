import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Work Process', href: '#work-process' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Pricing Tables', href: '#pricing' },
    { name: 'Blog Entries', href: '#blog' },
    { name: 'Contact Us', href: '#contact' },
  ];

  return (
    <header className="fixed top-7 left-0 right-0 z-50 px-6">
      <nav className="max-w-[960px] mx-auto bg-white/85 backdrop-blur-md rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.08)] px-8 h-[82px] flex items-center justify-between">
        
        <a href="#home" className="flex items-center gap-3 shrink-0">
          <div className="relative w-7 h-7 flex items-center justify-center">
            <span className="w-4 h-4 bg-[#7857fe] rounded-[3px] absolute top-0.5 left-0.5"></span>
            <span className="w-4 h-4 bg-[#ff589e] rounded-[3px] absolute bottom-0.5 right-0.5"></span>
          </div>
          <span className="font-bold text-[#1e1e1e] text-[19px] tracking-tight">
            Softy Pinko
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-6 text-[13px] font-medium text-[#4a4a4a]">
          {navLinks.map((link, index) => (
            <li key={index} className="max-w-[75px] leading-[1.35]">
              <a
                href={link.href}
                className="hover:text-[#ff589e] transition-colors duration-300 block"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[#1e1e1e] focus:outline-none"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {isOpen && (
        <div className="max-w-[960px] mx-auto mt-3 bg-white/95 backdrop-blur-md rounded-3xl shadow-xl p-6 md:hidden">
          <ul className="flex flex-col gap-4 text-center text-[14px] font-medium text-[#1e1e1e]">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-1 hover:text-[#ff589e] transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}