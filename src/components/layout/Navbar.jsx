import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logoImg from '../../assets/logo.png';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'OUR WORK', href: '#work' },
    { name: 'SERVICES', href: '#services' },
    { name: 'ABOUT US', href: '#about' },
  ];

  return (
    <>
      {/* Floating Navbar Pill */}
      <div className="fixed top-6 left-0 right-0 z-[60] px-4 sm:px-8 flex justify-center w-full pointer-events-none">
        <nav className="pointer-events-auto w-full max-w-6xl bg-white rounded-full flex items-center justify-between px-6 py-3 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">

          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="hover:opacity-80 transition-opacity">
              {/* Added brightness-0 to make the light logo black/dark for visibility on white bg */}
              <img src={logoImg} alt="Premium Business Websites" className="h-10 md:h-12 w-auto object-cover brightness-0" />
            </a>
          </div>

          {/* Desktop Center Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-slate-800 text-[11px] font-bold tracking-widest uppercase hover:text-blue-600 transition-colors">
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop Right Actions */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#contact" className="text-slate-800 text-[11px] font-bold tracking-widest uppercase hover:text-blue-600 transition-colors">
              CONTACT
            </a>
            <button className="bg-[#111] text-white hover:bg-slate-800 text-[11px] font-bold tracking-widest uppercase px-6 py-3 rounded-full flex items-center gap-2 transition-transform active:scale-95">
              START A PROJECT
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-800 hover:text-blue-600 transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#0A192F]/95 backdrop-blur-md flex flex-col items-center justify-center pointer-events-auto md:hidden">
          <div className="flex flex-col items-center space-y-8 text-white">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2xl font-black tracking-widest uppercase hover:text-slate-300 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-2xl font-black tracking-widest uppercase hover:text-slate-300 transition-colors"
            >
              CONTACT
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-4 bg-white text-[#0A192F] hover:bg-slate-200 text-sm font-bold tracking-widest uppercase px-8 py-4 rounded-full flex items-center gap-2 transition-transform active:scale-95"
            >
              START A PROJECT
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
