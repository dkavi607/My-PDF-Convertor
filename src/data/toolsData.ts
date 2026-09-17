import { ToolDefinition } from '../types';

export const TOOLS_DATA: ToolDefinition[] = [
  {
    id: 'pdf-to-word',
    name: 'PDF to Word',
    shortDesc: 'Convert PDF documents to editable Microsoft Word (.docx) files with preserved formatting and tables.',
    category: 'convert-from-pdf',
    fromFormat: 'PDF',
    toFormat: 'DOCX',
    iconName: 'FileText',
    badge: 'Popular',
    color: '#2B579A',
    acceptedMimeTypes: ['application/pdf'],
    acceptedExtensions: ['.pdf'],
    maxFiles: 5,
    sampleFileName: 'sample_document.pdf',
    seoTitle: 'Convert PDF to Word Online Free - Editable DOCX Converter',
    seoDescription: 'Accurately convert PDF to editable DOC & DOCX Word documents for free. Preserves fonts, paragraphs, and tables without registration.',
    longDescription: `
      MY PDF CONVERTOR's PDF to Word tool is an industry-grade conversion engine designed to transform static PDF documents into fully editable Microsoft Word (.docx) files in seconds. Whether you are working with resumes, contracts, research papers, reports, or invoices, our converter parses paragraphs, headings, lists, tables, and typography to reconstruct a clean, well-formatted Word document.
      
      Unlike basic converters that turn text into rasterized images or fragmented blocks, our advanced client-side processing extracts text flows and reconstructs structured XML document hierarchies. This ensures that when you open the converted DOCX in Microsoft Word, Google Docs, or LibreOffice, you can immediately begin editing text, modifying tables, and adjusting styles without painful reformatting.
    `,
    features: [
      'Preserves original paragraph flow, bold/italic weights, and line heights',
      'Accurate tabular data reconstruction and multi-column alignment',
      'No registration, sign-up, or credit card required',
      '100% private: all file processing is securely handled client-side in your browser',
      'Compatible with Microsoft Word 2007-2024, Office 365, and Google Docs'
    ],
    stepGuide: [
      { step: 1, title: 'Upload PDF Document', desc: 'Drag and drop your PDF file into the upload zone or click to select from your device.' },
      { step: 2, title: 'Automatic Text & Structure Parsing', desc: 'Our engine reads the PDF text streams, styles, and page geometry.' },
      { step: 3, title: 'Reconstruct Word Elements', desc: 'Headings, body paragraphs, and tables are structured into a modern DOCX file.' },
      { step: 4, title: 'Download Editable DOCX', desc: 'Click Download to immediately save and open your editable Word document.' }
    ],
    supportedFormats: {
      input: ['PDF (.pdf)'],
      output: ['Microsoft Word (.docx)', 'Word Document (.doc)']
    },
    faqs: [
      {
        question: 'Will my converted Word document look identical to the original PDF?',
        answer: 'Our converter extracts text streams, styling, and structural elements to replicate the PDF layout as closely as possible in DOCX format.'
      },
      {
        question: 'Is it free to convert multiple PDF files?',
        answer: 'Yes! MY PDF CONVERTOR is 100% free with no hidden charges, daily quotas, or registration requirements.'
      },
      {
        question: 'Are my confidential documents safe?',
        answer: 'All processing takes place locally inside your browser using high-performance client libraries. Your files are never uploaded to any external server.'
      }
    ]
  },
  {
    id: 'pdf-to-powerpoint',
    name: 'PDF to PowerPoint',
    shortDesc: 'Convert PDF presentation decks into editable Microsoft PowerPoint (.pptx) slides with ease.',
    category: 'convert-from-pdf',
    fromFormat: 'PDF',
    toFormat: 'PPTX',
    iconName: 'Presentation',
    badge: 'Popular',
    color: '#D24726',
    acceptedMimeTypes: ['application/pdf'],
    acceptedExtensions: ['.pdf'],
    maxFiles: 5,
    sampleFileName: 'presentation_deck.pdf',
    seoTitle: 'Convert PDF to PowerPoint Online - Free PPTX Converter',
    seoDescription: 'Transform PDF slides and reports into editable PowerPoint PPTX presentations with layout and typography preserved.',
    longDescription: `
      Easily convert your PDF slide decks, pitch books, and lecture notes into editable PowerPoint presentations (.pptx). Our PDF to PPTX conversion engine scans each PDF page, detecting presentation slides, key headers, bulleted lists, and graphical elements to build a multi-slide presentation file ready for PowerPoint, Keynote, or Google Slides.
      
      No more taking screenshots or manually copying text slide by slide. With MY PDF CONVERTOR, you can repurpose company decks, webinar slides, and business reports into dynamic presentations with a single click.
    `,
    features: [
      'Converts each PDF page into an individual PowerPoint slide',
      'Preserves slide dimensions (16:9 Widescreen & 4:3 Standard)',
      'Extracts slide titles, body copy, and structured bullet points',
      'Instant download with batch conversion support',
      'Compatible with Microsoft PowerPoint, Google Slides, and Apple Keynote'
    ],
    stepGuide: [
      { step: 1, title: 'Upload Slide Deck', desc: 'Upload your multi-page PDF presentation or report.' },
      { step: 2, title: 'Analyze Slide Structure', desc: 'Our engine detects individual pages, typography, and bullet hierarchies.' },
      { step: 3, title: 'Generate PPTX Slides', desc: 'Each page is rendered and formatted as a slide with vector and text elements.' },
      { step: 4, title: 'Download PPTX', desc: 'Download your editable PowerPoint presentation file and start presenting.' }
    ],
    supportedFormats: {
      input: ['PDF (.pdf)'],
      output: ['Microsoft PowerPoint (.pptx)']
    },
    faqs: [
      {
        question: 'Can I edit the text on the PowerPoint slides after conversion?',
        answer: 'Yes, text blocks and slide titles are reconstructed as editable PowerPoint shapes and text boxes.'
      },
      {
        question: 'Does it support widescreen 16:9 aspect ratios?',
        answer: 'Yes! The converter automatically detects page aspect ratios and sets slide layouts to standard or 16:9 widescreen accordingly.'
      }
    ]
  },
  {
    id: 'pdf-to-excel',
    name: 'PDF to Excel',
    shortDesc: 'Extract financial tables, spreadsheets, and tabular data from PDF into Microsoft Excel (.xlsx).',
    category: 'convert-from-pdf',
    fromFormat: 'PDF',
    toFormat: 'XLSX',
    iconName: 'Sheet',
    badge: 'Popular',
    color: '#107C41',
    acceptedMimeTypes: ['application/pdf'],
    acceptedExtensions: ['.pdf'],
    maxFiles: 5,
    sampleFileName: 'financial_report.pdf',
    seoTitle: 'Convert PDF to Excel Online Free - PDF to XLSX Table Extractor',
    seoDescription: 'Extract tables and data from PDF invoices, bank statements, and spreadsheets into clean, editable Excel XLSX sheets.',
    longDescription: `
      Extracting data from PDF financial statements, bank records, invoices, and audit reports into Excel manually is tedious and prone to human error. MY PDF CONVERTOR's PDF to Excel tool solves this by parsing tabular text streams and row-column intersections, creating structured spreadsheet workbooks (.xlsx) automatically.
      
      Our smart table detection algorithm identifies column boundaries, numeric fields, headers, and row delimiters, turning PDF tables into clean Excel rows and columns ready for formulas, pivot tables, and statistical analysis.
    `,
    features: [
      'Smart tabular grid detection and column-delimiter matching',
      'Converts multiple PDF pages into organized worksheet tabs or unified tables',
      'Supports numeric values, currency symbols, percentages, and date formats',
      'Perfect for bank statements, tax documents, ledgers, and inventory manifests',
      'Outputs clean standard .xlsx files compatible with Microsoft Excel and Google Sheets'
    ],
    stepGuide: [
      { step: 1, title: 'Select PDF File', desc: 'Choose the PDF containing tables, spreadsheets, or financial statements.' },
      { step: 2, title: 'Detect Table Grids', desc: 'The parser scans coordinates, text spacing, and table borders.' },
      { step: 3, title: 'Construct XLSX Sheets', desc: 'Data is organized into structured Excel rows, columns, and worksheets.' },
      { step: 4, title: 'Download Spreadsheet', desc: 'Download your .xlsx workbook and open it in Excel or Google Sheets.' }
    ],
    supportedFormats: {
      input: ['PDF (.pdf)'],
      output: ['Microsoft Excel (.xlsx)', 'CSV (.csv)']
    },
    faqs: [
      {
        question: 'Can this extract tables from multi-page PDFs?',
        answer: 'Yes, multi-page PDFs with continuous tables or multiple tables across pages are parsed and merged into your Excel workbook.'
      },
      {
        question: 'Will formulas be preserved?',
        answer: 'PDFs store static text values. Our tool extracts the computed numeric values cleanly so you can easily apply fresh Excel formulas.'
      }
    ]
  },
  {
    id: 'word-to-pdf',
    name: 'Word to PDF',
    shortDesc: 'Convert DOC, DOCX, and text documents into professional, print-ready PDF files.',
    category: 'convert-to-pdf',
    fromFormat: 'DOCX',
    toFormat: 'PDF',
    iconName: 'FileCheck',
    badge: 'Essential',
    color: '#E63946',
    acceptedMimeTypes: [
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'application/msword',
      'text/plain'
    ],
    acceptedExtensions: ['.docx', '.doc', '.txt'],
    maxFiles: 5,
    sampleFileName: 'business_proposal.docx',
    seoTitle: 'Convert Word to PDF Online Free - DOCX to PDF Converter',
    seoDescription: 'Convert Microsoft Word DOCX and DOC files to high-resolution, secure PDF documents with pristine formatting.',
    longDescription: `
      Ensure your documents look identical on every computer, tablet, and smartphone by converting Word files (.docx, .doc, .txt) into standardized PDF documents. PDFs lock in your fonts, spacing, margins, and graphics, preventing unwanted line-wrapping or missing font substitutions when sharing with clients, colleagues, or recruiters.
      
      MY PDF CONVERTOR delivers crisp vector rendering, clean page breaks, and embedded fonts, generating professional PDFs suitable for official submissions, legal agreements, and high-quality printing.
    `,
    features: [
      'Preserves document styling, headings, margins, and bulleted lists',
      'High-resolution vector typography and crisp line rendering',
      'Universal compatibility across Windows, macOS, iOS, Android, and Linux',
      'Fast client-side compilation with zero upload wait times',
      'Supports DOCX, legacy DOC, and formatted text documents'
    ],
    stepGuide: [
      { step: 1, title: 'Upload Word Document', desc: 'Select or drag your .docx or .doc file into the converter.' },
      { step: 2, title: 'Format & Typeset', desc: 'Our engine formats typography, line breaks, and page bounds.' },
      { step: 3, title: 'Compile PDF', desc: 'Generates a standards-compliant PDF file with embedded assets.' },
      { step: 4, title: 'Download PDF', desc: 'Download your finalized, professional PDF immediately.' }
    ],
    supportedFormats: {
      input: ['Microsoft Word (.docx, .doc)', 'Plain Text (.txt)'],
      output: ['Portable Document Format (.pdf)']
    },
    faqs: [
      {
        question: 'Will my fonts change when converting Word to PDF?',
        answer: 'No, our converter renders text with standard cross-platform vector fonts ensuring consistent typography across all PDF viewers.'
      },
      {
        question: 'Can I convert password-protected Word files?',
        answer: 'Please ensure you remove password protection prior to conversion so our browser engine can read the document contents.'
      }
    ]
  },
  {
    id: 'powerpoint-to-pdf',
    name: 'PowerPoint to PDF',
    shortDesc: 'Convert PowerPoint (PPT, PPTX) slide presentations into clean, high-resolution PDF decks.',
    category: 'convert-to-pdf',
    fromFormat: 'PPTX',
    toFormat: 'PDF',
    iconName: 'Presentation',
    badge: 'Popular',
    color: '#D24726',
    acceptedMimeTypes: [
      'application/vnd.openxmlformats-officedocument.presentationml.presentation',
      'application/vnd.ms-powerpoint'
    ],
    acceptedExtensions: ['.pptx', '.ppt'],
    maxFiles: 5,
    sampleFileName: 'marketing_pitch.pptx',
    seoTitle: 'Convert PowerPoint to PDF Online - Free PPTX to PDF Converter',
    seoDescription: 'Transform PPT and PPTX PowerPoint presentation slides into crisp, shareable PDF documents.',
    longDescription: `
      Sharing PowerPoint presentations with colleagues or clients often leads to layout distortions if the recipient does not have the same fonts or PowerPoint version installed. Converting your PPTX and PPT files to PDF guarantees that every slide, graphic, background, and subtitle renders with 100% precision.
      
      MY PDF CONVERTOR creates compact, high-resolution PDF presentations perfect for emailing, printing handouts, or presenting in full-screen mode on any device.
    `,
    features: [
      'Flawlessly preserves slide orientation (16:9 widescreen or 4:3 standard)',
      'Embeds text, titles, bullet lists, and visual slide cards',
      'Generates compact file sizes ideal for email attachments and handouts',
      'High-resolution vector output suitable for crisp printing',
      'Instant conversion with no sign-up or installation required'
    ],
    stepGuide: [
      { step: 1, title: 'Select PPTX Presentation', desc: 'Upload your .pptx or .ppt PowerPoint presentation deck.' },
      { step: 2, title: 'Process Slides & Layouts', desc: 'The converter parses each slide, drawing shapes, text blocks, and backgrounds.' },
      { step: 3, title: 'Render High-Def PDF', desc: 'Slides are compiled into a sequential multi-page PDF document.' },
      { step: 4, title: 'Download PDF Deck', desc: 'Download your polished presentation PDF ready to share.' }
    ],
    supportedFormats: {
      input: ['Microsoft PowerPoint (.pptx, .ppt)'],
      output: ['PDF (.pdf)']
    },
    faqs: [
      {
        question: 'Will speaker notes and animations transfer to PDF?',
        answer: 'PDF is a static page format, so animations will be converted to their final static slide state, while slide visuals remain pristine.'
      }
    ]
  },
  {
    id: 'excel-to-pdf',
    name: 'Excel to PDF',
    shortDesc: 'Convert Excel spreadsheets (XLS, XLSX, CSV) into cleanly formatted multi-page PDF tables.',
    category: 'convert-to-pdf',
    fromFormat: 'XLSX',
    toFormat: 'PDF',
    iconName: 'Sheet',
    badge: 'Popular',
    color: '#107C41',
    acceptedMimeTypes: [
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      'application/vnd.ms-excel',
      'text/csv'
    ],
    acceptedExtensions: ['.xlsx', '.xls', '.csv'],
    maxFiles: 5,
    sampleFileName: 'sales_budget.xlsx',
    seoTitle: 'Convert Excel to PDF Online - Free XLSX & CSV to PDF Converter',
    seoDescription: 'Convert Microsoft Excel spreadsheets and CSV tables into beautifully formatted PDF documents with auto-fitted columns.',
    longDescription: `
      Printing or sharing raw Excel sheets often results in awkward column breaks, cut-off headers, and unreadable text. MY PDF CONVERTOR's Excel to PDF converter intelligently measures column widths, cell padding, and table dimensions to render balanced, auto-fitted PDF tables.
      
      Whether you need to send a monthly expense report, invoice ledger, product pricing catalogue, or project budget, our tool formats your spreadsheet into an elegant, ready-to-share PDF document.
    `,
    features: [
      'Automatic column width calculation to prevent awkward table cut-offs',
      'Custom orientation options: Portrait or Landscape for wide sheets',
      'Styled header rows, zebra striping, and clean grid borders',
      'Supports multiple worksheets in a single workbook',
      'Fully client-side and completely secure'
    ],
    stepGuide: [
      { step: 1, title: 'Upload Spreadsheet', desc: 'Upload your .xlsx, .xls, or .csv workbook file.' },
      { step: 2, title: 'Format Table Grid', desc: 'Adjust orientation (Landscape for wide tables) and margins if desired.' },
      { step: 3, title: 'Compile PDF Table', desc: 'Our engine generates a clean, paginated PDF with crisp borders and headers.' },
      { step: 4, title: 'Download PDF', desc: 'Download your formatted PDF report instantly.' }
    ],
    supportedFormats: {
      input: ['Excel Workbook (.xlsx, .xls)', 'Comma Separated Values (.csv)'],
      output: ['PDF (.pdf)']
    },
    faqs: [
      {
        question: 'How do wide spreadsheets fit on a PDF page?',
        answer: 'Our engine automatically calculates column ratios and fits tables smoothly. You can also select Landscape mode for very wide datasets.'
      }
    ]
  },
  {
    id: 'pdf-to-jpg',
    name: 'PDF to JPG',
    shortDesc: 'Extract all pages of a PDF into high-resolution JPG images or download as a combined ZIP.',
    category: 'image-tools',
    fromFormat: 'PDF',
    toFormat: 'JPG',
    iconName: 'Image',
    badge: 'Popular',
    color: '#E63946',
    acceptedMimeTypes: ['application/pdf'],
    acceptedExtensions: ['.pdf'],
    maxFiles: 5,
    sampleFileName: 'visual_catalog.pdf',
    seoTitle: 'Convert PDF to JPG Online - High Resolution Image Extractor',
    seoDescription: 'Extract PDF pages and graphics as high-definition JPG and PNG images. Fast, free, and downloadable as single files or ZIP archive.',
    longDescription: `
      Extract crisp, high-resolution JPG images from any PDF file. Perfect for graphic designers, social media managers, researchers, and students who need to share PDF page previews, extract embedded illustrations, or post PDF infographics onto websites and social networks.
      
      MY PDF CONVERTOR renders PDF pages onto high-density HTML5 canvases and encodes them into sharp, optimized JPEG or PNG image files. Multi-page PDFs can be downloaded individually or packaged into a single, organized ZIP archive.
    `,
    features: [
      'High-DPI rendering for razor-sharp typography and image clarity',
      'Download individual page images or all pages bundled in a single ZIP',
      'Custom quality compression slider (standard, high, ultra HD)',
      'Fast parallel processing of all document pages',
      'No quality degradation or unwanted watermarks'
    ],
    stepGuide: [
      { step: 1, title: 'Upload PDF Document', desc: 'Select or drag your PDF file into the converter.' },
      { step: 2, title: 'Select Image Quality', desc: 'Choose output quality settings and image compression.' },
      { step: 3, title: 'Render High-Res Images', desc: 'Each page is converted to an independent JPEG image.' },
      { step: 4, title: 'Download Images / ZIP', desc: 'Save single pages or download the complete ZIP archive.' }
    ],
    supportedFormats: {
      input: ['PDF (.pdf)'],
      output: ['JPEG (.jpg)', 'PNG (.png)', 'ZIP Archive (.zip)']
    },
    faqs: [
      {
        question: 'What image resolution will I receive?',
        answer: 'Pages are rendered at high DPI (up to 300 DPI equivalent) to ensure crystal-clear text and image fidelity.'
      },
      {
        question: 'Can I extract embedded images only?',
        answer: 'You can extract whole rendered pages or standalone visual assets using our extraction options.'
      }
    ]
  },
  {
    id: 'jpg-to-pdf',
    name: 'JPG to PDF',
    shortDesc: 'Combine multiple JPG, PNG, and WebP images into a single, custom-formatted PDF document.',
    category: 'image-tools',
    fromFormat: 'JPG/PNG',
    toFormat: 'PDF',
    iconName: 'Images',
    badge: 'Popular',
    color: '#457B9D',
    acceptedMimeTypes: ['image/jpeg', 'image/png', 'image/webp', 'image/bmp'],
    acceptedExtensions: ['.jpg', '.jpeg', '.png', '.webp', '.bmp'],
    maxFiles: 20,
    sampleFileName: 'scanned_receipts.jpg',
    seoTitle: 'Convert JPG to PDF Online Free - Image to PDF Combiner',
    seoDescription: 'Merge JPG, PNG, and WebP images into a single PDF document. Customize orientation, margins, and page order easily.',
    longDescription: `
      Easily convert and merge your photo scans, receipts, certificates, portfolios, and design mockups into a single, organized PDF file. With MY PDF CONVERTOR's JPG to PDF tool, you can upload multiple images simultaneously, reorder them with drag-and-drop ease, and configure custom page sizes (A4, US Letter, Auto-Fit), orientations, and margin spacing.
      
      Our intelligent image optimizer compresses high-resolution camera photos without noticeable quality loss, generating lightweight PDF files that are easy to email or upload to official government and academic portals.
    `,
    features: [
      'Multi-image batch upload: combine up to 20 images into one PDF',
      'Configurable page sizes: A4, US Letter, or Auto-fit to image aspect ratio',
      'Adjustable margin presets: None, Small, Normal, or Large',
      'Portrait and Landscape orientation toggle',
      'Smart image compression to keep final PDF file size small'
    ],
    stepGuide: [
      { step: 1, title: 'Upload Image Files', desc: 'Drag and drop JPG, PNG, or WebP images into the upload container.' },
      { step: 2, title: 'Customize Layout', desc: 'Select page size (A4/Letter), margins, and orientation.' },
      { step: 3, title: 'Reorder & Merge', desc: 'Arrange images in your desired sequence.' },
      { step: 4, title: 'Download Unified PDF', desc: 'Download your consolidated, professionally bound PDF document.' }
    ],
    supportedFormats: {
      input: ['JPEG (.jpg, .jpeg)', 'PNG (.png)', 'WebP (.webp)', 'Bitmap (.bmp)'],
      output: ['PDF (.pdf)']
    },
    faqs: [
      {
        question: 'Can I combine multiple photos into a single PDF?',
        answer: 'Yes! You can upload multiple JPG/PNG images and merge them into one organized multi-page PDF document.'
      },
      {
        question: 'Will image quality be preserved?',
        answer: 'Yes, original image resolution is preserved while optimizing file byte size for seamless sharing.'
      }
    ]
  },
  {
    id: 'html-to-pdf',
    name: 'HTML to PDF',
    shortDesc: 'Convert webpages, HTML source code, articles, and rich text into clean PDF documents.',
    category: 'convert-to-pdf',
    fromFormat: 'HTML',
    toFormat: 'PDF',
    iconName: 'Code',
    badge: 'Developer',
    color: '#8338EC',
    acceptedMimeTypes: ['text/html', 'text/plain'],
    acceptedExtensions: ['.html', '.htm', '.txt'],
    maxFiles: 3,
    sampleFileName: 'invoice_template.html',
    seoTitle: 'Convert HTML to PDF Online Free - Webpage & Code to PDF',
    seoDescription: 'Convert HTML files, code snippets, and web page content into beautifully rendered PDF documents with CSS styling.',
    longDescription: `
      Generate crisp, print-ready PDF documents from raw HTML code, web templates, emails, or blog articles. Ideal for web developers, designers, billing software integrations, and documentation archiving, MY PDF CONVERTOR's HTML to PDF engine accurately parses CSS styling, font sizes, headings, tables, and hyperlinks.
      
      You can either upload an .html file or type/paste live HTML code directly into our interactive editor to preview and compile your PDF in real-time.
    `,
    features: [
      'Supports live HTML code editing with real-time PDF generation',
      'Preserves CSS styling, margins, colors, and font styles',
      'Formats complex web tables, lists, blockquotes, and code blocks',
      'Ideal for generating invoices, contracts, receipts, and documentation',
      'Instant client-side rendering with no external server transmission'
    ],
    stepGuide: [
      { step: 1, title: 'Provide HTML Content', desc: 'Upload an .html file or enter custom HTML code into the editor.' },
      { step: 2, title: 'Configure Page Settings', desc: 'Select page format (A4/Letter), margins, and orientation.' },
      { step: 3, title: 'Render Document', desc: 'HTML and CSS rules are styled and typeset onto PDF pages.' },
      { step: 4, title: 'Download PDF Document', desc: 'Download your finalized PDF and view in any standard PDF reader.' }
    ],
    supportedFormats: {
      input: ['HTML (.html, .htm)', 'Rich Text / Plain Text (.txt)'],
      output: ['PDF (.pdf)']
    },
    faqs: [
      {
        question: 'Does this support CSS styles inside the HTML?',
        answer: 'Yes, standard CSS styling (colors, font weights, margins, borders, and layouts) is rendered cleanly onto the PDF.'
      },
      {
        question: 'Can I type custom HTML directly?',
        answer: 'Yes! Our tool includes a live HTML editor mode where you can type or paste HTML code directly.'
      }
    ]
  },
  {
    id: 'pdf-to-pdfa',
    name: 'PDF to PDF/A',
    shortDesc: 'Convert standard PDF documents into ISO-compliant PDF/A archival format for long-term preservation.',
    category: 'archival',
    fromFormat: 'PDF',
    toFormat: 'PDF/A',
    iconName: 'Archive',
    badge: 'Standard',
    color: '#3A86FF',
    acceptedMimeTypes: ['application/pdf'],
    acceptedExtensions: ['.pdf'],
    maxFiles: 5,
    sampleFileName: 'legal_archive.pdf',
    seoTitle: 'Convert PDF to PDF/A Online Free - Archival Compliance Converter',
    seoDescription: 'Transform PDF documents into ISO 19005 compliant PDF/A archival format (PDF/A-1b, PDF/A-2b) for legal, academic, and government compliance.',
    longDescription: `
      PDF/A is an ISO-standardized version of the Portable Document Format (PDF) specifically specialized for digital preservation and long-term archiving of electronic documents. While standard PDFs may rely on external fonts, embedded scripts, or non-standard color spaces, PDF/A guarantees that the document will display identically decades into the future.
      
      MY PDF CONVERTOR embeds full font metrics, sanitizes unapproved dynamic scripts, embeds standard device-independent RGB/CMYK color profiles, and injects ISO 19005-compliant XMP metadata schemas. It is indispensable for legal firms, government bodies, universities, and archival institutions.
    `,
    features: [
      'Compliant with ISO 19005 standards (PDF/A-1b and PDF/A-2b profiles)',
      'Embeds standard sRGB/ICC color profiles and removes device dependencies',
      'Removes unapproved audio/video, JavaScript, and dynamic actions for archival security',
      'Injects certified XMP metadata schema tags (pdfaProperty & pdfaExtension)',
      'Essential for legal filings, thesis submissions, and enterprise document retention'
    ],
    stepGuide: [
      { step: 1, title: 'Upload Standard PDF', desc: 'Select the PDF file you need to convert for archival compliance.' },
      { step: 2, title: 'Select PDF/A Profile', desc: 'Choose between PDF/A-1b (basic conformance) or PDF/A-2b (extended).' },
      { step: 3, title: 'Sanitize & Inject Metadata', desc: 'Our engine applies ISO XMP metadata, embeds color profiles, and verifies compliance.' },
      { step: 4, title: 'Download Compliant PDF/A', desc: 'Download your certified archival-grade PDF/A document.' }
    ],
    supportedFormats: {
      input: ['Standard PDF (.pdf)'],
      output: ['Archival PDF/A (.pdf)']
    },
    faqs: [
      {
        question: 'Why is PDF/A required by courts, universities, and governments?',
        answer: 'PDF/A prohibits external dependencies (like un-embedded fonts or external links) to ensure the document remains 100% readable across all software platforms in the future.'
      },
      {
        question: 'What is the difference between PDF/A-1b and PDF/A-2b?',
        answer: 'PDF/A-1b is the foundational visual preservation standard based on PDF 1.4. PDF/A-2b is based on PDF 1.7, supporting JPEG 2000 compression and transparent layers.'
      }
    ]
  }
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: 1,
    title: 'Select Your Tool',
    desc: 'Choose from our 10 professional conversion tools for documents, spreadsheets, presentations, images, and archival files.',
    icon: 'MousePointerClick'
  },
  {
    step: 2,
    title: 'Upload or Drag & Drop',
    desc: 'Easily drag and drop your files or browse your device. Batch file uploads are supported with instant validation.',
    icon: 'UploadCloud'
  },
  {
    step: 3,
    title: 'Instant High-Speed Conversion',
    desc: 'Our browser-based engine parses, converts, and formats your file in seconds with zero data transmission to external servers.',
    icon: 'Zap'
  },
  {
    step: 4,
    title: 'Download Converted File',
    desc: 'Download your converted document, image bundle, or spreadsheet directly with one click.',
    icon: 'Download'
  }
];

