const fs = require('fs');

let content = fs.readFileSync('Project/Final Project/Presentation_Slides.html', 'utf8');

// Function to enlarge typography in a slide HTML snippet
function enlargeSlideHtml(html, slideNum) {
    let res = html;

    // Card titles
    res = res.replace(/<div class="card-title"[^>]*style="[^"]*font-size:\s*1\.[01]5?rem;?[^"]*"/g, '<div class="card-title" style="font-size: 1.45rem;"');
    res = res.replace(/<div class="card-title">/g, '<div class="card-title" style="font-size: 1.45rem;">');

    // General body text replacements: catch both 0.9rem and 0.92rem / 0.95rem
    res = res.replace(/font-size:\s*0\.8[0-9]?rem/g, 'font-size: 1.1rem');
    res = res.replace(/font-size:\s*0\.9[0-9]?rem/g, 'font-size: 1.16rem');
    res = res.replace(/font-size:\s*1\.0[0-4]rem/g, 'font-size: 1.18rem');

    // Flow arrow enlargement
    res = res.replace(/class="flow-arrow"[^>]*style="[^"]*"/g, 'class="flow-arrow" style="color: var(--accent-emerald); font-size: 1.45rem; font-weight: 800;"');

    // Slide-specific adjustments
    if (slideNum === 2) {
        res = res.replace(/line-height:\s*1\.55/g, 'line-height: 1.65');
    }

    if (slideNum === 6) {
        res = res.replace(/padding:\s*0\.65rem\s+0\.85rem/g, 'padding: 0.85rem 1.1rem');
        res = res.replace(/margin-bottom:\s*0\.5rem/g, 'margin-bottom: 0.65rem');
    }

    if (slideNum === 9) {
        res = res.replace(/font-size:\s*1\.1rem/g, 'font-size: 1.35rem');
        res = res.replace(/padding:\s*0\.95rem\s+1\.15rem/g, 'padding: 1.1rem 1.3rem');
    }

    if (slideNum === 13) {
        res = res.replace(/padding-left:\s*1\.1rem/g, 'padding-left: 1.3rem');
        res = res.replace(/line-height:\s*1\.6/g, 'line-height: 1.75');
    }

    if (slideNum === 14) {
        res = res.replace(/font-size:\s*1\.05rem/g, 'font-size: 1.32rem');
        res = res.replace(/line-height:\s*1\.6/g, 'line-height: 1.7');
        res = res.replace(/padding:\s*1\.25rem\s+1\.45rem/g, 'padding: 1.1rem 1.25rem');
    }

    if (slideNum === 15) {
        res = res.replace(/padding:\s*0\.75rem\s+1rem/g, 'padding: 0.95rem 1.2rem');
    }

    if (slideNum === 16) {
        // Lane headers in SVG
        res = res.replace(/(<text x="15" y="48" font-size=")[^"]*(")/g, '$111.5$2 font-weight="800"');
        res = res.replace(/(<text x="15" y="125" font-size=")[^"]*(")/g, '$11$2 font-weight="800"');
        res = res.replace(/(<text x="15" y="200" font-size=")[^"]*(")/g, '$11.5$2 font-weight="800"');
        res = res.replace(/(<text x="15" y="280" font-size=")[^"]*(")/g, '$11.5$2 font-weight="800"');
        res = res.replace(/(<text x="15" y="355" font-size=")[^"]*(")/g, '$11$2 font-weight="800"');

        // Text nodes inside tasks: font-size="8" -> font-size="10.5", font-size="9" -> font-size="11"
        res = res.replace(/font-size="8"/g, 'font-size="10.5"');
        res = res.replace(/font-size="8\.5"/g, 'font-size="11"');
        res = res.replace(/font-size="9"/g, 'font-size="11.5"');
        res = res.replace(/font-size="6\.5"/g, 'font-size="8.5"');
        res = res.replace(/font-size="7"/g, 'font-size="9.5"');

        // Bottom rubric card
        res = res.replace(/padding:\s*0\.4rem\s+0\.8rem/g, 'padding: 0.75rem 1.1rem');
        res = res.replace(/line-height:\s*1\.35/g, 'line-height: 1.55');
    }

    return res;
}

const targetSlides = [2, 3, 4, 5, 6, 7, 8, 9, 13, 14, 15, 16];

// 2. UPDATE DOM SLIDES
console.log('2. Updating DOM Slide Blocks...');
const viewportStart = content.indexOf('<div id="viewport">');
const scriptStart = content.indexOf('<script>');
let viewport = content.substring(viewportStart, scriptStart);

const domSlideBlocks = viewport.split(/(<div\s+class="slide(?:\s+active)?"[^>]*>)/);
const totalSlides = (domSlideBlocks.length - 1) / 2;

for (let s = 1; s <= totalSlides; s++) {
    if (targetSlides.includes(s)) {
        const bodyIndex = 2 * s;
        domSlideBlocks[bodyIndex] = enlargeSlideHtml(domSlideBlocks[bodyIndex], s);
        console.log(`Updated DOM Slide ${s}`);
    }
}

viewport = domSlideBlocks.join('');
content = content.substring(0, viewportStart) + viewport + content.substring(scriptStart);

// 3. UPDATE slidesVI ARRAY IN SCRIPT
console.log('3. Updating slidesVI array in script...');
const matchVI = content.match(/const slidesVI = (\[.*?\]);\s*function toggleTheme/s);
if (matchVI) {
    const rawArrayContent = matchVI[1];
    const viSlides = JSON.parse(rawArrayContent);
    console.log('Parsed viSlides, count:', viSlides.length);

    for (let s = 1; s <= viSlides.length; s++) {
        if (targetSlides.includes(s)) {
            viSlides[s - 1] = enlargeSlideHtml(viSlides[s - 1], s);
            console.log(`Updated slidesVI for Slide ${s}`);
        }
    }

    const newVIString = JSON.stringify(viSlides);
    content = content.replace(
        /const slidesVI = \[.*?\];\s*function toggleTheme/s,
        `const slidesVI = ${newVIString};\n        function toggleTheme`
    );
    console.log('Successfully re-inserted updated slidesVI!');
} else {
    console.error('Could not match slidesVI in script!');
}

fs.writeFileSync('Project/Final Project/Presentation_Slides.html', content, 'utf8');
console.log('Presentation_Slides.html successfully updated and saved!');
