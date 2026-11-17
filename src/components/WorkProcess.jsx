import React from 'react';
import { Lightbulb, Code, Rocket, Settings, RefreshCw, CheckCircle } from 'lucide-react';

const StepCard = ({ number, icon: Icon, title, description }) => (
  <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 text-center relative flex-shrink-0 w-full sm:w-[calc(50%-1rem)] lg:w-[calc(16.666%-0.84rem)] hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group cursor-pointer">
    <span className="absolute top-3 right-3 text-[10px] font-bold text-[#7857fe] bg-[#f8f9ff] px-2.5 py-1 rounded-full group-hover:bg-[#7857fe] group-hover:text-white transition-colors">
      {number}
    </span>
    <div className="w-12 h-12 bg-[#f8f9ff] text-[#7857fe] rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
      <Icon size={24} />
    </div>
    <h4 className="font-bold text-gray-800 text-sm mb-2">{title}</h4>
    <p className="text-gray-500 text-[11px] leading-relaxed">{description}</p>
  </div>
);

export default function WorkProcess() {
  const steps = [
    { number: '01', icon: Lightbulb, title: 'Get Ideas', description: 'Godard pabst prism farm cliche.' },
    { number: '02', icon: Code, title: 'Sketch Up', description: 'Godard pabst prism farm cliche.' },
    { number: '03', icon: Settings, title: 'Discuss', description: 'Godard pabst prism farm cliche.' },
    { number: '04', icon: Rocket, title: 'Revise', description: 'Godard pabst prism farm cliche.' },
    { number: '05', icon: RefreshCw, title: 'Approve', description: 'Godard pabst prism farm cliche.' },
    { number: '06', icon: CheckCircle, title: 'Launch', description: 'Godard pabst prism farm cliche.' },
  ];

  return (
    <section id="work-process" className="py-24 bg-[#f8f9ff]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-3">Work Process</h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-12 text-sm">
          Aenean nec tempor metus. Maecenas ligula dolor, commodo in imperdiet interdum, vehicula ut ex.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {steps.map((step, index) => (
            <StepCard
              key={index}
              number={step.number}
              icon={step.icon}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}