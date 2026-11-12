const fs = require('fs');
const path = require('path');

// 1. Read BRD_Official_Report_Group6.md
const md = fs.readFileSync('Project/Final Project/BRD_Official_Report_Group6.md', 'utf8');

// 2. Read PRISTINE template document.xml
const templateDocXml = fs.readFileSync('scratch/template_pristine/word/document.xml', 'utf8');

// 3. Extract sectPr 1, sectPr 2, sectPr 3 from template
const pos1 = templateDocXml.indexOf('<w:sectPr');
const sectPr1End = templateDocXml.indexOf('</w:sectPr>', pos1) + 11;
const coverXmlRaw = templateDocXml.substring(0, pos1);
const sectPr1 = templateDocXml.substring(pos1, sectPr1End);

const pos2 = templateDocXml.indexOf('<w:sectPr', sectPr1End);
const sectPr2End = templateDocXml.indexOf('</w:sectPr>', pos2) + 11;
const sectPr2 = templateDocXml.substring(pos2, sectPr2End);

const pos3 = templateDocXml.indexOf('<w:sectPr', sectPr2End);
const sectPr3End = templateDocXml.indexOf('</w:sectPr>', pos3) + 11;
const sectPr3 = templateDocXml.substring(pos3, sectPr3End);

// 4. Update Cover Page placeholders
let coverXml = coverXmlRaw;
coverXml = coverXml.replace(/course name/g, 'course BUSINESS SYSTEMS ANALYSIS (BSA)')
                   .replace(/\[ENTERPRISE DOMAIN\/MODEL\]:\s*\[COMPANY NAME\]/g, 'B2B WHOLESALE &amp; DISTRIBUTION (OFFICE SUPPLIES &amp; STATIONERY): OFFICEPRO DISTRIBUTION CO., LTD.')
                   .replace(/Student ID-\s*Student Name/g, 'Vo Duy Binh (22301500) &amp; Pham Nguyen Gia Thuan (22204631)')
                   .replace(/<w:t>Class<\/w:t>/g, '<w:t>Class: 0100</w:t>')
                   .replace(/<w:t>Under The Guidance Of:<\/w:t>/g, '<w:t>Under The Guidance Of: MSc. Nguyen Thi Thanh Thanh</w:t>')
                   .replace(/Month, year/g, 'November 2026');

