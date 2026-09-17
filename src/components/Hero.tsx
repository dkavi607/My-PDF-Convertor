import React from 'react';
import { 
  ShieldCheck, 
  Zap, 
  Gift, 
  ArrowRight, 
  FileCheck2, 
  Sparkles,
  Lock,
  CheckCircle2,
  Users
} from 'lucide-react';
import { ToolId } from '../types';

interface HeroProps {
  onSelectTool: (toolId: ToolId) => void;
  onScrollToTools: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onSelectTool, onScrollToTools }) => {
  const popularPills: { id: ToolId; name: string; tag: string }[] = [
    { id: 'pdf-to-word', name: 'PDF to Word', tag: 'Most Popular' },
    { id: 'pdf-to-excel', name: 'PDF to Excel', tag: 'Data' },
    { id: 'word-to-pdf', name: 'Word to PDF', tag: 'Essential' },
    { id: 'jpg-to-pdf', name: 'JPG to PDF', tag: 'Image' },
    { id: 'pdf-to-pdfa', name: 'PDF to PDF/A', tag: 'Archival' }
  ];

  return (
    <section className="relative overflow-hidden pt-12 pb-16 lg:pt-20 lg:pb-24 bg-gradient-to-b from-white via-red-50/30 to-[#F8F9FA]">
      {/* Decorative subtle background accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 pointer-events-none opacity-40">
        <div className="absolute top-10 left-10 w-72 h-72 bg-red-200/50 rounded-full blur-3xl"></div>
        <div className="absolute top-20 right-10 w-80 h-80 bg-rose-100/60 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Top Trust Ribbon */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200 text-[#E63946] text-xs font-bold mb-6 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 fill-[#E63946]" />
          <span>Professional Multi-Tool PDF Suite • Zero Registration Needed</span>
        </div>

        {/* Large Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#1D1D1D] tracking-tight leading-tight max-w-4xl mx-auto font-heading">
          Convert PDF Files Online <br className="hidden sm:block" />
          <span className="text-[#E63946] relative inline-block">
            Free & Easy
            <svg
              className="absolute -bottom-2 left-0 w-full h-3 text-red-300 -z-10"
              viewBox="0 0 100 12"
              preserveAspectRatio="none"
            >
              <path d="M0,8 Q50,0 100,8" stroke="currentColor" strokeWidth="4" fill="none" />
            </svg>
          </span>
        </h1>

        {/* Subheading */}
        <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          100% Free PDF Conversion Tools — No Registration Required. Fast, accurate, and completely private browser processing.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onScrollToTools}
            id="hero-cta-choose-tool-btn"
            className="w-full sm:w-auto px-8 py-4 bg-[#E63946] hover:bg-[#D90429] text-white font-extrabold text-base rounded-xl shadow-lg shadow-red-300 hover:shadow-xl hover:shadow-red-400 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
          >
            <span>Choose Your Tool</span>
            <ArrowRight className="w-5 h-5 stroke-[2.5]" />
          </button>

          <button
            onClick={() => onSelectTool('pdf-to-word')}
            id="hero-cta-quick-start"
            className="w-full sm:w-auto px-6 py-4 bg-white hover:bg-gray-50 text-[#1D1D1D] border-2 border-gray-200 hover:border-red-300 font-bold text-base rounded-xl shadow-sm transition-all flex items-center justify-center gap-2"
          >
            <FileCheck2 className="w-5 h-5 text-[#E63946]" />
            <span>Try PDF to Word</span>
          </button>
        </div>

        {/* Trust Badges: "Secure", "Fast", "Free" */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
          
          <div className="flex items-center justify-center sm:justify-start gap-3 bg-white p-3.5 rounded-xl border border-gray-200 shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="text-left">
              <p className="text-xs font-extrabold text-gray-900 uppercase tracking-wide">100% Secure</p>
              <p className="text-xs text-gray-500">Client-side zero cloud storage</p>
            </div>
          </div>

          <div className="flex items-center justify-center sm:justify-start gap-3 bg-white p-3.5 rounded-xl border border-gray-200 shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center flex-shrink-0">
              <Zap className="w-5 h-5 fill-amber-500" />
            </div>
            <div className="text-left">
              <p className="text-xs font-extrabold text-gray-900 uppercase tracking-wide">Ultra Fast</p>
              <p className="text-xs text-gray-500">Sub-second instant parsing</p>
            </div>
          </div>

          <div className="flex items-center justify-center sm:justify-start gap-3 bg-white p-3.5 rounded-xl border border-gray-200 shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-red-50 text-[#E63946] flex items-center justify-center flex-shrink-0">
              <Gift className="w-5 h-5" />
            </div>
            <div className="text-left">
              <p className="text-xs font-extrabold text-gray-900 uppercase tracking-wide">Always Free</p>
              <p className="text-xs text-gray-500">No subscription or signup</p>
            </div>
          </div>

        </div>

        {/* Quick Tool Tags Pills */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2 text-xs">
          <span className="text-gray-400 font-semibold uppercase tracking-wider mr-1">Quick Jump:</span>
          {popularPills.map((pill) => (
            <button
              key={pill.id}
              onClick={() => onSelectTool(pill.id)}
              className="px-3 py-1.5 rounded-lg bg-white hover:bg-red-50 border border-gray-200 hover:border-red-300 text-gray-700 hover:text-[#E63946] font-medium transition-all flex items-center gap-1.5 shadow-2xs"
            >
              <span>{pill.name}</span>
              <span className="text-[10px] text-gray-400 font-normal">({pill.tag})</span>
            </button>
          ))}
        </div>

      </div>
    </section>
  );
};
