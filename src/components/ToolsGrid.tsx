import React, { useState } from 'react';
import { 
  FileText, 
  Presentation, 
  Table, 
  FileCheck, 
  Image, 
  Images, 
  Code, 
  Archive, 
  ArrowRight,
  Sparkles,
  Layers,
  ArrowRightLeft
} from 'lucide-react';
import { TOOLS_DATA } from '../data/toolsData';
import { ToolDefinition, ToolId, ToolCategory } from '../types';

interface ToolsGridProps {
  onSelectTool: (toolId: ToolId) => void;
}

export const ToolsGrid: React.FC<ToolsGridProps> = ({ onSelectTool }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories: { id: string; label: string; count: number }[] = [
    { id: 'all', label: 'All 10 Tools', count: 10 },
    { id: 'convert-from-pdf', label: 'Convert from PDF', count: 3 },
    { id: 'convert-to-pdf', label: 'Convert to PDF', count: 4 },
    { id: 'image-tools', label: 'Image & Photos', count: 2 },
    { id: 'archival', label: 'Archival & Compliance', count: 1 }
  ];

  const filteredTools = selectedCategory === 'all'
    ? TOOLS_DATA
    : TOOLS_DATA.filter(t => t.category === selectedCategory);

  const renderToolIcon = (iconName: string, color: string) => {
    const props = { className: "w-7 h-7 text-white" };
    switch (iconName) {
      case 'FileText': return <FileText {...props} />;
      case 'Presentation': return <Presentation {...props} />;
      case 'Sheet': return <Table {...props} />;
      case 'FileCheck': return <FileCheck {...props} />;
      case 'Image': return <Image {...props} />;
      case 'Images': return <Images {...props} />;
      case 'Code': return <Code {...props} />;
      case 'Archive': return <Archive {...props} />;
      default: return <FileText {...props} />;
    }
  };

  return (
    <section id="tools-grid-section" className="py-16 bg-[#F8F9FA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-[#E63946] text-xs font-extrabold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Complete Conversion Suite</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#1D1D1D] tracking-tight font-heading">
            Choose a PDF Conversion Tool
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-600">
            Convert to and from PDF documents, Office spreadsheets, presentations, images, and HTML code in seconds.
          </p>

          {/* Category Filter Tabs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 p-1.5 bg-gray-200/70 rounded-2xl max-w-2xl mx-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                id={`filter-tab-${cat.id}`}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-white text-[#E63946] shadow-sm'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-white/50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* 10 Tools Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredTools.map((tool, index) => (
            <div
              key={tool.id}
              onClick={() => onSelectTool(tool.id)}
              id={`tool-card-${tool.id}`}
              className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-red-400 shadow-sm hover:shadow-xl hover:shadow-red-500/10 transition-all duration-300 transform hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Top Card Decor Accent Bar */}
              <div 
                className="absolute top-0 left-0 right-0 h-1.5 transition-all group-hover:h-2"
                style={{ backgroundColor: tool.color }}
              ></div>

              <div>
                {/* Header with Icon and Badge */}
                <div className="flex items-center justify-between mb-5 mt-1">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: tool.color }}
                  >
                    {renderToolIcon(tool.iconName, tool.color)}
                  </div>

                  <div className="flex items-center gap-1.5">
                    {tool.badge && (
                      <span className="text-[11px] font-bold uppercase tracking-wider bg-red-50 text-[#E63946] border border-red-200 px-2.5 py-0.5 rounded-full">
                        {tool.badge}
                      </span>
                    )}
                  </div>
                </div>

                {/* Conversion Direction Pill */}
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-gray-100 text-[11px] font-bold text-gray-700 mb-3">
                  <span className="text-[#E63946]">{tool.fromFormat}</span>
                  <ArrowRightLeft className="w-3 h-3 text-gray-400" />
                  <span className="text-gray-900">{tool.toFormat}</span>
                </div>

                {/* Tool Name */}
                <h3 className="text-xl font-bold text-[#1D1D1D] group-hover:text-[#E63946] transition-colors font-heading mb-2">
                  {tool.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed line-clamp-2 mb-6">
                  {tool.shortDesc}
                </p>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                <span className="text-xs font-semibold text-gray-500 group-hover:text-gray-700">
                  Instant & Free
                </span>
                <button
                  id={`convert-now-btn-${tool.id}`}
                  className="px-4 py-2 bg-red-50 group-hover:bg-[#E63946] text-[#E63946] group-hover:text-white rounded-xl text-xs font-extrabold flex items-center gap-1.5 transition-all shadow-2xs group-hover:shadow-md group-hover:shadow-red-200"
                >
                  <span>Convert Now</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
