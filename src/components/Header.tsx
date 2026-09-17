import React, { useState } from 'react';
import { 
  FileText, 
  Menu, 
  X, 
  History, 
  ChevronDown, 
  Sparkles, 
  ShieldCheck, 
  Search,
  Zap
} from 'lucide-react';
import { TOOLS_DATA } from '../data/toolsData';
import { PageView, ToolId } from '../types';

interface HeaderProps {
  currentPage: PageView;
  selectedToolId: ToolId | null;
  historyCount: number;
  onNavigate: (page: PageView, toolId?: ToolId) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  selectedToolId,
  historyCount,
  onNavigate
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [toolsDropdownOpen, setToolsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTools = TOOLS_DATA.filter(t => 
    t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    t.fromFormat.toLowerCase().includes(searchQuery.toLowerCase()) ||
    t.toFormat.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleToolSelect = (toolId: ToolId) => {
    onNavigate('tool', toolId);
    setToolsDropdownOpen(false);
    setMobileMenuOpen(false);
    setSearchQuery('');
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div 
            onClick={() => onNavigate('home')}
            className="flex items-center gap-3 cursor-pointer group select-none"
            id="header-logo"
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#E63946] to-[#D90429] flex items-center justify-center text-white shadow-md shadow-red-200 group-hover:scale-105 transition-transform">
              <FileText className="w-6 h-6 stroke-[2.5]" />
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-black tracking-tight text-[#E63946] drop-shadow-[0_1px_1px_rgba(0,0,0,0.85)] font-heading">
                MY PDF <span className="text-[#1D1D1D] drop-shadow-none">CONVERTOR</span>
              </span>
              <p className="text-[10px] font-semibold text-gray-500 tracking-wider uppercase -mt-1 hidden sm:block">
                100% Free Multi-Tool Converter
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-3">
            <button
              onClick={() => onNavigate('home')}
              id="nav-link-home"
              className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors ${
                currentPage === 'home' && !selectedToolId
                  ? 'text-[#E63946] bg-red-50'
                  : 'text-gray-700 hover:text-[#E63946] hover:bg-gray-50'
              }`}
            >
              Home
            </button>

            {/* All Tools Dropdown */}
            <div className="relative">
              <button
                onClick={() => setToolsDropdownOpen(!toolsDropdownOpen)}
                id="nav-link-all-tools"
                className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center gap-1.5 ${
                  currentPage === 'tool' || toolsDropdownOpen
                    ? 'text-[#E63946] bg-red-50'
                    : 'text-gray-700 hover:text-[#E63946] hover:bg-gray-50'
                }`}
              >
                <span>All 10 Tools</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${toolsDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {toolsDropdownOpen && (
                <div 
                  className="absolute left-0 mt-2 w-80 lg:w-96 bg-white rounded-xl shadow-2xl border border-gray-100 p-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                  onMouseLeave={() => setToolsDropdownOpen(false)}
                >
                  <div className="p-2 border-b border-gray-100 mb-2">
                    <div className="relative">
                      <Search className="w-4 h-4 text-gray-400 absolute left-2.5 top-2.5" />
                      <input
                        type="text"
                        placeholder="Search conversion tool..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-8 pr-3 py-1.5 bg-gray-50 border border-gray-200 rounded-lg text-xs focus:outline-none focus:border-red-500 focus:bg-white"
                        autoFocus
                      />
                    </div>
                  </div>

                  <div className="max-h-80 overflow-y-auto space-y-1">
                    {filteredTools.map((tool) => (
                      <button
                        key={tool.id}
                        onClick={() => handleToolSelect(tool.id)}
                        className="w-full text-left p-2 rounded-lg hover:bg-red-50 group flex items-center justify-between transition-colors"
                      >
                        <div className="flex items-center gap-2.5">
                          <div 
                            className="w-7 h-7 rounded-md flex items-center justify-center text-white text-xs font-bold"
                            style={{ backgroundColor: tool.color }}
                          >
                            {tool.fromFormat.slice(0, 3)}
                          </div>
                          <div>
                            <p className="text-xs font-bold text-gray-900 group-hover:text-[#E63946]">
                              {tool.name}
                            </p>
                            <p className="text-[11px] text-gray-500 line-clamp-1">
                              {tool.shortDesc}
                            </p>
                          </div>
                        </div>
                        {tool.badge && (
                          <span className="text-[10px] bg-red-100 text-[#E63946] px-1.5 py-0.5 rounded font-bold">
                            {tool.badge}
                          </span>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => onNavigate('about')}
              id="nav-link-about"
              className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors ${
                currentPage === 'about'
                  ? 'text-[#E63946] bg-red-50'
                  : 'text-gray-700 hover:text-[#E63946] hover:bg-gray-50'
              }`}
            >
              About
            </button>

            <button
              onClick={() => onNavigate('contact')}
              id="nav-link-contact"
              className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors ${
                currentPage === 'contact'
                  ? 'text-[#E63946] bg-red-50'
                  : 'text-gray-700 hover:text-[#E63946] hover:bg-gray-50'
              }`}
            >
              Contact
            </button>

            <button
              onClick={() => onNavigate('blog')}
              id="nav-link-blog"
              className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors ${
                currentPage === 'blog'
                  ? 'text-[#E63946] bg-red-50'
                  : 'text-gray-700 hover:text-[#E63946] hover:bg-gray-50'
              }`}
            >
              Guides & Blog
            </button>
          </nav>

          {/* Action Right: History + CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => onNavigate('history')}
              id="nav-link-history"
              className="relative p-2.5 text-gray-600 hover:text-[#E63946] hover:bg-red-50 rounded-xl transition-colors"
              title="View Conversion History"
            >
              <History className="w-5 h-5" />
              {historyCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#E63946] text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white shadow-sm">
                  {historyCount}
                </span>
              )}
            </button>

            <button
              onClick={() => {
                if (currentPage !== 'home') onNavigate('home');
                const toolsSection = document.getElementById('tools-grid-section');
                if (toolsSection) {
                  toolsSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              id="header-cta-choose-tool"
              className="bg-[#E63946] hover:bg-[#D90429] text-white px-4 py-2.5 rounded-xl font-bold text-sm shadow-md shadow-red-200 hover:shadow-lg hover:shadow-red-300 transition-all flex items-center gap-1.5"
            >
              <Zap className="w-4 h-4 fill-white" />
              <span>Convert Now</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => onNavigate('history')}
              className="relative p-2 text-gray-700"
              title="Conversion History"
            >
              <History className="w-5 h-5" />
              {historyCount > 0 && (
                <span className="absolute 0 top-0 right-0 bg-[#E63946] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {historyCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-700 hover:text-[#E63946] focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 px-4 pt-2 pb-6 space-y-3">
          <div className="relative mb-3">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
            <input
              type="text"
              placeholder="Search 10 tools (Word, Excel, JPG...)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm"
            />
          </div>

          <div className="grid grid-cols-2 gap-2 pb-2">
            <button
              onClick={() => { onNavigate('home'); setMobileMenuOpen(false); }}
              className="text-left px-3 py-2 text-sm font-semibold rounded-lg bg-gray-50 text-gray-800"
            >
              Home
            </button>
            <button
              onClick={() => { onNavigate('history'); setMobileMenuOpen(false); }}
              className="text-left px-3 py-2 text-sm font-semibold rounded-lg bg-gray-50 text-gray-800"
            >
              History ({historyCount})
            </button>
            <button
              onClick={() => { onNavigate('about'); setMobileMenuOpen(false); }}
              className="text-left px-3 py-2 text-sm font-semibold rounded-lg bg-gray-50 text-gray-800"
            >
              About Us
            </button>
            <button
              onClick={() => { onNavigate('contact'); setMobileMenuOpen(false); }}
              className="text-left px-3 py-2 text-sm font-semibold rounded-lg bg-gray-50 text-gray-800"
            >
              Contact Us
            </button>
            <button
              onClick={() => { onNavigate('blog'); setMobileMenuOpen(false); }}
              className="text-left px-3 py-2 text-sm font-semibold rounded-lg bg-gray-50 text-gray-800"
            >
              Blog & Guides
            </button>
            <button
              onClick={() => { onNavigate('privacy'); setMobileMenuOpen(false); }}
              className="text-left px-3 py-2 text-sm font-semibold rounded-lg bg-gray-50 text-gray-800"
            >
              Privacy Policy
            </button>
          </div>

          <div className="pt-2 border-t border-gray-100">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
              All 10 Conversion Tools
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 max-h-60 overflow-y-auto">
              {filteredTools.map(t => (
                <button
                  key={t.id}
                  onClick={() => handleToolSelect(t.id)}
                  className="flex items-center gap-2 text-left p-2 rounded-lg hover:bg-red-50 text-xs font-medium text-gray-800"
                >
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: t.color }}></span>
                  <span>{t.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
