import React from 'react';

export default function About() {
  return (
    <section id="about" className="relative py-32 px-6 md:px-12 lg:px-24 bg-[#0A192F] overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-grid-pattern opacity-50 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#E7E247]/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
        
        {/* Left Side: Modern Image Composition */}
        <div className="lg:col-span-6 relative">
          <div className="relative rounded-[2rem] overflow-hidden shadow-2xl group">
            {/* Main Image */}
            <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80" 
              alt="Creative Team" 
              className="w-full h-[500px] object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
            />
            
            {/* Floating Stats Card (Glassmorphism) */}
            <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-auto md:w-[320px] bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 z-20 shadow-2xl transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="text-3xl font-black text-white mb-1">150+</h3>
                  <p className="text-[10px] font-bold tracking-widest text-slate-300 uppercase">Projects</p>
                </div>
                <div>
                  <h3 className="text-3xl font-black text-[#E7E247] mb-1">10+</h3>
                  <p className="text-[10px] font-bold tracking-widest text-slate-300 uppercase">Years Exp.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -left-6 top-1/4 w-12 h-12 border border-slate-700 rounded-full animate-spin-slow opacity-50 hidden md:block"></div>
          <div className="absolute -right-4 top-10 text-slate-700 text-6xl hidden md:block">+</div>
        </div>

        {/* Right Side: Sleek Typography */}
        <div className="lg:col-span-6 flex flex-col items-start lg:pl-10">
          
          {/* Glowing Eyebrow Badge */}
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-slate-700 bg-slate-900/50 backdrop-blur-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-[#E7E247] animate-pulse"></span>
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-300">About Our Agency</span>
          </div>
          
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tighter leading-[1.1] mb-8 text-white">
            We build <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-300 to-slate-600">digital futures.</span>
          </h2>
          
          <div className="space-y-6 text-slate-400 text-lg font-medium leading-relaxed max-w-xl">
            <p>
              With over 10 years of experience, Premium Business Websites is dedicated to integrating cutting-edge technology and tailored marketing strategies. We specialize in custom web design, .NET & PHP development, and high-performance CMS solutions.
            </p>
            <p>
              Our mission is to help businesses grow by providing professional, high-quality digital services at reasonable rates. From robust e-commerce platforms to data-driven SEO and PPC campaigns, we deliver solutions that drive measurable success globally.
            </p>
          </div>

          {/* Action Button */}
          <button className="mt-12 group relative px-8 py-4 bg-white text-[#0A192F] text-xs font-bold tracking-widest uppercase rounded-full overflow-hidden shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:shadow-[0_0_60px_rgba(255,255,255,0.2)] transition-all duration-300">
            <span className="relative z-10 flex items-center gap-3">
              DISCOVER OUR PROCESS
              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </span>
            <div className="absolute inset-0 bg-slate-200 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></div>
          </button>
          
        </div>
      </div>
    </section>
  );
}
