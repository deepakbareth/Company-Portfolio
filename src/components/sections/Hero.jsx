import React from 'react';

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#0A192F] bg-grid-pattern flex flex-col items-center justify-center overflow-hidden text-white pt-20 pb-20">

      {/* Floating Image 1 (Top Left) */}
      <div className="absolute top-[20%] left-[10%] w-48 h-32 rounded-lg overflow-hidden shadow-2xl animate-float opacity-90 hover:opacity-100 transition-opacity hidden md:block" style={{ animationDelay: '0s' }}>
        <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&q=80" alt="Web Dev" className="w-full h-full object-cover" />
      </div>

      {/* Floating Image 2 (Top Right) */}
      <div className="absolute top-[15%] right-[15%] w-32 h-32 rounded-lg overflow-hidden shadow-2xl animate-float opacity-90 hover:opacity-100 transition-opacity hidden md:block" style={{ animationDelay: '1s' }}>
        <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=400&q=80" alt="Code" className="w-full h-full object-cover" />
      </div>

      {/* Floating Image 3 (Mid Left) */}
      <div className="absolute top-[50%] left-[5%] w-36 h-36 rounded-lg overflow-hidden shadow-2xl animate-float opacity-90 hover:opacity-100 transition-opacity hidden lg:block" style={{ animationDelay: '2s' }}>
        <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=400&q=80" alt="Setup" className="w-full h-full object-cover" />
      </div>

      {/* Floating Image 4 (Bottom Left) */}
      <div className="absolute bottom-[20%] left-[15%] w-56 h-40 rounded-lg overflow-hidden shadow-2xl animate-float opacity-90 hover:opacity-100 transition-opacity hidden md:block" style={{ animationDelay: '0.5s' }}>
        <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=80" alt="Analytics" className="w-full h-full object-cover" />
      </div>

      {/* Floating Image 5 (Bottom Right) */}
      <div className="absolute bottom-[25%] right-[10%] w-64 h-48 rounded-lg overflow-hidden shadow-2xl animate-float opacity-90 hover:opacity-100 transition-opacity hidden md:block" style={{ animationDelay: '1.5s' }}>
        <img src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=400&q=80" alt="Design" className="w-full h-full object-cover" />
      </div>

      {/* Floating Image 6 (Mid Right) */}
      <div className="absolute top-[40%] right-[5%] w-40 h-40 rounded-lg overflow-hidden shadow-2xl animate-float opacity-90 hover:opacity-100 transition-opacity hidden lg:block" style={{ animationDelay: '2.5s' }}>
        <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80" alt="Dashboard" className="w-full h-full object-cover" />
      </div>

      {/* Central Content */}
      <div className="relative z-10 text-center flex flex-col items-center max-w-5xl mx-auto px-4 mt-8">

        {/* Main Text Updated from Image */}
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter leading-[1] flex flex-col items-center break-words w-full">
          <span className="drop-shadow-lg">PREMIUM</span>
          <span className="drop-shadow-lg mt-2 text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">BUSINESS WEBSITES</span>
        </h1>

        {/* Subheading Text Updated from Image */}
        <p className="mt-8 text-base sm:text-lg md:text-xl font-medium text-slate-300 max-w-md md:max-w-xl text-center">
          We craft high-performance, conversion-driven websites for growing businesses and modern enterprises.
        </p>

        {/* Call to Action Button */}
        <button className="mt-10 bg-white text-[#0A192F] hover:bg-slate-200 text-xs font-bold tracking-widest uppercase px-10 py-4 rounded-full flex items-center gap-3 transition-all active:scale-95 shadow-xl">
          START A PROJECT
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
        </button>
      </div>

      {/* Bottom Marquee Slider - Updated to match context */}
      <div className="absolute bottom-0 left-0 right-0 bg-slate-200 text-[#0A192F] py-2 md:py-3 overflow-hidden flex w-full border-t border-slate-900">
        <div className="animate-marquee flex items-center text-xl md:text-4xl font-black tracking-tighter whitespace-nowrap">
          {/* Repeating Groups */}
          {[...Array(4)].map((_, i) => (
            <React.Fragment key={i}>
              <span className="mx-4">WEB DESIGN</span><span className="mx-4 opacity-50">◈</span>
              <span className="mx-4">DEVELOPMENT</span><span className="mx-4 opacity-50">◈</span>
              <span className="mx-4">E-COMMERCE</span><span className="mx-4 opacity-50">◈</span>
              <span className="mx-4">SEO</span><span className="mx-4 opacity-50">◈</span>
              <span className="mx-4">BRANDING</span><span className="mx-4 opacity-50">◈</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}