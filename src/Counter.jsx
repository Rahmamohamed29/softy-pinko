import React from 'react';

export default function Counter() {
  const stats = [
    { number: '126', label: 'Projects' },
    { number: '63', label: 'Happy Clients' },
    { number: '126', label: 'Awards Wins' },
    { number: '27', label: 'Countries' },
  ];

  return (
    <section className="py-20 bg-gradient-to-tr from-[#7857fe] to-[#91f1ff] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="relative">
              <h3 className="text-4xl md:text-5xl font-black mb-2 tracking-tight">{stat.number}</h3>
              <p className="text-white/90 text-sm md:text-base font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}