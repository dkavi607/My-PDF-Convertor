import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ToolsGrid } from './components/ToolsGrid';
import { HowItWorks } from './components/HowItWorks';
import { FeaturesSection } from './components/FeaturesSection';
import { FaqSection } from './components/FaqSection';
import { AdSenseBanner } from './components/AdSenseBanner';
import { ToolPage } from './components/ToolPage';
import { LegalPages } from './components/LegalPages';
import { Footer } from './components/Footer';
import { TOOLS_DATA } from './data/toolsData';
import { PageView, ToolId, ConversionHistoryItem } from './types';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageView>('home');
  const [selectedToolId, setSelectedToolId] = useState<ToolId | null>(null);
  const [historyItems, setHistoryItems] = useState<ConversionHistoryItem[]>(() => {
    try {
      const saved = localStorage.getItem('mypdf_conversion_history');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Persist history to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('mypdf_conversion_history', JSON.stringify(historyItems));
    } catch (e) {
      console.warn('Unable to save conversion history to localStorage', e);
    }
  }, [historyItems]);

  const handleNavigate = (page: PageView, toolId?: ToolId) => {
    setCurrentPage(page);
    if (page === 'tool' && toolId) {
      setSelectedToolId(toolId);
    } else if (page !== 'tool') {
      setSelectedToolId(null);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectTool = (toolId: ToolId) => {
    setSelectedToolId(toolId);
    setCurrentPage('tool');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSaveHistory = (item: {
    toolId: ToolId;
    toolName: string;
    fileName: string;
    resultFileName: string;
    fileSize: number;
    resultSize: number;
  }) => {
    const newItem: ConversionHistoryItem = {
      id: Math.random().toString(36).substring(2, 9),
      ...item,
      timestamp: Date.now()
    };
    setHistoryItems(prev => [newItem, ...prev].slice(0, 25));
  };

  const handleClearHistory = () => {
    setHistoryItems([]);
    try {
      localStorage.removeItem('mypdf_conversion_history');
    } catch {
      // ignore
    }
  };

  const handleScrollToTools = () => {
    const el = document.getElementById('tools-grid-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const selectedTool = TOOLS_DATA.find(t => t.id === selectedToolId) || TOOLS_DATA[0];

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F9FA] text-[#1D1D1D]">
      
      {/* Sticky Top Header */}
      <Header
        currentPage={currentPage}
        selectedToolId={selectedToolId}
        historyCount={historyItems.length}
        onNavigate={handleNavigate}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <div>
            {/* AdSense Top Leaderboard Slot */}
            <div className="max-w-6xl mx-auto px-4 pt-4">
              <AdSenseBanner slotType="top-leaderboard" />
            </div>

            {/* Hero Section */}
            <Hero
              onSelectTool={handleSelectTool}
              onScrollToTools={handleScrollToTools}
            />

            {/* Tools Grid Section (10 Tools) */}
            <ToolsGrid onSelectTool={handleSelectTool} />

            {/* In-Content AdSense Slot */}
            <div className="max-w-6xl mx-auto px-4">
              <AdSenseBanner slotType="in-content" />
            </div>

            {/* How It Works (4 Steps) */}
            <HowItWorks />

            {/* Features & Benefits */}
            <FeaturesSection />

            {/* FAQ Accordion Section */}
            <FaqSection onContactClick={() => handleNavigate('contact')} />
          </div>
        )}

        {currentPage === 'tool' && (
          <ToolPage
            tool={selectedTool}
            onBack={() => handleNavigate('home')}
            onSelectOtherTool={handleSelectTool}
            onSaveHistory={handleSaveHistory}
          />
        )}

        {(currentPage === 'about' ||
          currentPage === 'contact' ||
          currentPage === 'privacy' ||
          currentPage === 'terms' ||
          currentPage === 'dmca' ||
          currentPage === 'blog' ||
          currentPage === 'history') && (
          <LegalPages
            page={currentPage}
            historyItems={historyItems}
            onClearHistory={handleClearHistory}
            onNavigateHome={() => handleNavigate('home')}
            onSelectTool={handleSelectTool}
          />
        )}
      </main>

      {/* Footer with AdSense Bottom Slot */}
      <Footer onNavigate={handleNavigate} />

    </div>
  );
}
