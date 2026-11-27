const fs = require('fs');
const path = require('path');

const mdPath = path.join(__dirname, 'BRD_Official_Report_Group6.md');
const outHtmlPath = path.join(__dirname, 'BRD_Official_Report_Group6.html');

const mdRaw = fs.readFileSync(mdPath, 'utf8');

const htmlContent = `<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>BRD Official Report - Group 6 - OfficePro Distribution - HSU BSA Final Capstone</title>
  <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
  <style>
    :root {
      --primary: #0F2A4A;
      --secondary: #1D4ED8;
      --accent: #D97706;
      --bg-page: #F1F5F9;
      --bg-card: #FFFFFF;
      --text-main: #1E293B;
      --text-muted: #64748B;
      --border: #E2E8F0;
      --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      --font-mono: 'JetBrains Mono', Consolas, monospace;
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      font-family: var(--font-sans);
      background-color: var(--bg-page);
      color: var(--text-main);
      line-height: 1.7;
      font-size: 15px;
    }

    /* Print toolbar */
    .top-toolbar {
      position: sticky;
      top: 0;
      z-index: 1000;
      background: rgba(15, 42, 74, 0.96);
      backdrop-filter: blur(10px);
      color: white;
      padding: 12px 28px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    }
    .top-toolbar .logo-text {
      font-weight: 700;
      font-size: 15px;
      letter-spacing: 0.5px;
      color: #F8FAFC;
    }
    .top-toolbar .badge {
      background: #D97706;
      color: white;
      font-size: 11px;
      font-weight: 700;
      padding: 3px 8px;
      border-radius: 4px;
      margin-left: 8px;
      text-transform: uppercase;
    }
    .top-toolbar .actions {
      display: flex;
      gap: 12px;
    }
    .top-toolbar .actions button {
      background: #1D4ED8;
      color: white;
      border: none;
      padding: 8px 16px;
      border-radius: 6px;
      font-weight: 600;
      font-size: 13px;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      transition: all 0.2s;
    }
    .top-toolbar .actions button:hover {
      background: #2563EB;
      transform: translateY(-1px);
    }

    /* Document Container */
    .document-container {
      max-width: 980px;
      margin: 32px auto 64px auto;
      background: var(--bg-card);
      padding: 64px 76px;
      border-radius: 8px;
      box-shadow: 0 4px 24px rgba(0,0,0,0.06);
      border: 1px solid var(--border);
    }

    /* Markdown Styling */
    h1, h2, h3, h4, h5, h6 {
      color: var(--primary);
      font-weight: 700;
      line-height: 1.35;
      margin-top: 2.2rem;
      margin-bottom: 0.9rem;
    }
    h1 {
      font-size: 26px;
      border-bottom: 2px solid var(--primary);
      padding-bottom: 10px;
      margin-top: 3rem;
    }
    h2 {
      font-size: 20px;
      border-bottom: 1px solid var(--border);
      padding-bottom: 6px;
      margin-top: 2.2rem;
    }
    h3 {
      font-size: 17px;
      color: #1E3A8A;
    }
    h4 {
      font-size: 15px;
    }

    p {
      margin-bottom: 1.2rem;
      text-align: justify;
    }

    ul, ol {
      margin-bottom: 1.2rem;
      padding-left: 28px;
    }
    li {
      margin-bottom: 0.4rem;
    }

    /* Tables */
    table {
      width: 100%;
      border-collapse: collapse;
      margin: 1.8rem 0;
      font-size: 13.5px;
      line-height: 1.5;
    }
    th, td {
      border: 1px solid var(--border);
      padding: 10px 14px;
      text-align: left;
    }
    th {
      background-color: #F1F5F9;
      color: var(--primary);
      font-weight: 700;
    }
    tr:nth-child(even) td {
      background-color: #F8FAFC;
    }

    /* Images */
    img {
      max-width: 100%;
      height: auto;
      display: block;
      margin: 1.8rem auto;
      border-radius: 8px;
      box-shadow: 0 4px 14px rgba(0,0,0,0.12);
      border: 1px solid var(--border);
    }

    /* Blockquotes */
    blockquote {
      border-left: 4px solid var(--secondary);
      background-color: #EFF6FF;
      padding: 14px 20px;
      margin: 1.4rem 0;
      border-radius: 0 6px 6px 0;
      color: #1E3A8A;
    }

    /* Code blocks */
    code {
      font-family: var(--font-mono);
      font-size: 13px;
      background: #F1F5F9;
      padding: 2px 6px;
      border-radius: 4px;
      color: #B45309;
    }
    pre {
      margin: 1.4rem 0;
    }
    pre code {
      display: block;
      padding: 16px 20px;
      background: #0F172A;
      color: #F8FAFC;
      border-radius: 6px;
      overflow-x: auto;
      line-height: 1.55;
    }

    hr {
      border: none;
      border-top: 1px solid var(--border);
      margin: 2.5rem 0;
    }

    /* Print styling */
    @media print {
      .top-toolbar { display: none !important; }
      body {
        background: white;
        font-size: 11pt;
        color: black;
      }
      .document-container {
        max-width: 100%;
        margin: 0;
        padding: 0;
        border: none;
        box-shadow: none;
      }
      h1 {
        page-break-before: always;
        font-size: 18pt;
      }
      h1:first-of-type {
        page-break-before: avoid;
      }
      h2 {
        page-break-after: avoid;
        font-size: 14pt;
      }
      table, img, blockquote {
        page-break-inside: avoid;
      }
      @page {
        size: A4;
        margin: 20mm 15mm 20mm 15mm;
      }
    }
  </style>
</head>
<body>
  <div class="top-toolbar">
    <div style="display: flex; align-items: center;">
      <span class="logo-text">HSU &bull; Business Systems Analysis (BSA)</span>
      <span class="badge">Master BRD (Phase 1 & 2)</span>
    </div>
    <div class="actions">
      <button onclick="window.print()">
        <svg width="15" height="15" fill="currentColor" viewBox="0 0 16 16"><path d="M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"/><path d="M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2H5zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4V3zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2H5zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1z"/></svg>
        In Báo Cáo / Xuất PDF (Ctrl + P)
      </button>
    </div>
  </div>

  <div class="document-container" id="content">
    <p style="text-align:center; padding: 40px; color: #64748B;">Đang tải và hiển thị tài liệu báo cáo...</p>
  </div>

  <textarea id="markdown-source" style="display:none;"></textarea>

  <script>
    const rawMarkdown = ${JSON.stringify(mdRaw)};
    document.addEventListener('DOMContentLoaded', function() {
      if (window.marked) {
        marked.setOptions({
          gfm: true,
          breaks: true
        });
        document.getElementById('content').innerHTML = marked.parse(rawMarkdown);
      } else {
        document.getElementById('content').innerHTML = '<div style="white-space:pre-wrap; font-family:monospace;">' + rawMarkdown + '</div>';
      }
    });
  </script>
</body>
</html>`;

fs.writeFileSync(outHtmlPath, htmlContent, 'utf8');
console.log('Successfully generated:', outHtmlPath);
