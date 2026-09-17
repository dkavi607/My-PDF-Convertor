import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Mail, 
  Send, 
  CheckCircle2, 
  FileText, 
  BookOpen, 
  History, 
  Trash2, 
  ArrowLeft, 
  Clock, 
  Download,
  Lock,
  Globe,
  Award
} from 'lucide-react';
import { PageView, ConversionHistoryItem, ToolId } from '../types';

interface LegalPagesProps {
  page: PageView;
  historyItems: ConversionHistoryItem[];
  onClearHistory: () => void;
  onNavigateHome: () => void;
  onSelectTool: (toolId: ToolId) => void;
}

export const LegalPages: React.FC<LegalPagesProps> = ({
  page,
  historyItems,
  onClearHistory,
  onNavigateHome,
  onSelectTool
}) => {
  // Contact Form State
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactSubject, setContactSubject] = useState('General Inquiry');
  const [contactMessage, setContactMessage] = useState('');
  const [contactSubmitted, setContactSubmitted] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactName || !contactEmail || !contactMessage) return;
    setContactSubmitted(true);
  };

  const formatBytes = (bytes: number) => {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        
        {/* Back navigation */}
        <button
          onClick={onNavigateHome}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-gray-600 hover:text-[#E63946] mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </button>

        {/* 1. ABOUT US PAGE */}
        {page === 'about' && (
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200 shadow-sm space-y-8">
            <div className="text-center max-w-2xl mx-auto">
              <div className="w-16 h-16 rounded-2xl bg-red-50 text-[#E63946] flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8" />
              </div>
              <h1 className="text-3xl sm:text-4xl font-black text-[#1D1D1D] font-heading">
                About MY PDF CONVERTOR
              </h1>
              <p className="mt-3 text-base text-gray-600">
                Empowering individuals, students, and businesses worldwide with fast, free, and completely private PDF conversion tools.
              </p>
            </div>

            <div className="prose text-gray-700 text-sm sm:text-base leading-relaxed space-y-6 pt-6 border-t border-gray-100">
              <p>
                <strong>MY PDF CONVERTOR</strong> was established to remove unnecessary paywalls, registration bottlenecks, and privacy vulnerabilities from online document management. We believe that converting, organizing, and preparing documents should be seamless, instantaneous, and accessible to everyone.
              </p>

              <h3 className="text-xl font-bold text-[#1D1D1D] font-heading">Our Core Engineering Principles</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 not-prose">
                <div className="p-5 rounded-2xl bg-[#F8F9FA] border border-gray-200">
                  <ShieldCheck className="w-6 h-6 text-[#E63946] mb-2" />
                  <h4 className="font-bold text-gray-900 text-sm mb-1">Zero-Knowledge Privacy</h4>
                  <p className="text-xs text-gray-600">All document conversions are executed strictly in your web browser. No files are uploaded to our servers.</p>
                </div>

                <div className="p-5 rounded-2xl bg-[#F8F9FA] border border-gray-200">
                  <Award className="w-6 h-6 text-[#E63946] mb-2" />
                  <h4 className="font-bold text-gray-900 text-sm mb-1">ISO Standards Quality</h4>
                  <p className="text-xs text-gray-600">Full compliance with ISO 32000 (PDF) and ISO 19005 (PDF/A) archival standards for long-term document fidelity.</p>
                </div>

                <div className="p-5 rounded-2xl bg-[#F8F9FA] border border-gray-200">
                  <Lock className="w-6 h-6 text-[#E63946] mb-2" />
                  <h4 className="font-bold text-gray-900 text-sm mb-1">100% Free Always</h4>
                  <p className="text-xs text-gray-600">No hidden paywalls, file size limits, or credit card requirements for basic or batch operations.</p>
                </div>
              </div>

              <p>
                Our multi-tool platform serves millions of monthly page views across academic institutions, legal practices, medical departments, and creative agencies globally.
              </p>
            </div>
          </div>
        )}

        {/* 2. CONTACT US PAGE */}
        {page === 'contact' && (
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200 shadow-sm">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <div className="w-16 h-16 rounded-2xl bg-red-50 text-[#E63946] flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8" />
              </div>
              <h1 className="text-3xl sm:text-4xl font-black text-[#1D1D1D] font-heading">
                Contact Support & Feedback
              </h1>
              <p className="mt-3 text-base text-gray-600">
                Have a question, feedback, or custom enterprise integration request? Reach out to our engineering team.
              </p>
            </div>

            {contactSubmitted ? (
              <div className="text-center py-10 bg-emerald-50 rounded-2xl p-8 border border-emerald-200">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 font-heading">Message Sent Successfully!</h3>
                <p className="text-sm text-gray-600 mt-2 max-w-md mx-auto">
                  Thank you for reaching out, <strong>{contactName}</strong>. Our support desk will review your inquiry at <strong>{contactEmail}</strong> within 24 business hours.
                </p>
                <button
                  onClick={() => setContactSubmitted(false)}
                  className="mt-6 px-6 py-2.5 bg-emerald-600 text-white rounded-xl text-xs font-bold shadow hover:bg-emerald-700 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-6 max-w-xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-gray-700 mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      className="w-full bg-[#F8F9FA] border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#E63946] focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-gray-700 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@example.com"
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      className="w-full bg-[#F8F9FA] border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#E63946] focus:bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-gray-700 mb-1.5">
                    Inquiry Subject
                  </label>
                  <select
                    value={contactSubject}
                    onChange={(e) => setContactSubject(e.target.value)}
                    className="w-full bg-[#F8F9FA] border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#E63946] focus:bg-white"
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Feature Request / New Tool">Feature Request / New Tool</option>
                    <option value="Bug Report">Bug Report</option>
                    <option value="AdSense & Partnership">AdSense & Partnership Inquiry</option>
                    <option value="Privacy & Legal">Privacy & Compliance</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-gray-700 mb-1.5">
                    Message Details *
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Describe how we can help..."
                    value={contactMessage}
                    onChange={(e) => setContactMessage(e.target.value)}
                    className="w-full bg-[#F8F9FA] border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#E63946] focus:bg-white"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#E63946] hover:bg-[#D90429] text-white font-extrabold text-sm rounded-xl shadow-md shadow-red-200 hover:shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Inquiry</span>
                </button>
              </form>
            )}
          </div>
        )}

        {/* 3. PRIVACY POLICY (GDPR COMPLIANT) */}
        {page === 'privacy' && (
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200 shadow-sm space-y-6">
            <div className="border-b border-gray-100 pb-6 mb-6">
              <span className="text-xs font-bold text-[#E63946] uppercase tracking-wider">GDPR & CCPA Compliant</span>
              <h1 className="text-3xl font-black text-[#1D1D1D] font-heading mt-1">
                Privacy Policy
              </h1>
              <p className="text-xs text-gray-400 mt-1">Last Updated: September 2026</p>
            </div>

            <div className="prose text-gray-700 text-sm leading-relaxed space-y-4">
              <p>
                At <strong>MY PDF CONVERTOR</strong>, your privacy and document confidentiality are our highest priority. This Privacy Policy governs the manner in which MY PDF CONVERTOR collects, uses, maintains, and discloses information collected from users.
              </p>

              <h3 className="text-lg font-bold text-[#1D1D1D]">1. Local File Processing & Zero Server Storage</h3>
              <p>
                Unlike conventional cloud services, all file conversion, text extraction, image rendering, and document compilation take place <strong>entirely inside your browser's local sandbox</strong>. Your documents, images, and spreadsheets are never transmitted to, inspected by, or stored on remote web servers.
              </p>

              <h3 className="text-lg font-bold text-[#1D1D1D]">2. Cookies & Advertising (Google AdSense)</h3>
              <p>
                We use Google AdSense and third-party advertising partners to display advertisements. Google uses cookies, such as the DoubleClick cookie, to serve ads to users based on their visits to our site and other sites on the Internet. Users may opt out of personalized advertising by visiting Google Ads Settings.
              </p>

              <h3 className="text-lg font-bold text-[#1D1D1D]">3. European GDPR & Rights</h3>
              <p>
                Under the EU General Data Protection Regulation (GDPR), visitors have the right to access, rectify, or erase any personal data. Because we do not store user files or retain personal identifiable profiles, zero user-authored files reside in our storage.
              </p>
            </div>
          </div>
        )}

        {/* 4. TERMS OF SERVICE */}
        {page === 'terms' && (
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200 shadow-sm space-y-6">
            <div className="border-b border-gray-100 pb-6 mb-6">
              <span className="text-xs font-bold text-[#E63946] uppercase tracking-wider">Legal Terms</span>
              <h1 className="text-3xl font-black text-[#1D1D1D] font-heading mt-1">
                Terms of Service
              </h1>
              <p className="text-xs text-gray-400 mt-1">Effective Date: September 2026</p>
            </div>

            <div className="prose text-gray-700 text-sm leading-relaxed space-y-4">
              <p>
                By accessing and using <strong>MY PDF CONVERTOR</strong>, you accept and agree to be bound by the terms and provision of this agreement.
              </p>
              <h3 className="text-lg font-bold text-[#1D1D1D]">Permitted Use</h3>
              <p>
                You may use our 10 conversion tools for personal, educational, and commercial purposes without fees. You agree not to attempt to reverse engineer, disrupt service availability, or automate abusive request floods against the service.
              </p>
              <h3 className="text-lg font-bold text-[#1D1D1D]">Disclaimer of Warranties</h3>
              <p>
                The materials and conversion algorithms are provided "as is". MY PDF CONVERTOR makes no warranties, expressed or implied, regarding 100% optical character recognition accuracy for damaged or password-corrupted input files.
              </p>
            </div>
          </div>
        )}

        {/* 5. DMCA POLICY */}
        {page === 'dmca' && (
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200 shadow-sm space-y-6">
            <div className="border-b border-gray-100 pb-6 mb-6">
              <span className="text-xs font-bold text-[#E63946] uppercase tracking-wider">Copyright Compliance</span>
              <h1 className="text-3xl font-black text-[#1D1D1D] font-heading mt-1">
                DMCA Copyright Policy
              </h1>
              <p className="text-xs text-gray-400 mt-1">Digital Millennium Copyright Act Notice</p>
            </div>

            <div className="prose text-gray-700 text-sm leading-relaxed space-y-4">
              <p>
                MY PDF CONVERTOR respects the intellectual property rights of others and complies with the Digital Millennium Copyright Act (DMCA).
              </p>
              <p>
                Because our platform operates on a decentralized client-side architecture where files are processed locally within user browsers and never retained on servers, MY PDF CONVERTOR does not host or store copyrighted material.
              </p>
              <p>
                If you believe any content on our website infringes upon your copyright, please contact our designated copyright agent via our Contact page with detailed identification of the copyrighted work.
              </p>
            </div>
          </div>
        )}

        {/* 6. BLOG & CONVERSION GUIDES */}
        {page === 'blog' && (
          <div className="space-y-8">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-[#E63946] text-xs font-bold mb-2">
                <BookOpen className="w-3.5 h-3.5" />
                <span>PDF Knowledge Base & Tutorials</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-black text-[#1D1D1D] font-heading">
                PDF Guides & Insights
              </h1>
              <p className="mt-2 text-sm text-gray-600">
                Master document conversion, archival compliance, and file optimization with our expert guides.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-blue-50 text-blue-600 px-2 py-0.5 rounded">
                    Archival & Standards
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 mt-3 mb-2 font-heading">
                    What is PDF/A and Why is it Mandatory for Legal Filings?
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Learn the differences between PDF/A-1b and PDF/A-2b ISO specifications and how to sanitize documents for 50-year archiving.
                  </p>
                </div>
                <button
                  onClick={() => onSelectTool('pdf-to-pdfa')}
                  className="mt-4 text-xs font-bold text-[#E63946] hover:underline text-left"
                >
                  Read & Try PDF/A Converter →
                </button>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded">
                    Spreadsheets & Data
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 mt-3 mb-2 font-heading">
                    How to Extract Financial Tables from PDF to Excel Cleanly
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    A comprehensive walkthrough on turning bank statements and balance sheets into editable .xlsx spreadsheets.
                  </p>
                </div>
                <button
                  onClick={() => onSelectTool('pdf-to-excel')}
                  className="mt-4 text-xs font-bold text-[#E63946] hover:underline text-left"
                >
                  Read & Try PDF to Excel →
                </button>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-purple-50 text-purple-600 px-2 py-0.5 rounded">
                    Web & Developer
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 mt-3 mb-2 font-heading">
                    Converting Live HTML Templates & Invoices into PDF
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    How to format responsive CSS code and typography into print-perfect PDF pages.
                  </p>
                </div>
                <button
                  onClick={() => onSelectTool('html-to-pdf')}
                  className="mt-4 text-xs font-bold text-[#E63946] hover:underline text-left"
                >
                  Read & Try HTML to PDF →
                </button>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-amber-50 text-amber-600 px-2 py-0.5 rounded">
                    Image Tools
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 mt-3 mb-2 font-heading">
                    Best Practices for Combining High-Resolution JPGs into Single PDF
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Optimize photo sizes, set margins, and configure custom page aspect ratios when merging image bundles.
                  </p>
                </div>
                <button
                  onClick={() => onSelectTool('jpg-to-pdf')}
                  className="mt-4 text-xs font-bold text-[#E63946] hover:underline text-left"
                >
                  Read & Try JPG to PDF →
                </button>
              </div>
            </div>
          </div>
        )}

        {/* 7. CONVERSION HISTORY PAGE */}
        {page === 'history' && (
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200 shadow-sm">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-gray-100 pb-6 mb-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-[#E63946] text-xs font-bold mb-2">
                  <History className="w-3.5 h-3.5" />
                  <span>Local Storage Record</span>
                </div>
                <h1 className="text-3xl font-black text-[#1D1D1D] font-heading">
                  Conversion History
                </h1>
                <p className="text-xs text-gray-500 mt-1">
                  Track your recent file conversion jobs in this browser session.
                </p>
              </div>

              {historyItems.length > 0 && (
                <button
                  onClick={onClearHistory}
                  className="px-4 py-2 rounded-xl bg-gray-100 hover:bg-red-50 text-gray-600 hover:text-red-600 text-xs font-bold flex items-center gap-1.5 transition-colors"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Clear History</span>
                </button>
              )}
            </div>

            {historyItems.length === 0 ? (
              <div className="text-center py-16">
                <div className="w-16 h-16 rounded-full bg-gray-100 text-gray-400 flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-gray-800">No conversions recorded yet</h3>
                <p className="text-xs text-gray-500 mt-1 max-w-sm mx-auto">
                  When you convert documents with MY PDF CONVERTOR, your session activities will appear here for fast tracking.
                </p>
                <button
                  onClick={onNavigateHome}
                  className="mt-6 px-6 py-2.5 bg-[#E63946] text-white rounded-xl text-xs font-bold shadow hover:bg-[#D90429] transition-all"
                >
                  Choose a Tool to Start
                </button>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-gray-200 text-gray-400 uppercase tracking-wider text-[10px]">
                      <th className="py-3 px-3">Tool</th>
                      <th className="py-3 px-3">Original File</th>
                      <th className="py-3 px-3">Result File</th>
                      <th className="py-3 px-3">Size</th>
                      <th className="py-3 px-3">Date</th>
                      <th className="py-3 px-3 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {historyItems.map((item) => (
                      <tr key={item.id} className="hover:bg-gray-50/80 transition-colors">
                        <td className="py-3.5 px-3 font-bold text-[#E63946]">
                          {item.toolName}
                        </td>
                        <td className="py-3.5 px-3 text-gray-700 font-medium">
                          {item.fileName}
                        </td>
                        <td className="py-3.5 px-3 text-gray-900 font-bold">
                          {item.resultFileName}
                        </td>
                        <td className="py-3.5 px-3 text-gray-500">
                          {formatBytes(item.resultSize)}
                        </td>
                        <td className="py-3.5 px-3 text-gray-400">
                          {new Date(item.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </td>
                        <td className="py-3.5 px-3 text-right">
                          <button
                            onClick={() => onSelectTool(item.toolId)}
                            className="text-[#E63946] hover:underline font-bold"
                          >
                            Reuse Tool
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
};
