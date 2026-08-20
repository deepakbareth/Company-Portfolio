import React from 'react';

export default function Navbar() {
  const navLinks = [
    { name: 'WORK', href: '#work' },
    { name: 'SERVICES', href: '#services' },
    { name: 'ABOUT', href: '#about' },
  ];

  return (
    <div className="fixed top-6 left-0 right-0 z-50 px-4 sm:px-8 flex justify-center w-full pointer-events-none">
      <nav className="pointer-events-auto w-full max-w-6xl bg-white rounded-full flex items-center justify-between px-6 py-3 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
        
        {/* Logo */}
        <div className="flex items-center">
          <a href="#" className="font-black text-xl tracking-tighter text-slate-900 flex items-center hover:opacity-80 transition-opacity">
            <span className="text-[#E7E247] drop-shadow-[2px_2px_0_#000]" style={{ WebkitTextStroke: '1px black' }}>PREMIUM</span>
            <span className="ml-2 uppercase tracking-widest text-[10px] font-bold mt-1">Websites</span>
          </a>
        </div>

        {/* Center Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-slate-800 text-[11px] font-bold tracking-widest uppercase hover:text-blue-600 transition-colors">
              {link.name}
            </a>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center space-x-6">
          <a href="#" className="hidden sm:block text-slate-800 text-[11px] font-bold tracking-widest uppercase hover:text-blue-600 transition-colors">
            LOGIN
          </a>
          <button className="bg-[#111] text-white hover:bg-slate-800 text-[11px] font-bold tracking-widest uppercase px-6 py-3 rounded-full flex items-center gap-2 transition-transform active:scale-95">
            SIGN UP
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </button>
        </div>
      </nav>
    </div>
  );
}
