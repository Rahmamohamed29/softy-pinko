import React from 'react';

export default function Counter() {
  const stats = [
    { number: '126', label: 'Projects' },
    { number: '63', label: 'Happy Clients' },
    { number: '18', label: 'Awards Wins' },
    { number: '27', label: 'Countries' },
  ];

  return (
    <section
      className="relative py-28 text-white bg-cover bg-center bg-fixed overflow-hidden"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80')`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#a759d1]/85 via-[#8261ee]/85 to-[#6a7df1]/90"></div>

      <div className="max-w-[1140px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative group py-6 hover:-translate-y-2 transition-transform duration-300"
            >
              {index < stats.length - 1 && (
                <div className="hidden lg:flex items-center justify-center gap-1.5 absolute top-1/2 -right-6 -translate-y-1/2 opacity-60">
                  <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-white"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                </div>
              )}

              <h3 className="text-[42px] md:text-[48px] font-bold mb-2 tracking-tight">
                {stat.number}
              </h3>
              <p className="text-[16px] font-medium text-white/95 tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}