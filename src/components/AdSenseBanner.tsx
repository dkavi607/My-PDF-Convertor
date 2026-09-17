import React, { useState } from 'react';
import { Eye, Code, Check, ExternalLink } from 'lucide-react';

interface AdSenseBannerProps {
  slotType: 'top-leaderboard' | 'in-content' | 'sidebar' | 'bottom-leaderboard' | 'mobile-banner';
  className?: string;
}

export const AdSenseBanner: React.FC<AdSenseBannerProps> = ({ slotType, className = '' }) => {
  const [showCode, setShowCode] = useState(false);
  const [copied, setCopied] = useState(false);

  // Define specs based on slot type
  let sizeLabel = '728 × 90';
  let slotId = '1234567890';
  let containerClasses = 'w-full max-w-[728px] h-[90px]';
  let title = 'Google AdSense Leaderboard Slot';

  if (slotType === 'in-content') {
    sizeLabel = '300 × 250';
    slotId = '2345678901';
    containerClasses = 'w-full max-w-[300px] h-[250px]';
    title = 'In-Content Medium Rectangle Ad';
  } else if (slotType === 'sidebar') {
    sizeLabel = '300 × 600';
    slotId = '3456789012';
    containerClasses = 'w-full max-w-[300px] h-[600px]';
    title = 'Half Page Skyscraper Ad';
  } else if (slotType === 'bottom-leaderboard') {
    sizeLabel = '728 × 90';
    slotId = '4567890123';
    containerClasses = 'w-full max-w-[728px] h-[90px]';
    title = 'Pre-Footer AdSense Leaderboard';
  } else if (slotType === 'mobile-banner') {
    sizeLabel = '320 × 50 (Mobile 320x100)';
    slotId = '5678901234';
    containerClasses = 'w-full max-w-[320px] h-[50px] sm:h-[100px]';
    title = 'Responsive Mobile Banner';
  }

  const codeSnippet = `<!-- Google AdSense - MY PDF CONVERTOR (${sizeLabel}) -->
<ins class="adsbygoogle"
     style="display:inline-block;width:${sizeLabel.split(' ')[0]}px;height:${sizeLabel.split(' ')[2] || '90'}px"
     data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
     data-ad-slot="${slotId}"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>`;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`my-6 flex flex-col items-center justify-center ${className}`}>
      <div className="flex items-center justify-between w-full max-w-[728px] px-2 mb-1.5 text-xs text-gray-400">
        <span className="flex items-center gap-1.5 font-medium tracking-wider uppercase text-[11px] text-gray-500">
          <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
          Advertisement • Google AdSense Ready
        </span>
        <button
          onClick={() => setShowCode(!showCode)}
          className="hover:text-red-600 transition-colors flex items-center gap-1 text-[11px] underline"
          title="Inspect AdSense tag integration"
        >
          <Code className="w-3 h-3" />
          {showCode ? 'Hide Ad Code' : 'AdSense Tag'}
        </button>
      </div>

      {showCode ? (
        <div className="w-full max-w-[728px] bg-gray-900 text-gray-200 p-3 rounded-lg border border-gray-700 text-xs font-mono relative">
          <div className="flex justify-between items-center mb-2 pb-1 border-b border-gray-800">
            <span className="text-gray-400 font-semibold text-[11px]">Ad Slot #{slotId} ({sizeLabel})</span>
            <button
              onClick={handleCopyCode}
              className="bg-red-600 hover:bg-red-700 text-white px-2 py-0.5 rounded text-[10px] flex items-center gap-1 transition-colors"
            >
              {copied ? <Check className="w-3 h-3" /> : null}
              {copied ? 'Copied' : 'Copy AdSense HTML'}
            </button>
          </div>
          <pre className="overflow-x-auto text-[11px] leading-relaxed text-emerald-400">
            {codeSnippet}
          </pre>
        </div>
      ) : (
        <div
          className={`${containerClasses} ad-slot-frame rounded-lg flex flex-col items-center justify-center p-3 text-center border-dashed border-2 border-gray-300 hover:border-red-400 transition-all shadow-sm group bg-gradient-to-r from-gray-50 via-white to-gray-50`}
        >
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[10px] font-bold tracking-widest text-red-600 bg-red-50 border border-red-200 px-2 py-0.5 rounded">
              AdSense Spot ({sizeLabel})
            </span>
          </div>
          <p className="text-xs font-semibold text-gray-700 group-hover:text-red-600 transition-colors">
            {title}
          </p>
          <p className="text-[11px] text-gray-400 mt-0.5 hidden sm:block">
            Auto-responsive display ad slot • High CPM yield monetization zone
          </p>
        </div>
      )}
    </div>
  );
};
