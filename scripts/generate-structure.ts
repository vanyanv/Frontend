import * as fs from 'fs';
import * as path from 'path';

// Immediately invoked function expression (IIFE) to control execution
(async () => {
  try {
    // Move up one directory to find src
    const srcPath = path.join(process.cwd(), '..', 'src');

    // Initialize README content
    let readmeContent = '\n# Project Structure\n\n```\n/src\n';

    // Read directories
    const files = fs.readdirSync(srcPath);

    // Sort files alphabetically
    files.sort();

    // Process each file/directory
    files.forEach((file, index) => {
      const filePath = path.join(srcPath, file);
      if (fs.statSync(filePath).isDirectory()) {
        // Add directory to structure
        const prefix = index === files.length - 1 ? '└──' : '├──';
        readmeContent += `${prefix} ${file}/\n`;
      }
    });

    // Close the code block
    readmeContent += '```\n';

    // Read existing README content
    let existingContent = '';
    const readmePath = path.join(process.cwd(), '..', 'README.md');

    if (fs.existsSync(readmePath)) {
      existingContent = fs.readFileSync(readmePath, 'utf8');
      // Remove old structure if it exists (between # Project Structure and ```)
      existingContent = existingContent.replace(
        /# Project Structure[\s\S]*?```\n/m,
        ''
      );
    }

    // Combine existing content with new structure
    const finalContent = existingContent + readmeContent;

    // Write to README.md
    fs.writeFileSync(readmePath, finalContent);

    console.log('Successfully updated README.md with folder structure!');
  } catch (error) {
    console.error('Error generating structure:', error);
  }
})();
