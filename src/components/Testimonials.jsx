import React from 'react';
import { Quote } from 'lucide-react';

const TestimonialCard = ({ quote, name, role }) => (
  <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 flex flex-col justify-between hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
    <div>
      <Quote className="text-[#7857fe]/40 mb-4" size={36} />
      <p className="text-gray-600 text-sm leading-relaxed mb-6">{quote}</p>
    </div>
    <div>
      <h4 className="font-bold text-gray-900 text-base">{name}</h4>
      <span className="text-xs text-[#7857fe] font-semibold">{role}</span>
    </div>
  </div>
);

export default function Testimonials() {
  const testimonials = [
    {
      quote: 'Proin a neque nisi. Nam ipsum nisl, venenatis ut nulla quis, egestas scelerisque orci. Maecenas a finibus odio.',
      name: 'Catherine Soft',
      role: 'Managing Director',
    },
    {
      quote: 'Integer molestie aliquam gravida. Nullam nec arcu finibus, imperdiet nulla vitae, placerat nibh. Cras maximus venenatis molestie.',
      name: 'Kelvin Wood',
      role: 'Digital Marketer',
    },
    {
      quote: 'Quisque diam ode, maximus ac consectetur eu, auctor non lorem. Cras quis est et nunc ultrices molestie. Ut vehicula et diam at aliquam.',
      name: 'David Martin',
      role: 'Website Manager',
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-4">What do they say?</h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-16 text-sm">
          Donec tempus, sem non rutrum imperdiet, eros orci fringilla nulla, ut accumsan erat eros a turpis.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <TestimonialCard
              key={index}
              quote={item.quote}
              name={item.name}
              role={item.role}
            />
          ))}
        </div>
      </div>
    </section>
  );
}