import React from 'react';

const PricingCard = ({ title, price, features }) => (
  <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 flex flex-col justify-between text-center hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
    <div>
      <h3 className="text-xl font-bold text-gray-800 mb-4">{title}</h3>
      <div className="text-4xl font-extrabold text-[#7857fe] mb-1">
        ${price}
      </div>
      <span className="text-xs text-gray-400 uppercase tracking-widest block mb-6">monthly</span>
      <ul className="space-y-3 text-sm text-gray-600 mb-8">
        {features.map((feat, idx) => (
          <li key={idx} className="border-b border-gray-50 pb-2">{feat}</li>
        ))}
      </ul>
    </div>
    <button className="w-full py-3 rounded-full font-semibold text-sm transition-all shadow-md bg-[#7857fe] text-white hover:bg-[#6542fe]">
      PURCHASE NOW
    </button>
  </div>
);

export default function Pricing() {
  const plans = [
    {
      title: 'Starter',
      price: '14.50',
      features: ['60 GB space', '600 GB transfer', 'Pro Design Panel', '15-minute support', 'Unlimited Emails'],
    },
    {
      title: 'Premium',
      price: '21.50',
      features: ['120 GB space', '1200 GB transfer', 'Pro Design Panel', '15-minute support', '24/7 Security'],
    },
    {
      title: 'Advanced',
      price: '42.00',
      features: ['250 GB space', '5000 GB transfer', 'Pro Design Panel', '15-minute support', 'Unlimited Emails'],
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Pricing Plans</h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-12 text-sm">
          Donec vulputate urna sed rutrum venenatis. Cras consequat magna quis arcu rutrum efficitur.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {plans.map((plan, index) => (
            <PricingCard
              key={index}
              title={plan.title}
              price={plan.price}
              features={plan.features}
            />
          ))}
        </div>
      </div>
    </section>
  );
}