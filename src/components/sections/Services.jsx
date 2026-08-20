import React from 'react';
import { Megaphone, Code, User, MousePointerClick, Share2, Search, Smartphone, Cpu } from 'lucide-react';

const services = [
  {
    title: 'Digital Marketing',
    description: 'Modern online marketing methods to scale your reach and drive measurable results.',
    icon: <Megaphone size={32} className="text-[#E7E247]" />
  },
  {
    title: 'Web Development',
    description: 'Cutting-edge development using PHP, ASP.Net, and latest scalable technologies.',
    icon: <Code size={32} className="text-[#E7E247]" />
  },
  {
    title: 'Personal Website Design',
    description: 'Custom-tailored, magnificent layouts designed specifically for your personal branding.',
    icon: <User size={32} className="text-[#E7E247]" />
  },
  {
    title: 'PPC Management',
    description: 'Data-driven Pay Per Click and Paid Search Advertising to maximize your ROI.',
    icon: <MousePointerClick size={32} className="text-[#E7E247]" />
  },
  {
    title: 'Social Media Optimization',
    description: 'Optimizing visibility and engagement across all major social communities.',
    icon: <Share2 size={32} className="text-[#E7E247]" />
  },
  {
    title: 'Search Engine Optimization',
    description: 'Advanced SEO strategies to boost organic search visibility and rank higher.',
    icon: <Search size={32} className="text-[#E7E247]" />
  },
  {
    title: 'Mobile App Development',
    description: 'Cross-platform, highly responsive mobile application design and engineering.',
    icon: <Smartphone size={32} className="text-[#E7E247]" />
  },
  {
    title: 'Custom Software Development',
    description: 'Bespoke software solutions built to give your business a true competitive advantage.',
    icon: <Cpu size={32} className="text-[#E7E247]" />
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 md:px-12 lg:px-24 bg-[#0A192F] relative border-t border-white/5">
      
      {/* Background Decor */}
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-slate-700 bg-slate-900/50 backdrop-blur-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-[#E7E247] animate-pulse"></span>
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-300">Our Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white mb-6">
            Everything you need to <br/> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500">scale your business.</span>
          </h2>
          <p className="text-lg text-slate-400">
            We provide a fully transparent view of your business, making it more alert and agile in a turbulent environment.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 backdrop-blur-sm p-8 rounded-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer flex flex-col"
            >
              <div className="w-14 h-14 rounded-full bg-[#0A192F] border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4 leading-tight">{service.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed flex-grow">
                {service.description}
              </p>
              
              {/* Fake 'Learn More' Link */}
              <div className="mt-6 flex items-center text-[#E7E247] text-xs font-bold tracking-widest uppercase opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                Learn More 
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
