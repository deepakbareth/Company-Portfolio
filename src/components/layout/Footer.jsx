import React from 'react';
import logoImg from '../../assets/logo.png';

export default function Footer() {
  return (
    <footer className="bg-[#050D1A] text-white pt-24 pb-10 border-t border-white/5 relative overflow-hidden">

      {/* Background Decor */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#E7E247]/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">

        {/* Top Huge CTA */}
        <div className="flex flex-col md:flex-row justify-between items-center pb-20 border-b border-white/10 gap-10">
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter mb-4 leading-tight">
              Let's build <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E7E247] to-white">something great.</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-md">
              Ready to elevate your digital presence? We're here to help you dominate your market.
            </p>
          </div>
          <button className="bg-[#E7E247] text-[#0A192F] hover:bg-white text-sm font-black tracking-widest uppercase px-12 py-5 rounded-full flex items-center gap-3 transition-transform active:scale-95 shadow-[0_0_30px_rgba(231,226,71,0.3)] whitespace-nowrap">
            START A PROJECT
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </button>
        </div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-20 border-b border-white/10">

          {/* Brand Col */}
          <div className="lg:col-span-1">
            <img src={logoImg} alt="Premium Business Websites" className="h-10 w-auto object-contain brightness-0 invert mb-6" />
            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              We craft high-performance, conversion-driven websites for growing businesses and modern enterprises worldwide.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:bg-[#E7E247] hover:text-[#0A192F] transition-all">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:bg-[#E7E247] hover:text-[#0A192F] transition-all">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:bg-[#E7E247] hover:text-[#0A192F] transition-all">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:bg-[#E7E247] hover:text-[#0A192F] transition-all">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#work" className="text-slate-400 hover:text-white transition-colors text-sm">Our Work</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-white transition-colors text-sm">Services</a></li>
              <li><a href="#about" className="text-slate-400 hover:text-white transition-colors text-sm">About Us</a></li>
              <li><a href="#process" className="text-slate-400 hover:text-white transition-colors text-sm">Our Process</a></li>
              <li><a href="#careers" className="text-slate-400 hover:text-white transition-colors text-sm">Careers</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Services</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Web Design</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Web Development</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">SEO Optimization</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">E-Commerce</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Digital Marketing</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Contact Us</h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <svg width="18" height="18" className="text-[#E7E247] mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                <div>
                  <p className="text-slate-400 text-sm">Email Us</p>
                  <a href="mailto:hello@premiumbusinesswebsites.com" className="text-white hover:text-[#E7E247] transition-colors font-medium">hello@premiumbusinesswebsites.com</a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <svg width="18" height="18" className="text-[#E7E247] mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                <div>
                  <p className="text-slate-400 text-sm">Call Us</p>
                  <a href="tel:+1234567890" className="text-white hover:text-[#E7E247] transition-colors font-medium">+1 (234) 567-890</a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <svg width="18" height="18" className="text-[#E7E247] mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                <div>
                  <p className="text-slate-400 text-sm">Location</p>
                  <p className="text-white font-medium">New York, NY, USA</p>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal */}
        <div className="pt-10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs font-medium">
            &copy; {new Date().getFullYear()} Premium Business Websites. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-slate-500 hover:text-white text-xs font-medium transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-500 hover:text-white text-xs font-medium transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
