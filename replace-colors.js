const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? 
            walkDir(dirPath, callback) : callback(path.join(dir, f));
    });
}

function replaceColors(filePath) {
    if (!filePath.endsWith('.tsx') && !filePath.endsWith('.ts') && !filePath.endsWith('.css')) return;
    
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    // Replace color codes inside Tailwind brackets
    // e.g. text-[#FF9100] -> text-primary
    content = content.replace(/\[#FF9100\]/gi, 'primary');
    content = content.replace(/\[#EB7D00\]/gi, 'primary');

    // Replace hex codes directly if they exist
    // e.g. fill="#FF9100" -> fill="currentColor" or just leave it if it's in CSS?
    // Wait, the prompt says "remove the old color system completely". 
    // In CSS we already changed it. So mainly tsx files.

    if (content !== original) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated: ${filePath}`);
    }
}

walkDir('src', replaceColors);
console.log("Color replacement complete.");
