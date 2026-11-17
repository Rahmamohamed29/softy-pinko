import React from 'react';

export default function Features() {
  const features = [
    {
      title: 'Modern Strategy',
      description: 'Customize anything in this template to fit your website needs',
      icon: 'https://cdn-icons-png.flaticon.com/512/1256/1256650.png',
    },
    {
      title: 'Best Relationship',
      description: 'Contact us immediately if you have a question in mind',
      icon: 'https://cdn-icons-png.flaticon.com/512/1256/1256650.png',
    },
    {
      title: 'Ultimate Marketing',
      description: 'You just need to tell your friends about our free templates',
      icon: 'https://cdn-icons-png.flaticon.com/512/1256/1256650.png',
    },
  ];

  return (
    <section id="features" className="relative z-20 -mt-36 pb-20">
      <div className="max-w-[1140px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-[20px] p-9 shadow-[0_2px_48px_0_rgba(0,0,0,0.08)] hover:shadow-[0_15px_40px_0_rgba(120,87,254,0.16)] text-center group hover:-translate-y-2 transition-all duration-300 cursor-pointer"
            >
              {/* الدائرة البنفسجية وجواها صورة عادية */}
              <div className="w-[90px] h-[90px] bg-[#7857fe] group-hover:bg-[#ff589e] transition-colors duration-300 rounded-full flex items-center justify-center mx-auto mb-7 shadow-md">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-11 h-11 object-contain brightness-0 invert group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              <h3 className="text-[18px] font-semibold text-[#1e1e1e] mb-4 group-hover:text-[#7857fe] transition-colors duration-300">
                {item.title}
              </h3>

              <p className="text-[13px] text-[#777] leading-[1.8]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}