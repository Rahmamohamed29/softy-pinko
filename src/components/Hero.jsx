import React from 'react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-48 pb-56 text-white text-center overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1600&q=80')`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#b057d6]/85 via-[#8261ee]/85 to-[#6b5ce7]/90"></div>

      <div className="max-w-[780px] mx-auto px-6 relative z-10">
        <h1 className="text-[32px] md:text-[42px] font-bold leading-[1.3] mb-5 tracking-tight">
          We provide the best strategy <br />
          to grow up your business
        </h1>
        <p className="text-white/95 text-[14px] md:text-[15px] leading-[1.7] mb-8 max-w-[540px] mx-auto font-normal">
          Softy Pinko is a professional Bootstrap 4.0 theme designed by Template Mo for your company at absolutely free of charge
        </p>
        <a
          href="#features"
          className="inline-block bg-[#ff589e] hover:bg-[#e8488b] text-white text-[12px] font-semibold px-7 py-3.5 rounded-full transition-all duration-300 uppercase tracking-wider shadow-lg hover:-translate-y-0.5"
        >
          DISCOVER MORE
        </a>
      </div>
    </section>
  );
}