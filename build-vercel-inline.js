#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('🚀 Building with INLINE CSS/JS for Vercel...');

try {
  // Build the frontend
  console.log('📦 Building frontend with Vite...');
  execSync('npx vite build', { 
    stdio: 'inherit', 
    cwd: process.cwd(),
    env: { ...process.env, NODE_ENV: 'production' }
  });
  
  // Copy assets
  const srcAssets = path.join(process.cwd(), 'attached_assets');
  const destAssets = path.join(process.cwd(), 'dist/public/assets');
  
  if (fs.existsSync(srcAssets)) {
    console.log('📁 Copying assets...');
    const files = fs.readdirSync(srcAssets);
    files.forEach(file => {
      if (!file.startsWith('.') && fs.lstatSync(path.join(srcAssets, file)).isFile()) {
        fs.copyFileSync(path.join(srcAssets, file), path.join(destAssets, file));
        console.log(`✅ Copied ${file}`);
      }
    });
  }
  
  // Read the built HTML file
  const htmlPath = path.join(process.cwd(), 'dist/public/index.html');
  let htmlContent = fs.readFileSync(htmlPath, 'utf8');
  
  // Find CSS and JS files
  const assetsDir = path.join(process.cwd(), 'dist/public/assets');
  const cssFiles = fs.readdirSync(assetsDir).filter(f => f.endsWith('.css'));
  const jsFiles = fs.readdirSync(assetsDir).filter(f => f.endsWith('.js'));
  
  console.log(`📄 Found CSS: ${cssFiles.join(', ')}`);
  console.log(`📄 Found JS: ${jsFiles.join(', ')}`);
  
  // Inline CSS for guaranteed loading
  if (cssFiles.length > 0) {
    const cssFile = cssFiles[0];
    const cssContent = fs.readFileSync(path.join(assetsDir, cssFile), 'utf8');
    
    // Replace CSS link with inline style
    const cssLinkRegex = /<link[^>]*href="[^"]*\.css"[^>]*>/g;
    htmlContent = htmlContent.replace(cssLinkRegex, `<style>${cssContent}</style>`);
    console.log('✅ Inlined CSS content');
  }
  
  // Inline JS for guaranteed loading
  if (jsFiles.length > 0) {
    const jsFile = jsFiles[0];
    const jsContent = fs.readFileSync(path.join(assetsDir, jsFile), 'utf8');
    
    // Replace JS script with inline script
    const jsScriptRegex = /<script[^>]*src="[^"]*\.js"[^>]*><\/script>/g;
    htmlContent = htmlContent.replace(jsScriptRegex, `<script type="module">${jsContent}</script>`);
    console.log('✅ Inlined JS content');
  }
  
  // Write the modified HTML
  fs.writeFileSync(htmlPath, htmlContent);
  
  console.log('✅ Build with inline CSS/JS completed!');
  
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}