export const CORE_FEATURES = [
  {
    title: 'Lightning Fast Conversion',
    desc: 'Powered by modern client-side processing algorithms, conversions complete in seconds without server queues.',
    icon: 'Zap',
    badge: 'Ultra Fast'
  },
  {
    title: 'High-Fidelity Output',
    desc: 'Retains precise fonts, margins, column boundaries, tabular grids, and crisp vector typography across all formats.',
    icon: 'Sparkles',
    badge: 'HD Quality'
  },
  {
    title: '100% Secure & Private',
    desc: 'Your confidential files never leave your browser. Zero cloud storage, zero tracking, and complete privacy compliance.',
    icon: 'ShieldCheck',
    badge: 'GDPR Safe'
  },
  {
    title: 'No File Size Limits',
    desc: 'Convert standard and multi-page documents without arbitrary paywalls or restrictive file caps.',
    icon: 'Infinity',
    badge: 'Uncapped'
  },
  {
    title: 'Cross-Platform Compatible',
    desc: 'Works seamlessly on all modern desktop and mobile browsers including Google Chrome, Safari, Firefox, and Edge.',
    icon: 'Laptop',
    badge: 'Any Device'
  },
  {
    title: '100% Free & No Sign-Up',
    desc: 'Enjoy full unrestricted access to all 10 conversion tools without registering, entering emails, or paying subscriptions.',
    icon: 'Gift',
    badge: 'Zero Cost'
  }
];

