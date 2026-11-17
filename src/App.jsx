import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import WorkProcess from './components/WorkProcess';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Counter from './components/Counter';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="font-sans antialiased bg-white text-gray-800">
      <Navbar />
      <Hero />
      <Features />
      <About />
      <WorkProcess />
      <Testimonials />
      <Pricing />
      <Counter />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}