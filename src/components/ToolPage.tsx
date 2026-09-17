import React, { useState, useRef, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { 
  UploadCloud, 
  FileText, 
  Download, 
  Trash2, 
  Sparkles, 
  CheckCircle2, 
  AlertCircle, 
  Settings, 
  ArrowLeft, 
  RefreshCw, 
  FileCode, 
  Layers, 
  Share2, 
  Copy, 
  HelpCircle,
  Clock,
  ArrowRightLeft,
  Sliders,
  Check,
  Zap,
  Eye
} from 'lucide-react';
import { ToolDefinition, FileItem, ConversionOptions, ToolId } from '../types';
import { 
  convertPdfToWord, 
  convertPdfToPptx, 
  convertPdfToExcel, 
  convertWordToPdf, 
  convertPowerPointToPdf, 
  convertExcelToPdf, 
  convertPdfToJpg, 
  convertJpgToPdf, 
  convertHtmlToPdf, 
  convertPdfToPdfA,
  createSampleTestFile
} from '../utils/conversionEngine';
import { AdSenseBanner } from './AdSenseBanner';

interface ToolPageProps {
  tool: ToolDefinition;
  onBack: () => void;
  onSelectOtherTool: (id: ToolId) => void;
  onSaveHistory: (item: {
    toolId: ToolId;
    toolName: string;
    fileName: string;
    resultFileName: string;
    fileSize: number;
    resultSize: number;
  }) => void;
}

export const ToolPage: React.FC<ToolPageProps> = ({
  tool,
  onBack,
  onSelectOtherTool,
  onSaveHistory
}) => {
  const [files, setFiles] = useState<FileItem[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [isConverting, setIsConverting] = useState(false);
  const [conversionPhase, setConversionPhase] = useState<string>('');
  const [globalProgress, setGlobalProgress] = useState(0);
  const [convertedResult, setConvertedResult] = useState<{
    blob: Blob;
    url: string;
    fileName: string;
    size: number;
  } | null>(null);

  // Conversion Options
  const [options, setOptions] = useState<ConversionOptions>({
    orientation: 'portrait',
    margin: 'normal',
    pageSize: 'a4',
    imageQuality: 0.92,
    pdfaProfile: 'PDF/A-1b',
    extractMode: 'all-pages',
    htmlSource: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: sans-serif; padding: 24px; color: #1D1D1D; }
    h1 { color: #E63946; border-bottom: 2px solid #E63946; padding-bottom: 8px; }
    p { line-height: 1.6; color: #4B5563; }
    .badge { background: #FEF2F2; color: #DC2626; padding: 4px 8px; border-radius: 4px; font-weight: bold; }
  </style>
</head>
<body>
  <h1>Sample HTML Document</h1>
  <p>This HTML snippet will be rendered directly into a standardized, high-resolution PDF document.</p>
  <p><span class="badge">MY PDF CONVERTOR</span> • Fast, Free, and Secure Client-Side Engine.</p>
</body>
</html>`
  });

  const [activeTab, setActiveTab] = useState<'upload' | 'html-editor'>(tool.id === 'html-to-pdf' ? 'html-editor' : 'upload');
  const [copiedLink, setCopiedLink] = useState(false);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Scroll to top when tool changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setFiles([]);
    setConvertedResult(null);
    setIsConverting(false);
    setGlobalProgress(0);
  }, [tool.id]);

  const handleFilesAdded = (newFiles: FileList | File[]) => {
    const validFiles: FileItem[] = [];
    const array = Array.from(newFiles);

    for (const f of array) {
      // Basic size / type validation
      const item: FileItem = {
        id: Math.random().toString(36).substring(2, 9),
        file: f,
        name: f.name,
        size: f.size,
        type: f.type,
        status: 'idle',
        progress: 0
      };
      validFiles.push(item);
    }

    if (tool.maxFiles === 1) {
      setFiles(validFiles.slice(0, 1));
    } else {
      setFiles(prev => [...prev, ...validFiles].slice(0, tool.maxFiles));
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFilesAdded(e.dataTransfer.files);
    }
  };

  const handleUseSampleFile = () => {
    const sample = createSampleTestFile(tool.id);
    handleFilesAdded([sample]);
  };

  const handleRemoveFile = (id: string) => {
    setFiles(prev => prev.filter(f => f.id !== id));
  };

  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#E63946', '#1D1D1D', '#F4A261', '#2A9D8F']
    });
  };

  const handleStartConversion = async () => {
    if (tool.id === 'html-to-pdf' && activeTab === 'html-editor') {
      // HTML editor direct conversion
      setIsConverting(true);
      setGlobalProgress(20);
      setConversionPhase('Parsing HTML DOM structure...');
      await new Promise(r => setTimeout(r, 400));

      setGlobalProgress(60);
      setConversionPhase('Typesetting and applying CSS styles...');
      await new Promise(r => setTimeout(r, 400));

      setGlobalProgress(90);
      setConversionPhase('Compiling output PDF document...');
      const result = await convertHtmlToPdf(options.htmlSource || 'Sample HTML', 'Converted_HTML_Document', options);
      
      setGlobalProgress(100);
      const url = URL.createObjectURL(result.blob);
      setConvertedResult({
        blob: result.blob,
        url,
        fileName: result.fileName,
        size: result.blob.size
      });
      setIsConverting(false);
      triggerConfetti();

      onSaveHistory({
        toolId: tool.id,
        toolName: tool.name,
        fileName: 'custom_html_code.html',
        resultFileName: result.fileName,
        fileSize: (options.htmlSource || '').length,
        resultSize: result.blob.size
      });
      return;
    }

    if (files.length === 0) return;

    setIsConverting(true);
    setGlobalProgress(15);
    setConversionPhase('Uploading & Reading Binary Streams...');
    await new Promise(r => setTimeout(r, 350));

    setGlobalProgress(45);
    setConversionPhase('Parsing Page Elements & Structural Geometry...');
    await new Promise(r => setTimeout(r, 400));

    setGlobalProgress(75);
    setConversionPhase(`Transforming to ${tool.toFormat} Format...`);
    await new Promise(r => setTimeout(r, 400));

    try {
      let result: { blob: Blob; fileName: string };

      switch (tool.id) {
        case 'pdf-to-word':
          result = await convertPdfToWord(files[0].file, options);
          break;
        case 'pdf-to-powerpoint':
          result = await convertPdfToPptx(files[0].file, options);
          break;
        case 'pdf-to-excel':
          result = await convertPdfToExcel(files[0].file, options);
          break;
        case 'word-to-pdf':
          result = await convertWordToPdf(files[0].file, options);
          break;
        case 'powerpoint-to-pdf':
          result = await convertPowerPointToPdf(files[0].file, options);
          break;
        case 'excel-to-pdf':
          result = await convertExcelToPdf(files[0].file, options);
          break;
        case 'pdf-to-jpg':
          result = await convertPdfToJpg(files[0].file, options);
          break;
        case 'jpg-to-pdf':
          result = await convertJpgToPdf(files.map(f => f.file), options);
          break;
        case 'html-to-pdf':
          result = await convertHtmlToPdf(await files[0].file.text(), files[0].file.name.replace(/\.[^/.]+$/, ''), options);
          break;
        case 'pdf-to-pdfa':
          result = await convertPdfToPdfA(files[0].file, options);
          break;
        default:
          result = await convertPdfToWord(files[0].file, options);
      }

      setGlobalProgress(100);
      setConversionPhase('Conversion Successful!');
      const url = URL.createObjectURL(result.blob);

      setConvertedResult({
        blob: result.blob,
        url,
        fileName: result.fileName,
        size: result.blob.size
      });

      setIsConverting(false);
      triggerConfetti();

      onSaveHistory({
        toolId: tool.id,
        toolName: tool.name,
        fileName: files.length > 1 ? `${files.length} images` : files[0].name,
        resultFileName: result.fileName,
        fileSize: files.reduce((acc, f) => acc + f.size, 0),
        resultSize: result.blob.size
      });
    } catch (err) {
      console.error(err);
      setIsConverting(false);
      setConversionPhase('Error processing file.');
    }
  };

  const handleDownloadResult = () => {
    if (!convertedResult) return;
    const a = document.createElement('a');
    a.href = convertedResult.url;
    a.download = convertedResult.fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] pb-24">
      
      {/* Top Banner Navigation Bar */}
      <div className="bg-white border-b border-gray-200 py-4 px-4 sm:px-6 lg:px-8 shadow-2xs">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-gray-600 hover:text-[#E63946] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Tools</span>
          </button>

          <div className="flex items-center gap-2 text-xs text-gray-500">
            <span>MY PDF CONVERTOR</span>
            <span>/</span>
            <span className="font-bold text-[#E63946]">{tool.name}</span>
          </div>
        </div>
      </div>

      {/* Top AdSense Leaderboard Slot */}
      <div className="max-w-6xl mx-auto px-4">
        <AdSenseBanner slotType="top-leaderboard" />
      </div>

      {/* Tool Main Workspace Container */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
        
        {/* Tool Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-[#E63946] text-xs font-bold mb-2">
            <Sparkles className="w-3 h-3" />
            <span>100% Free Online Converter</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1D1D1D] tracking-tight font-heading">
            {tool.name}
          </h1>
          <p className="mt-3 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            {tool.shortDesc}
          </p>
        </div>

        {/* Workspace Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-200 shadow-xl relative overflow-hidden">
          
          {/* If HTML tool: Toggle between Upload File or Live Code Editor */}
          {tool.id === 'html-to-pdf' && !convertedResult && (
            <div className="flex items-center justify-center gap-2 mb-6 p-1 bg-gray-100 rounded-xl max-w-xs mx-auto">
              <button
                onClick={() => setActiveTab('html-editor')}
                className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-bold transition-all ${
                  activeTab === 'html-editor' ? 'bg-white text-[#E63946] shadow-sm' : 'text-gray-600'
                }`}
              >
                Live HTML Editor
              </button>
              <button
                onClick={() => setActiveTab('upload')}
                className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-bold transition-all ${
                  activeTab === 'upload' ? 'bg-white text-[#E63946] shadow-sm' : 'text-gray-600'
                }`}
              >
                Upload HTML File
              </button>
            </div>
          )}

          {/* STATE 1: Converted Result State */}
          {convertedResult ? (
            <div className="text-center py-6 animate-in zoom-in-95 duration-200">
              <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-3xl flex items-center justify-center mx-auto mb-5 shadow-lg shadow-emerald-100">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                Conversion Complete!
              </span>

              <h3 className="text-2xl sm:text-3xl font-black text-[#1D1D1D] mt-3 font-heading">
                Your File is Ready
              </h3>

              <p className="text-sm text-gray-600 mt-1">
                Converted to <span className="font-bold text-[#E63946]">{convertedResult.fileName}</span> ({formatFileSize(convertedResult.size)})
              </p>

              {/* Download Action Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
                <button
                  onClick={handleDownloadResult}
                  id="download-converted-file-btn"
                  className="w-full sm:w-auto flex-1 px-8 py-4 bg-[#E63946] hover:bg-[#D90429] text-white font-extrabold text-base rounded-2xl shadow-lg shadow-red-300 hover:shadow-xl hover:shadow-red-400 transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
                >
                  <Download className="w-5 h-5" />
                  <span>Download File</span>
                </button>

                <button
                  onClick={() => {
                    setConvertedResult(null);
                    setFiles([]);
                    setGlobalProgress(0);
                  }}
                  className="w-full sm:w-auto px-5 py-4 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold text-sm rounded-2xl transition-all flex items-center justify-center gap-2"
                >
                  <RefreshCw className="w-4 h-4" />
                  <span>Convert Another</span>
                </button>
              </div>

              {/* Security confirmation badge */}
              <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-center gap-2 text-xs text-gray-400">
                <Check className="w-4 h-4 text-emerald-500" />
                <span>Files are processed locally and securely in your browser.</span>
              </div>
            </div>
          ) : isConverting ? (
            /* STATE 2: Converting Progress Animation */
            <div className="py-12 text-center max-w-md mx-auto">
              <div className="w-20 h-20 rounded-3xl bg-red-50 text-[#E63946] flex items-center justify-center mx-auto mb-6 relative shadow-md animate-pulse">
                <RefreshCw className="w-8 h-8 animate-spin" />
              </div>

              <h3 className="text-xl font-bold text-[#1D1D1D] font-heading">
                Processing Your Conversion
              </h3>

              <p className="text-xs text-gray-500 mt-1 mb-6 font-mono">
                {conversionPhase || 'Working on your document...'}
              </p>

              {/* Progress bar */}
              <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden p-0.5 border border-gray-200 shadow-inner">
                <div 
                  className="bg-gradient-to-r from-[#E63946] to-[#D90429] h-full rounded-full transition-all duration-300 shadow-sm"
                  style={{ width: `${globalProgress}%` }}
                ></div>
              </div>
              <p className="text-xs font-bold text-gray-400 mt-2">{globalProgress}%</p>
            </div>
          ) : (
            /* STATE 3: File Upload & Configuration Area */
            <div>
              
              {/* HTML Code Editor Mode */}
              {tool.id === 'html-to-pdf' && activeTab === 'html-editor' ? (
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-xs font-bold text-gray-700 uppercase tracking-wide flex items-center gap-1.5">
                      <FileCode className="w-4 h-4 text-[#E63946]" />
                      HTML Source Code & Markup
                    </label>
                    <span className="text-xs text-gray-400">Type or paste HTML code below</span>
                  </div>
                  <textarea
                    rows={8}
                    value={options.htmlSource}
                    onChange={(e) => setOptions({ ...options, htmlSource: e.target.value })}
                    className="w-full font-mono text-xs p-4 bg-gray-900 text-emerald-400 rounded-2xl border border-gray-700 focus:outline-none focus:border-red-500 shadow-inner"
                    placeholder="<html><body>...</body></html>"
                  />
                </div>
              ) : (
                /* Drag and Drop Zone */
                <div
                  onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                  onDragLeave={() => setIsDragging(false)}
                  onDrop={handleDrop}
                  onClick={() => fileInputRef.current?.click()}
                  className={`border-2 border-dashed rounded-3xl p-8 sm:p-12 text-center cursor-pointer transition-all ${
                    isDragging
                      ? 'border-[#E63946] bg-red-50/50 scale-[0.99]'
                      : 'border-gray-300 hover:border-[#E63946] bg-[#F8F9FA]/60 hover:bg-red-50/20'
                  }`}
                >
                  <input
                    ref={fileInputRef}
                    type="file"
                    multiple={tool.maxFiles > 1}
                    accept={tool.acceptedExtensions.join(',')}
                    className="hidden"
                    onChange={(e) => {
                      if (e.target.files && e.target.files.length > 0) {
                        handleFilesAdded(e.target.files);
                      }
                    }}
                  />

                  <div className="w-20 h-20 rounded-3xl bg-white shadow-md border border-gray-100 flex items-center justify-center mx-auto mb-4 text-[#E63946] group-hover:scale-110 transition-transform">
                    <UploadCloud className="w-10 h-10 stroke-[1.75]" />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-[#1D1D1D] font-heading">
                    Drag and Drop Your File Here
                  </h3>

                  <p className="text-sm text-gray-500 mt-2 max-w-sm mx-auto">
                    or <span className="text-[#E63946] font-bold underline">browse files</span> from your computer or phone
                  </p>

                  <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xs text-gray-400">
                    <span className="bg-gray-100 px-2.5 py-1 rounded-md">
                      Accepted: {tool.acceptedExtensions.join(', ')}
                    </span>
                    <span className="bg-gray-100 px-2.5 py-1 rounded-md">
                      Max {tool.maxFiles} {tool.maxFiles > 1 ? 'files' : 'file'}
                    </span>
                  </div>
                </div>
              )}

              {/* Sample Test File Quick Helper */}
              <div className="mt-4 flex flex-wrap items-center justify-between gap-3 px-2">
                <span className="text-xs text-gray-500 flex items-center gap-1">
                  <Zap className="w-3.5 h-3.5 text-amber-500" />
                  No file on hand?
                </span>
                <button
                  onClick={handleUseSampleFile}
                  id="use-sample-test-file-btn"
                  className="text-xs font-bold text-[#E63946] hover:text-[#D90429] bg-red-50 hover:bg-red-100 px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5"
                >
                  <Sparkles className="w-3 h-3" />
                  <span>Load Sample Test File</span>
                </button>
              </div>

              {/* Uploaded Files Queue List */}
              {files.length > 0 && (
                <div className="mt-6 space-y-2.5">
                  <p className="text-xs font-extrabold uppercase tracking-wider text-gray-500">
                    Uploaded Files ({files.length})
                  </p>
                  {files.map((file) => (
                    <div
                      key={file.id}
                      className="flex items-center justify-between p-3.5 bg-gray-50 rounded-xl border border-gray-200"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div 
                          className="w-10 h-10 rounded-lg flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                          style={{ backgroundColor: tool.color }}
                        >
                          {tool.fromFormat.slice(0, 3)}
                        </div>
                        <div className="min-w-0">
                          <p className="text-xs sm:text-sm font-bold text-gray-900 truncate">
                            {file.name}
                          </p>
                          <p className="text-[11px] text-gray-400">
                            {formatFileSize(file.size)}
                          </p>
                        </div>
                      </div>

                      <button
                        onClick={() => handleRemoveFile(file.id)}
                        className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        title="Remove file"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {/* Conversion Settings & Options Panel */}
              <div className="mt-8 p-5 bg-[#F8F9FA] rounded-2xl border border-gray-200">
                <div className="flex items-center gap-2 mb-4">
                  <Sliders className="w-4 h-4 text-[#E63946]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-700">
                    Conversion Options
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                  
                  {/* Page Orientation */}
                  <div>
                    <label className="block font-semibold text-gray-600 mb-1.5">Orientation</label>
                    <select
                      value={options.orientation}
                      onChange={(e) => setOptions({ ...options, orientation: e.target.value as any })}
                      className="w-full bg-white border border-gray-300 rounded-xl px-3 py-2 text-gray-800 focus:outline-none focus:border-red-500"
                    >
                      <option value="portrait">Portrait (Standard)</option>
                      <option value="landscape">Landscape (Wide)</option>
                    </select>
                  </div>

                  {/* Margins */}
                  <div>
                    <label className="block font-semibold text-gray-600 mb-1.5">Margins</label>
                    <select
                      value={options.margin}
                      onChange={(e) => setOptions({ ...options, margin: e.target.value as any })}
                      className="w-full bg-white border border-gray-300 rounded-xl px-3 py-2 text-gray-800 focus:outline-none focus:border-red-500"
                    >
                      <option value="none">No Margin (Full Bleed)</option>
                      <option value="small">Small (Compact)</option>
                      <option value="normal">Normal (Standard)</option>
                      <option value="large">Large (Spacious)</option>
                    </select>
                  </div>

                  {/* Tool specific option */}
                  {tool.id === 'pdf-to-pdfa' ? (
                    <div>
                      <label className="block font-semibold text-gray-600 mb-1.5">ISO Profile</label>
                      <select
                        value={options.pdfaProfile}
                        onChange={(e) => setOptions({ ...options, pdfaProfile: e.target.value as any })}
                        className="w-full bg-white border border-gray-300 rounded-xl px-3 py-2 text-gray-800 focus:outline-none focus:border-red-500"
                      >
                        <option value="PDF/A-1b">PDF/A-1b (ISO 19005-1)</option>
                        <option value="PDF/A-2b">PDF/A-2b (ISO 19005-2)</option>
                        <option value="PDF/A-3b">PDF/A-3b (ISO 19005-3)</option>
                      </select>
                    </div>
                  ) : (
                    <div>
                      <label className="block font-semibold text-gray-600 mb-1.5">Page Size</label>
                      <select
                        value={options.pageSize}
                        onChange={(e) => setOptions({ ...options, pageSize: e.target.value as any })}
                        className="w-full bg-white border border-gray-300 rounded-xl px-3 py-2 text-gray-800 focus:outline-none focus:border-red-500"
                      >
                        <option value="a4">A4 (Standard 210x297mm)</option>
                        <option value="letter">US Letter (8.5x11 in)</option>
                        <option value="fit">Auto-Fit Content</option>
                      </select>
                    </div>
                  )}

                </div>
              </div>

              {/* Big Action Convert Button */}
              <div className="mt-8 text-center">
                <button
                  onClick={handleStartConversion}
                  disabled={files.length === 0 && !(tool.id === 'html-to-pdf' && activeTab === 'html-editor')}
                  id="primary-convert-button"
                  className={`w-full sm:w-auto min-w-[280px] px-10 py-4 font-extrabold text-base rounded-2xl shadow-lg transition-all flex items-center justify-center gap-2 mx-auto ${
                    files.length > 0 || (tool.id === 'html-to-pdf' && activeTab === 'html-editor')
                      ? 'bg-[#E63946] hover:bg-[#D90429] text-white shadow-red-300 hover:shadow-xl hover:shadow-red-400 transform hover:-translate-y-0.5'
                      : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  <ArrowRightLeft className="w-5 h-5" />
                  <span>Convert to {tool.toFormat}</span>
                </button>
              </div>

            </div>
          )}

        </div>

        {/* In-Content AdSense Slot */}
        <AdSenseBanner slotType="in-content" className="my-10" />

        {/* 500+ Words SEO Content & Step-by-Step Guide Section */}
        <div className="mt-12 bg-white rounded-3xl p-8 sm:p-12 border border-gray-200 shadow-sm space-y-12">
          
          {/* Article & Overview */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1D1D1D] font-heading mb-4">
              About {tool.name} Converter
            </h2>
            <div className="prose text-gray-600 text-sm sm:text-base leading-relaxed space-y-4">
              <p>{tool.longDescription}</p>
            </div>
          </div>

          {/* Key Features Checklist */}
          <div className="pt-8 border-t border-gray-100">
            <h3 className="text-xl font-bold text-[#1D1D1D] font-heading mb-4">
              Key Features of our {tool.name} Engine
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {tool.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-[#F8F9FA] border border-gray-100">
                  <CheckCircle2 className="w-4 h-4 text-[#E63946] mt-0.5 flex-shrink-0" />
                  <span className="text-xs sm:text-sm text-gray-700">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Step-by-Step Walkthrough */}
          <div className="pt-8 border-t border-gray-100">
            <h3 className="text-xl font-bold text-[#1D1D1D] font-heading mb-6">
              How to Convert with {tool.name} in 4 Easy Steps
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {tool.stepGuide.map((step) => (
                <div key={step.step} className="p-4 rounded-xl bg-gray-50 border border-gray-200 flex flex-col">
                  <div className="w-7 h-7 rounded-full bg-[#E63946] text-white font-black text-xs flex items-center justify-center mb-3">
                    {step.step}
                  </div>
                  <h4 className="text-sm font-bold text-gray-900 mb-1">{step.title}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Format Specifications Table */}
          <div className="pt-8 border-t border-gray-100">
            <h3 className="text-xl font-bold text-[#1D1D1D] font-heading mb-4">
              Supported Formats & Specifications
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-red-50/50 border border-red-100">
                <span className="text-xs font-bold uppercase text-[#E63946] block mb-1">Supported Input Formats:</span>
                <p className="text-sm font-semibold text-gray-800">{tool.supportedFormats.input.join(', ')}</p>
              </div>
              <div className="p-4 rounded-xl bg-gray-50 border border-gray-200">
                <span className="text-xs font-bold uppercase text-gray-600 block mb-1">Generated Output Formats:</span>
                <p className="text-sm font-semibold text-gray-800">{tool.supportedFormats.output.join(', ')}</p>
              </div>
            </div>
          </div>

          {/* Tool Specific FAQs */}
          <div className="pt-8 border-t border-gray-100">
            <h3 className="text-xl font-bold text-[#1D1D1D] font-heading mb-6 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-[#E63946]" />
              {tool.name} FAQs
            </h3>
            <div className="space-y-4">
              {tool.faqs.map((faq, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-[#F8F9FA] border border-gray-200">
                  <h4 className="text-sm sm:text-base font-bold text-[#1D1D1D] mb-2">{faq.question}</h4>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Explore Other Tools Section */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-bold text-[#1D1D1D] font-heading mb-6">
            Other Free PDF Conversion Tools
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {['pdf-to-word', 'pdf-to-excel', 'pdf-to-powerpoint', 'word-to-pdf', 'jpg-to-pdf', 'pdf-to-jpg', 'pdf-to-pdfa']
              .filter(id => id !== tool.id)
              .slice(0, 5)
              .map((otherId) => (
                <button
                  key={otherId}
                  onClick={() => onSelectOtherTool(otherId as ToolId)}
                  className="px-4 py-2 bg-white hover:bg-red-50 border border-gray-200 hover:border-red-300 text-xs font-bold text-gray-700 hover:text-[#E63946] rounded-xl shadow-2xs transition-all"
                >
                  {otherId.replace(/-/g, ' ').toUpperCase()}
                </button>
              ))}
          </div>
        </div>

      </div>

    </div>
  );
};