export const GENERAL_FAQS = [
  {
    question: 'What is MY PDF CONVERTOR?',
    answer: 'MY PDF CONVERTOR is a 100% free, multi-tool web application providing 10 powerful file conversion tools to convert between PDF and Word, Excel, PowerPoint, JPG, HTML, and ISO-compliant PDF/A archival documents.'
  },
  {
    question: 'Do I need to install any software or plugins?',
    answer: 'No! Everything runs directly inside your web browser. You do not need to download or install desktop software, browser extensions, or plugins.'
  },
  {
    question: 'Are my uploaded files stored on your servers?',
    answer: 'No. All conversions are performed client-side inside your browser environment using advanced WebAssembly and JavaScript libraries. Your files are never transmitted to, stored on, or retained by any remote server.'
  },
  {
    question: 'Is there a limit on how many files I can convert?',
    answer: 'There are no daily or monthly limits. You can convert as many files as you need, completely free of charge.'
  },
  {
    question: 'Can I use MY PDF CONVERTOR on mobile devices?',
    answer: 'Yes! The entire website and its 10 conversion tools are fully responsive and optimized for iPhones, iPads, Android smartphones, tablets, and laptops.'
  },
  {
    question: 'How do I convert multiple files at once?',
    answer: 'You can upload multiple files in tools that support batch processing (such as JPG to PDF and PDF to JPG). You can also download converted multi-page images as a consolidated ZIP file.'
  }
];
