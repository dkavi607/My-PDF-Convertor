import React from 'react';
import { 
  Zap, 
  Sparkles, 
  ShieldCheck, 
  Infinity as InfinityIcon, 
  Laptop, 
  Gift 
} from 'lucide-react';
import { CORE_FEATURES } from '../data/toolsData';

export const FeaturesSection: React.FC = () => {
  const renderIcon = (iconName: string) => {
    const props = { className: "w-6 h-6 text-[#E63946]" };
    switch (iconName) {
      case 'Zap': return <Zap {...props} />;
      case 'Sparkles': return <Sparkles {...props} />;
      case 'ShieldCheck': return <ShieldCheck {...props} />;
      case 'Infinity': return <InfinityIcon {...props} />;
      case 'Laptop': return <Laptop {...props} />;
      case 'Gift': return <Gift {...props} />;
      default: return <Sparkles {...props} />;
    }
  };

  return (
    <section id="features-section" className="py-20 bg-[#F8F9FA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-100 text-[#E63946] text-xs font-extrabold uppercase tracking-wider mb-3">
            <span>Enterprise Quality For Everyone</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#1D1D1D] tracking-tight font-heading">
            Why Choose MY PDF CONVERTOR?
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-600">
            Engineered with strict security standards, high-accuracy format engines, and unrestricted free access.
          </p>
        </div>

        {/* 6 Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CORE_FEATURES.map((feat, idx) => (
            <div
              key={feat.title}
              className="bg-white p-8 rounded-2xl border border-gray-200/90 shadow-sm hover:shadow-xl hover:border-red-300 transition-all group duration-300"
            >
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-red-50 group-hover:bg-red-100 flex items-center justify-center transition-colors">
                  {renderIcon(feat.icon)}
                </div>
                <span className="text-[10px] font-extrabold uppercase tracking-wider bg-gray-100 text-gray-700 group-hover:bg-red-50 group-hover:text-[#E63946] px-2.5 py-1 rounded-full transition-colors">
                  {feat.badge}
                </span>
              </div>

              <h3 className="text-xl font-bold text-[#1D1D1D] mb-3 font-heading group-hover:text-[#E63946] transition-colors">
                {feat.title}
              </h3>

              <p className="text-sm text-gray-600 leading-relaxed">
                {feat.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
