import React from 'react';
import { MessageSquare, Users, TrendingUp, Handshake } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pb-20 border-b border-gray-100">
          
          <div className="flex justify-center">
            <div className="relative w-64 h-64 bg-[#f8f9ff] rounded-full flex items-center justify-center text-[#7857fe] shadow-inner group hover:scale-105 transition-transform duration-300">
              <Users size={110} strokeWidth={1.5} />
              <div className="absolute -top-2 right-6 bg-white p-3 rounded-2xl shadow-lg text-[#7857fe]">
                <MessageSquare size={32} strokeWidth={2} />
              </div>
            </div>
          </div>

          <div className="text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Let’s discuss about you project
            </h2>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed">
              Nullam sit amet purus libero. Etiam ullamcorper nisl ut augue blandit, at finibus leo efficitur. Nam gravida purus non sapien auctor, ut aliquam magna ullamcorper.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-20">
          
          <div className="text-left order-2 lg:order-1">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              We can help you to grow your business
            </h2>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed">
              Aenean pretium, ipsum et porttitor auctor, metus ipsum iaculis nisi, a bibendum lectus libero vitae urna. Sed id leo eu dolor luctus congue sed eget ipsum. Nunc nec luctus libero. Etiam quis dolor elit.
            </p>
          </div>

          <div className="flex justify-center order-1 lg:order-2">
            <div className="relative w-64 h-64 bg-[#f8f9ff] rounded-full flex items-center justify-center text-[#7857fe] shadow-inner group hover:scale-105 transition-transform duration-300">
              <Handshake size={110} strokeWidth={1.5} />
              <div className="absolute -top-2 left-6 bg-white p-3 rounded-2xl shadow-lg text-[#7857fe]">
                <TrendingUp size={32} strokeWidth={2} />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}