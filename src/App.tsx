/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ReactLenis } from 'lenis/react';
import { useState, useEffect } from 'react';

import { CustomCursor } from './components/CustomCursor';
import { Preloader } from './components/Preloader';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Team } from './components/Team';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Services } from './components/Services';
import { Work } from './components/Work';
import { Plans } from './components/Plans';
import { Contact, Footer } from './components/Contact';
import { WhatsAppWidget } from './components/WhatsAppWidget';

export default function App() {
  const [loading, setLoading] = useState(true);

  // Fallback to clear loading state just in case
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ReactLenis root>
      <CustomCursor />
      
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      
      <div className="atmosphere-bg">
        <div className="grid-line v-line left-1/4"></div>
        <div className="grid-line v-line left-2/4"></div>
        <div className="grid-line v-line left-3/4"></div>
        <div className="grid-line h-line top-1/4"></div>
        <div className="grid-line h-line top-2/4"></div>
        <div className="grid-line h-line top-3/4"></div>
      </div>
      
      <Navbar />
      
      <main className="w-full">
        <Hero />
        <Team />
        <WhyChooseUs />
        <Services />
        <Work />
        <Plans />
        <Contact />
      </main>
      
      <Footer />
      <WhatsAppWidget />
    </ReactLenis>
  );
}
