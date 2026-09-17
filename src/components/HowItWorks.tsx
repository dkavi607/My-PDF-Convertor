import React from 'react';
import { 
  MousePointerClick, 
  UploadCloud, 
  Zap, 
  Download, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { HOW_IT_WORKS_STEPS } from '../data/toolsData';

export const HowItWorks: React.FC = () => {
  const renderIcon = (iconName: string) => {
    const props = { className: "w-6 h-6 text-white" };
    switch (iconName) {
      case 'MousePointerClick': return <MousePointerClick {...props} />;
      case 'UploadCloud': return <UploadCloud {...props} />;
      case 'Zap': return <Zap {...props} />;
      case 'Download': return <Download {...props} />;
      default: return <Sparkles {...props} />;
    }
  };

  return (
    <section id="how-it-works-section" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 text-[#E63946] text-xs font-extrabold uppercase tracking-wider mb-3">
            <span>Simple 4-Step Process</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#1D1D1D] tracking-tight font-heading">
            How It Works
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-600">
            Convert any document or image in 4 effortless steps without creating an account or waiting in server queues.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {HOW_IT_WORKS_STEPS.map((step, idx) => (
            <div 
              key={step.step}
              className="relative flex flex-col items-center text-center p-6 rounded-2xl bg-[#F8F9FA] border border-gray-200/80 hover:border-red-300 hover:shadow-lg transition-all group"
            >
              {/* Step Number Badge */}
              <div className="absolute -top-4 w-8 h-8 rounded-full bg-[#1D1D1D] text-white font-black text-sm flex items-center justify-center border-2 border-white shadow-md group-hover:bg-[#E63946] transition-colors">
                {step.step}
              </div>

              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#E63946] to-[#D90429] flex items-center justify-center mb-5 shadow-md shadow-red-200 group-hover:scale-110 transition-transform mt-2">
                {renderIcon(step.icon)}
              </div>

              <h3 className="text-lg font-bold text-[#1D1D1D] mb-2 font-heading">
                {step.title}
              </h3>

              <p className="text-sm text-gray-600 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
