export type ToolId =
  | 'pdf-to-word'
  | 'pdf-to-powerpoint'
  | 'pdf-to-excel'
  | 'word-to-pdf'
  | 'powerpoint-to-pdf'
  | 'excel-to-pdf'
  | 'pdf-to-jpg'
  | 'jpg-to-pdf'
  | 'html-to-pdf'
  | 'pdf-to-pdfa';

export type ToolCategory = 'convert-from-pdf' | 'convert-to-pdf' | 'image-tools' | 'archival';

export interface ToolDefinition {
  id: ToolId;
  name: string;
  shortDesc: string;
  category: ToolCategory;
  fromFormat: string;
  toFormat: string;
  iconName: string;
  badge?: string;
  color: string;
  acceptedMimeTypes: string[];
  acceptedExtensions: string[];
  maxFiles: number;
  sampleFileName?: string;
  seoTitle: string;
  seoDescription: string;
  longDescription: string;
  features: string[];
  stepGuide: { step: number; title: string; desc: string }[];
  supportedFormats: { input: string[]; output: string[] };
  faqs: { question: string; answer: string }[];
}

export interface FileItem {
  id: string;
  file: File;
  name: string;
  size: number;
  type: string;
  previewUrl?: string;
  status: 'idle' | 'uploading' | 'processing' | 'done' | 'error';
  progress: number;
  errorMessage?: string;
  resultUrl?: string;
  resultBlob?: Blob;
  resultFileName?: string;
  resultSize?: number;
}

export interface ConversionHistoryItem {
  id: string;
  toolId: ToolId;
  toolName: string;
  fileName: string;
  resultFileName: string;
  fileSize: number;
  resultSize: number;
  timestamp: number;
}

export interface ConversionOptions {
  orientation?: 'portrait' | 'landscape' | 'auto';
  margin?: 'none' | 'small' | 'normal' | 'large';
  pageSize?: 'a4' | 'letter' | 'fit';
  imageQuality?: number; // 0.1 to 1.0
  pdfaProfile?: 'PDF/A-1b' | 'PDF/A-2b' | 'PDF/A-3b';
  extractMode?: 'all-pages' | 'images-only';
  htmlSource?: string;
  htmlUrl?: string;
}

export type PageView =
  | 'home'
  | 'tool'
  | 'about'
  | 'contact'
  | 'privacy'
  | 'terms'
  | 'dmca'
  | 'blog'
  | 'history';
