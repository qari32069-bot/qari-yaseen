/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Flavours } from './components/Flavours';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Gallery } from './components/Gallery';
import { Location } from './components/Location';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';

export default function App() {
  return (
    <div className="min-h-screen bg-[#080808] text-neutral-100 flex flex-col font-sans selection:bg-amber-500 selection:text-black">
      {/* Top Sticky Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero />
        <Flavours />
        <About />
        <Experience />
        <Gallery />
        <Location />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Floating Quick Action Bar */}
      <FloatingActions />
    </div>
  );
}
