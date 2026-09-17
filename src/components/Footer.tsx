import React from 'react';
import { 
  FileText, 
  ShieldCheck, 
  Heart, 
  Lock, 
  Globe, 
  Twitter, 
  Github, 
  Linkedin, 
  Facebook,
  ExternalLink
} from 'lucide-react';
import { PageView, ToolId } from '../types';
import { TOOLS_DATA } from '../data/toolsData';
import { AdSenseBanner } from './AdSenseBanner';

interface FooterProps {
  onNavigate: (page: PageView, toolId?: ToolId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#1D1D1D] text-gray-400 border-t border-gray-800">
      
      {/* Bottom AdSense Leaderboard Slot */}
      <div className="max-w-6xl mx-auto px-4 pt-10">
        <AdSenseBanner slotType="bottom-leaderboard" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Info & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <div 
              onClick={() => onNavigate('home')}
              className="flex items-center gap-3 cursor-pointer group select-none"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#E63946] to-[#D90429] flex items-center justify-center text-white shadow-md">
                <FileText className="w-5 h-5 stroke-[2.5]" />
              </div>
              <span className="text-xl font-black tracking-tight text-[#E63946] font-heading">
                MY PDF <span className="text-white">CONVERTOR</span>
              </span>
            </div>

            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed max-w-sm">
              MY PDF CONVERTOR provides 100% free, browser-based PDF conversion tools. Fast, secure, and completely private with zero cloud file storage.
            </p>

            {/* Social Media Links */}
            <div className="flex items-center gap-3 pt-2">
              <a 
                href="#social-twitter"
                aria-label="Twitter"
                onClick={(e) => e.preventDefault()}
                className="w-9 h-9 rounded-xl bg-gray-800/80 hover:bg-[#E63946] text-gray-300 hover:text-white flex items-center justify-center transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a 
                href="#social-facebook"
                aria-label="Facebook"
                onClick={(e) => e.preventDefault()}
                className="w-9 h-9 rounded-xl bg-gray-800/80 hover:bg-[#E63946] text-gray-300 hover:text-white flex items-center justify-center transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a 
                href="#social-linkedin"
                aria-label="LinkedIn"
                onClick={(e) => e.preventDefault()}
                className="w-9 h-9 rounded-xl bg-gray-800/80 hover:bg-[#E63946] text-gray-300 hover:text-white flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href="#social-github"
                aria-label="GitHub"
                onClick={(e) => e.preventDefault()}
                className="w-9 h-9 rounded-xl bg-gray-800/80 hover:bg-[#E63946] text-gray-300 hover:text-white flex items-center justify-center transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Popular Tools */}
          <div>
            <h4 className="text-xs font-black tracking-widest text-white uppercase mb-4 font-heading">
              Convert from PDF
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('tool', 'pdf-to-word')}
                  className="hover:text-white transition-colors"
                >
                  PDF to Word (DOCX)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('tool', 'pdf-to-excel')}
                  className="hover:text-white transition-colors"
                >
                  PDF to Excel (XLSX)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('tool', 'pdf-to-powerpoint')}
                  className="hover:text-white transition-colors"
                >
                  PDF to PowerPoint (PPTX)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('tool', 'pdf-to-jpg')}
                  className="hover:text-white transition-colors"
                >
                  PDF to JPG Images
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('tool', 'pdf-to-pdfa')}
                  className="hover:text-white transition-colors"
                >
                  PDF to PDF/A Archival
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Create PDF Tools */}
          <div>
            <h4 className="text-xs font-black tracking-widest text-white uppercase mb-4 font-heading">
              Convert to PDF
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('tool', 'word-to-pdf')}
                  className="hover:text-white transition-colors"
                >
                  Word to PDF
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('tool', 'excel-to-pdf')}
                  className="hover:text-white transition-colors"
                >
                  Excel to PDF
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('tool', 'powerpoint-to-pdf')}
                  className="hover:text-white transition-colors"
                >
                  PowerPoint to PDF
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('tool', 'jpg-to-pdf')}
                  className="hover:text-white transition-colors"
                >
                  JPG to PDF
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('tool', 'html-to-pdf')}
                  className="hover:text-white transition-colors"
                >
                  HTML to PDF
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Company & Legal */}
          <div>
            <h4 className="text-xs font-black tracking-widest text-white uppercase mb-4 font-heading">
              Company & Legal
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-white transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-white transition-colors"
                >
                  Contact Support
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('privacy')}
                  className="hover:text-white transition-colors"
                >
                  Privacy Policy (GDPR)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('terms')}
                  className="hover:text-white transition-colors"
                >
                  Terms of Service
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('dmca')}
                  className="hover:text-white transition-colors"
                >
                  DMCA Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('blog')}
                  className="hover:text-white transition-colors"
                >
                  Guides & Tutorials
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar & Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} MY PDF CONVERTOR. All rights reserved.</p>
          <div className="flex items-center gap-4 text-gray-500">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
              <span>SSL 256-Bit Encrypted</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5 text-blue-400" />
              <span>Zero Server Retention</span>
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
