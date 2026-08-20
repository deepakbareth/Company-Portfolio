import React from 'react';

// Extracted from https://premiumbusinesswebsites.com/our-work/
const projects = [
  { name: 'The Westhampton Beach Project', url: 'https://www.whbprojectbycolucci.com/', image: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=600&q=80' },
  { name: 'Insurance Solutions With Fred', url: 'https://insurancesolutionswithfred.com/', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80' },
  { name: 'Campfire Dreams', url: 'https://www.campfiredreams.com/', image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80' },
  { name: 'Vacation Canyon Lake', url: 'https://canyonlakevacation.com/', image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80' },
  { name: 'Coastal Carolina Plumbing', url: 'https://coastalcarolinaplumbingservices.com/', image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=600&q=80' },
  { name: 'Quinta Anabtawi', url: 'https://www.quintamendoza.com/', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80' },
  { name: 'Steven Colucci Arts', url: 'https://www.stevencolucciarts.com/', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80' },
  { name: 'Tehillim Olumi', url: 'https://tehillimolumi.us/', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80' },
  { name: 'The Palms of Mobay', url: 'https://www.thepalmsofmobay.com/', image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80' },
];

export default function Portfolio() {
  return (
    <section id="work" className="py-24 px-6 md:px-12 lg:px-24 bg-[#071324] relative">
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-slate-700 bg-slate-900/50 backdrop-blur-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-[#E7E247] animate-pulse"></span>
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-300">Our Work</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white">
              Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500">Projects.</span>
            </h2>
          </div>
          <button className="hidden md:flex bg-transparent border border-white text-white hover:bg-white hover:text-[#071324] text-xs font-bold tracking-widest uppercase px-8 py-4 rounded-full items-center gap-3 transition-all active:scale-95 whitespace-nowrap">
            VIEW ALL WORK
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </button>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <a 
              key={index} 
              href={project.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group block relative rounded-2xl overflow-hidden bg-slate-900 shadow-2xl"
            >
              {/* Image Container */}
              <div className="relative h-72 w-full overflow-hidden">
                <div className="absolute inset-0 bg-[#0A192F]/60 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.name} 
                  className="w-full h-full object-cover transform scale-105 group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* View Project Pill (Appears on Hover) */}
                <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white text-[#0A192F] text-xs font-bold tracking-widest uppercase px-6 py-3 rounded-full shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    Visit Live Site
                  </div>
                </div>
              </div>

              {/* Text Bar */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-xl font-bold text-white leading-tight">{project.name}</h3>
                <p className="text-xs font-medium text-slate-300 mt-1 uppercase tracking-wider">{new URL(project.url).hostname.replace('www.', '')}</p>
              </div>
            </a>
          ))}
        </div>

        <button className="md:hidden w-full mt-12 bg-transparent border border-white text-white hover:bg-white hover:text-[#071324] text-xs font-bold tracking-widest uppercase px-8 py-4 rounded-full flex justify-center items-center gap-3 transition-all active:scale-95">
          VIEW ALL WORK
        </button>

      </div>
    </section>
  );
}