// Helper to escape XML
function escapeXml(unsafe) {
  if (typeof unsafe !== 'string') return '';
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

// Convert inline formatting to Word runs
function makeDrawingImage(rId, cx, cy, docId, name) {
  return `<w:p><w:pPr><w:jc w:val="center"/><w:spacing w:before="180" w:after="180"/></w:pPr><w:r><w:drawing><wp:inline distT="0" distB="0" distL="0" distR="0"><wp:extent cx="${cx}" cy="${cy}"/><wp:effectExtent l="0" t="0" r="0" b="0"/><wp:docPr id="${docId}" name="${name}"/><wp:cNvGraphicFramePr><a:graphicFrameLocks xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" noChangeAspect="1"/></wp:cNvGraphicFramePr><a:graphic xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main"><a:graphicData uri="http://schemas.openxmlformats.org/drawingml/2006/picture"><pic:pic xmlns:pic="http://schemas.openxmlformats.org/drawingml/2006/picture"><pic:nvPicPr><pic:cNvPr id="${docId}" name="${name}"/><pic:cNvPicPr><a:picLocks noChangeAspect="1"/></pic:cNvPicPr></pic:nvPicPr><pic:blipFill><a:blip r:embed="${rId}" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"/><a:stretch><a:fillRect/></a:stretch></pic:blipFill><pic:spPr><a:xfrm><a:off x="0" y="0"/><a:ext cx="${cx}" cy="${cy}"/></a:xfrm><a:prstGeom prst="rect"><a:avLst/></a:prstGeom></pic:spPr></pic:pic></a:graphicData></a:graphic></wp:inline></w:drawing></w:r></w:p>`;
}

function parseInlineMarkdown(text) {
  if (!text) return '';
  const tokens = [];
  let remaining = text;
  const regex = /(\*\*.*?\*\*|\*.*?\*|`.*?`)/;
  
  while (remaining.length > 0) {
    const match = remaining.match(regex);
    if (!match) {
      tokens.push({ text: remaining, bold: false, italic: false, code: false });
      break;
    }
    if (match.index > 0) {
      tokens.push({ text: remaining.substring(0, match.index), bold: false, italic: false, code: false });
    }
    const matchedStr = match[0];
    if (matchedStr.startsWith('**') && matchedStr.endsWith('**')) {
      tokens.push({ text: matchedStr.slice(2, -2), bold: true, italic: false, code: false });
    } else if (matchedStr.startsWith('*') && matchedStr.endsWith('*')) {
      tokens.push({ text: matchedStr.slice(1, -1), bold: false, italic: true, code: false });
    } else if (matchedStr.startsWith('`') && matchedStr.endsWith('`')) {
      tokens.push({ text: matchedStr.slice(1, -1), bold: false, italic: false, code: true });
    }
    remaining = remaining.substring(match.index + matchedStr.length);
  }

  let runsXml = '';
  tokens.forEach(tok => {
    let rPr = '<w:rPr><w:rFonts w:ascii="Times New Roman" w:hAnsi="Times New Roman"/><w:sz w:val="24"/><w:szCs w:val="24"/>';
    if (tok.bold) rPr += '<w:b/><w:bCs/>';
    if (tok.italic) rPr += '<w:i/><w:iCs/>';
    if (tok.code) {
      rPr += '<w:rFonts w:ascii="Consolas" w:hAnsi="Consolas"/><w:color w:val="6750A4"/><w:shd w:val="clear" w:color="auto" w:fill="F3EDF7"/>';
    }
    rPr += '</w:rPr>';
    runsXml += `<w:r>${rPr}<w:t xml:space="preserve">${escapeXml(tok.text)}</w:t></w:r>`;
  });

  return runsXml;
}

// Build paragraph
function makeParagraph(text, style = 'Normal', options = {}) {
  let pPr = `<w:pPr><w:pStyle w:val="${style}"/>`;
  if (options.align) {
    pPr += `<w:jc w:val="${options.align}"/>`;
  }
  if (options.spacingBefore) {
    pPr += `<w:spacing w:before="${options.spacingBefore}" w:after="${options.spacingAfter || 120}" w:line="276" w:lineRule="auto"/>`;
  } else {
    pPr += `<w:spacing w:after="${options.spacingAfter || 120}" w:line="276" w:lineRule="auto"/>`;
  }
  if (options.bullet) {
    pPr += `<w:numPr><w:ilvl w:val="0"/><w:numId w:val="1"/></w:numPr>`;
  }
  pPr += `</w:pPr>`;

  const runs = parseInlineMarkdown(text);
  return `<w:p>${pPr}${runs}</w:p>`;
}

// Build table
function makeTable(tableLines) {
  if (!tableLines || tableLines.length === 0) return '';
  const rows = [];
  tableLines.forEach(line => {
    const trimmed = line.trim();
    if (!trimmed.startsWith('|') || !trimmed.endsWith('|')) return;
    if (/^\|[\s\-:|]+\|$/.test(trimmed)) return;
    const cells = trimmed.slice(1, -1).split('|').map(c => c.trim());
    rows.push(cells);
  });
  if (rows.length === 0) return '';

  const numCols = Math.max(...rows.map(r => r.length));
  const colWidth = Math.floor(9200 / numCols);

  let tblXml = `<w:tbl><w:tblPr>
    <w:tblStyle w:val="TableGrid"/>
    <w:tblW w:w="0" w:type="auto"/>
    <w:tblLook w:val="04A0" w:firstRow="1" w:lastRow="0" w:firstColumn="1" w:lastColumn="0" w:noHBand="0" w:noVBand="1"/>
    <w:tblBorders>
      <w:top w:val="single" w:sz="6" w:space="0" w:color="B0C4DE"/>
      <w:left w:val="single" w:sz="6" w:space="0" w:color="B0C4DE"/>
      <w:bottom w:val="single" w:sz="6" w:space="0" w:color="B0C4DE"/>
      <w:right w:val="single" w:sz="6" w:space="0" w:color="B0C4DE"/>
      <w:insideH w:val="single" w:sz="4" w:space="0" w:color="D9E2EC"/>
      <w:insideV w:val="single" w:sz="4" w:space="0" w:color="D9E2EC"/>
    </w:tblBorders>
  </w:tblPr><w:tblGrid>`;

  for (let c = 0; c < numCols; c++) {
    tblXml += `<w:gridCol w:w="${colWidth}"/>`;
  }
  tblXml += `</w:tblGrid>`;

  rows.forEach((row, rowIndex) => {
    const isHeader = (rowIndex === 0);
    tblXml += `<w:tr><w:trPr>${isHeader ? '<w:tblHeader/>' : ''}<w:cantSplit/></w:trPr>`;

    for (let c = 0; c < numCols; c++) {
      const cellText = row[c] || '';
      const cellFill = isHeader ? 'EBF1F5' : (rowIndex % 2 === 1 ? 'FFFFFF' : 'F8FAFC');

      tblXml += `<w:tc><w:tcPr>
        <w:tcW w:w="${colWidth}" w:type="dxa"/>
        <w:shd w:val="clear" w:color="auto" w:fill="${cellFill}"/>
        <w:tcMar>
          <w:top w:w="120" w:type="dxa"/>
          <w:bottom w:w="120" w:type="dxa"/>
          <w:left w:w="150" w:type="dxa"/>
          <w:right w:w="150" w:type="dxa"/>
        </w:tcMar>
      </w:tcPr>`;

      const pPr = `<w:pPr><w:spacing w:after="0" w:line="240" w:lineRule="auto"/>${isHeader ? '<w:jc w:val="center"/>' : ''}</w:pPr>`;
      let runs = parseInlineMarkdown(cellText);
      if (isHeader) {
        runs = runs.replace(/<w:rPr>/g, '<w:rPr><w:b/><w:bCs/>');
      }
      tblXml += `<w:p>${pPr}${runs}</w:p></w:tc>`;
    }
    tblXml += `</w:tr>`;
  });

  tblXml += `</w:tbl><w:p><w:pPr><w:spacing w:after="140" w:line="240" w:lineRule="auto"/></w:pPr></w:p>`;
  return tblXml;
}

// 5. Parse Markdown lines and divide into Front Matter & Body
const mdLines = md.split('\n');

let frontMatterXml = '';
let bodyXml = '';
let isBody = false;

let insideTable = false;
let currentTableLines = [];
let insideMermaid = false;

for (let i = 0; i < mdLines.length; i++) {
  const line = mdLines[i];
  const trimmed = line.trim();

  // Check table lines
  if (trimmed.startsWith('|') && trimmed.endsWith('|')) {
    insideTable = true;
    currentTableLines.push(trimmed);
    continue;
  } else {
    if (insideTable) {
      const tblOutput = makeTable(currentTableLines);
      if (isBody) {
        bodyXml += tblOutput;
      } else {
        frontMatterXml += tblOutput;
      }
      insideTable = false;
      currentTableLines = [];
    }
  }

  // Check transition to Main Body
  if (trimmed.startsWith('# SECTION 1.') || trimmed.startsWith('# SECTION 1:')) {
    isBody = true;
  }

  // Skip top-level metadata table on page 1 since cover page handles it
  if (!isBody && (trimmed.startsWith('# BUSINESS REQUIREMENTS DOCUMENT FOR B2B') || trimmed.startsWith('**Project Attribute**'))) {
    continue;
  }

  // Blank lines
  if (trimmed === '') {
    continue;
  }

  // Horizontal rules
  if (trimmed === '---') {
    continue;
  }

  // Skip HTML details/summary tags
  if (trimmed.startsWith('<details') || trimmed.startsWith('</details') || trimmed.startsWith('<summary') || trimmed.startsWith('</summary')) {
    continue;
  }

  // Handle Mermaid blocks (skip raw code in word doc since we embed the high-res PNG image instead)
  if (trimmed.startsWith('```mermaid')) {
    insideMermaid = true;
    continue;
  }
  if (insideMermaid) {
    if (trimmed === '```') {
      insideMermaid = false;
    }
    continue;
  }
  if (trimmed === '```') {
    continue;
  }

  // Handle images
  if (trimmed.includes('figure_3_2_as_is_swimlane.png')) {
    const imgXml = makeDrawingImage('rIdFig32', 5760000, 2321632, 201, 'Figure 3.2 AS-IS Swimlane');
    if (isBody) bodyXml += imgXml; else frontMatterXml += imgXml;
    continue;
  }
  if (trimmed.includes('figure_3_3_to_be_swimlane.png')) {
    const imgXml = makeDrawingImage('rIdFig33', 5760000, 2380408, 202, 'Figure 3.3 TO-BE Swimlane');
    if (isBody) bodyXml += imgXml; else frontMatterXml += imgXml;
    continue;
  }

  const odooMap = {
    'odoo_00_home_dashboard.png': { rId: 'rIdOdoo00', cy: 3240000, name: 'Figure 6.1 Odoo Dashboard' },
    'odoo_01_product_ST001_configured.png': { rId: 'rIdOdoo01', cy: 3100000, name: 'Figure 6.3 ST-001 Setup' },
    'odoo_02_products_catalog_inventory.png': { rId: 'rIdOdoo02', cy: 2600000, name: 'Figure 6.4 10-SKU Catalog' },
    'odoo_03_contract_pricelist_rule.png': { rId: 'rIdOdoo03', cy: 2900000, name: 'Figure 6.5 Pricelist Rule' },
    'odoo_04_b2b_customer_contract_profile.png': { rId: 'rIdOdoo04', cy: 3100000, name: 'Figure 6.6 Customer Profile' },
    'odoo_05_quotation_contract_price_applied.png': { rId: 'rIdOdoo05', cy: 3200000, name: 'Figure 6.7 Quotation S00001' },
    'odoo_06_atp_inventory_forecast_warning.png': { rId: 'rIdOdoo06', cy: 3100000, name: 'Figure 6.8 ATP Forecast Warning' },
    'odoo_07_confirmed_sales_order_delivery_link.png': { rId: 'rIdOdoo07', cy: 3100000, name: 'Figure 6.9 Confirmed Sales Order' },
    'odoo_08_warehouse_delivery_order_waiting.png': { rId: 'rIdOdoo08', cy: 3100000, name: 'Figure 6.10 Delivery Order' },
    'odoo_09_customer_vat_invoice_posted_3way_match.png': { rId: 'rIdOdoo09', cy: 3100000, name: 'Figure 6.11 Posted VAT Invoice' },
  };

  let matchedOdoo = false;
  for (const [key, val] of Object.entries(odooMap)) {
    if (trimmed.includes(key)) {
      const imgXml = makeDrawingImage(val.rId, 5760000, val.cy, 300 + Object.keys(odooMap).indexOf(key), val.name);
      if (isBody) bodyXml += imgXml; else frontMatterXml += imgXml;
      matchedOdoo = true;
      break;
    }
  }
  if (matchedOdoo) continue;

  // Headings
  if (trimmed.startsWith('#### ')) {
    const text = trimmed.replace(/^####\s+/, '');
    const p = makeParagraph(text, 'Heading4', { spacingBefore: 160, spacingAfter: 80 });
    if (isBody) bodyXml += p; else frontMatterXml += p;
  } else if (trimmed.startsWith('### ')) {
    const text = trimmed.replace(/^###\s+/, '');
    const p = makeParagraph(text, 'Heading3', { spacingBefore: 200, spacingAfter: 100 });
    if (isBody) bodyXml += p; else frontMatterXml += p;
  } else if (trimmed.startsWith('## ')) {
    const text = trimmed.replace(/^##\s+/, '');
    const p = makeParagraph(text, 'Heading2', { spacingBefore: 260, spacingAfter: 120 });
    if (isBody) bodyXml += p; else frontMatterXml += p;
  } else if (trimmed.startsWith('# ')) {
    const text = trimmed.replace(/^#\s+/, '');
    const p = makeParagraph(text, 'Heading1', { spacingBefore: 360, spacingAfter: 160 });
    if (isBody) bodyXml += p; else frontMatterXml += p;
  } else if (trimmed.startsWith('> ')) {
    // Blockquote
    const text = trimmed.replace(/^>\s*/, '');
    const p = makeParagraph(text, 'Normal', { spacingBefore: 80, spacingAfter: 80 });
    if (isBody) bodyXml += p; else frontMatterXml += p;
  } else if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
    // Bullet item
    const text = trimmed.replace(/^[-*]\s+/, '');
    const p = makeParagraph(text, 'ListBullet2', { bullet: true, spacingAfter: 60 });
    if (isBody) bodyXml += p; else frontMatterXml += p;
  } else {
    // Normal paragraph
    const p = makeParagraph(trimmed, 'Normal', { spacingAfter: 120 });
    if (isBody) bodyXml += p; else frontMatterXml += p;
  }
}

// In case file ended inside a table
if (insideTable) {
  const tblOutput = makeTable(currentTableLines);
  if (isBody) bodyXml += tblOutput; else frontMatterXml += tblOutput;
}

// 6. Combine all sections into complete document.xml
// Section 1: coverXml + sectPr1 + </w:pPr></w:p>
// Section 2: frontMatterXml + <w:p><w:pPr>${sectPr2}</w:pPr></w:p>
// Section 3: bodyXml + sectPr3 + </w:body></w:document>
let fullDocumentXml = `${coverXml}${sectPr1}</w:pPr></w:p>
${frontMatterXml}
<w:p><w:pPr>${sectPr2}</w:pPr></w:p>
${bodyXml}
${sectPr3}
</w:body>
</w:document>`;

fs.writeFileSync('scratch/docx_unpack/word/document.xml', fullDocumentXml, 'utf8');
console.log('Successfully generated full document.xml! Length:', fullDocumentXml.length);
