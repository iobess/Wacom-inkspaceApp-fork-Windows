const fs = require('fs');
const path = require('path');
const glob = require('glob');

const srcDir = path.resolve(__dirname, '../src');

// Find all SVG files in src
glob(path.join(srcDir, '**/*.svg'), (err, files) => {
    if (err) {
        console.error('Error finding files:', err);
        return;
    }

    console.log(`Found ${files.length} SVG files.`);

    files.forEach(file => {
        let content = fs.readFileSync(file, 'utf8');
        let originalContent = content;

        // Replace fill colors (hex, rgb, named) with #000000, excluding 'none'
        // We use a regex that matches fill="..." and replaces the value if it's not none
        content = content.replace(/fill="([^"]*)"/g, (match, p1) => {
            if (p1.toLowerCase() === 'none' || p1.toLowerCase() === 'transparent') {
                return match;
            }
            return 'fill="#000000"';
        });

        // Replace stroke colors
        content = content.replace(/stroke="([^"]*)"/g, (match, p1) => {
            if (p1.toLowerCase() === 'none' || p1.toLowerCase() === 'transparent') {
                return match;
            }
            return 'stroke="#000000"';
        });

        // Also handle style attributes? e.g. style="fill: #xxx"
        content = content.replace(/style="([^"]*)"/g, (match, p1) => {
            let newStyle = p1.replace(/fill:\s*([^;"]+)/g, (m, val) => {
                if (val.trim().toLowerCase() === 'none') return m;
                return 'fill: #000000';
            });
            newStyle = newStyle.replace(/stroke:\s*([^;"]+)/g, (m, val) => {
                if (val.trim().toLowerCase() === 'none') return m;
                return 'stroke: #000000';
            });
            return `style="${newStyle}"`;
        });

        if (content !== originalContent) {
            fs.writeFileSync(file, content, 'utf8');
            console.log(`Updated: ${file}`);
        }
    });

    console.log('Done updating SVGs.');
});
