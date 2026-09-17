import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';

(async () => {
  console.log('Starting PDF generation...');
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  
  // Assuming the dev server is running on 3001
  const url = 'http://127.0.0.1:3001/resume/';
  console.log(`Navigating to ${url}...`);
  
  try {
    let success = false;
    for (let attempt = 1; attempt <= 4; attempt++) {
      try {
        await page.goto(url, { waitUntil: 'networkidle0', timeout: 15000 });
        success = true;
        break;
      } catch (e) {
        console.log(`Attempt ${attempt} failed, retrying in 1s...`);
        await new Promise((r) => setTimeout(r, 1000));
      }
    }
    if (!success) {
      throw new Error('Failed to load page after 4 attempts');
    }
    
    // Add print specific styles if needed dynamically
    await page.addStyleTag({
      content: `
        @page { size: A4 portrait; margin: 8mm; }
        @media print {
          body { -webkit-print-color-adjust: exact; }
          .print\\:hidden { display: none !important; }
        }
      `
    });

    const pdfPath = path.join(process.cwd(), 'public', 'resume.pdf');
    await page.pdf({
      path: pdfPath,
      format: 'A4',
      printBackground: true,
      displayHeaderFooter: false,
    });
    
    console.log(`PDF successfully generated at ${pdfPath}`);

    const pdfData = fs.readFileSync(pdfPath);
    const matches = pdfData.toString('latin1').match(/\/Type\s*\/Page\b/g);
    console.log(`Final PDF page count: ${matches ? matches.length : 'unknown'}`);
  } catch (err) {
    console.error('Error generating PDF:', err);
  } finally {
    await browser.close();
  }
})();
