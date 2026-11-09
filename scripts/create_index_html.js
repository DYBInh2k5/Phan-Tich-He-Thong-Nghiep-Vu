const fs = require('fs');

let content = fs.readFileSync('Project/Final Project/Presentation_Slides.html', 'utf8');

// Add the Word Report button in header controls right after PDF button
const wordBtnHtml = `
            <a href="./Project/Final%20Project/Phase%201.docx" class="btn-ctrl" id="word-btn" style="text-decoration: none; display: inline-flex; align-items: center; gap: 0.35rem;" download title="Tải file Báo cáo Word Phase 1">📥 <span id="word-btn-text">Báo cáo Word</span></a>`;

content = content.replace(
    /(<button class="btn-ctrl" onclick="exportToPDF\(\)" id="pdf-btn"[^>]*>.*?<\/button>)/,
    `$1${wordBtnHtml}`
);

// Update applyLanguage() to also update word-btn-text
content = content.replace(
    /pdfBtn\.innerHTML\s*=\s*isVI\s*\?\s*['"]📄 Xuất PDF['"]\s*:\s*['"]📄 Export PDF['"];/,
    `pdfBtn.innerHTML = isVI ? '📄 Xuất PDF' : '📄 Export PDF';
            const wordBtnText = document.getElementById('word-btn-text');
            if (wordBtnText) {
                wordBtnText.innerText = isVI ? 'Báo cáo Word' : 'Word Report';
            }`
);

fs.writeFileSync('index.html', content, 'utf8');
console.log('Successfully generated index.html at root! Length:', content.length);
