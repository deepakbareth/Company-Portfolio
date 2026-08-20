import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Services from '../components/sections/Services';
import Portfolio from '../components/sections/Portfolio';

export default function Home() {
  const [contactOpen, setContactOpen] = useState(false);
  const [contactDetails, setContactDetails] = useState(null);

  const handleOpenContactWithDetails = (details) => {
    setContactDetails(details);
    setContactOpen(true);
  };

  const handleOpenContactGeneric = () => {
    setContactDetails(null);
    setContactOpen(true);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      {/* Sticky Header Navbar */}
      <Navbar onOpenContact={handleOpenContactGeneric} />

      {/* Main Content Areas */}
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
      </main>

    </div>
  );
}
