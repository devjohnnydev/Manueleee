#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('🚀 Building FINAL VERSION for Vercel...');

try {
  // Set production environment
  process.env.NODE_ENV = 'production';
  
  // Build ONLY the frontend
  console.log('📦 Building frontend with Vite...');
  execSync('npx vite build --mode production', { 
    stdio: 'inherit', 
    cwd: process.cwd(),
    env: { ...process.env, NODE_ENV: 'production' }
  });
  
  // Copy attached_assets
  const srcAssets = path.join(process.cwd(), 'attached_assets');
  const destAssets = path.join(process.cwd(), 'dist/public/assets');
  
  if (fs.existsSync(srcAssets)) {
    console.log('📁 Copying assets...');
    fs.mkdirSync(destAssets, { recursive: true });
    
    const files = fs.readdirSync(srcAssets);
    files.forEach(file => {
      if (!file.startsWith('.')) {
        const srcFile = path.join(srcAssets, file);
        const destFile = path.join(destAssets, file);
        if (fs.lstatSync(srcFile).isFile()) {
          fs.copyFileSync(srcFile, destFile);
          console.log(`✅ Copied ${file}`);
        }
      }
    });
  }
  
  // Create comprehensive headers and configuration files
  const netlifyHeaders = `
/assets/*.css
  Content-Type: text/css
  Cache-Control: public, max-age=31536000, immutable

/assets/*.js
  Content-Type: application/javascript
  Cache-Control: public, max-age=31536000, immutable

/assets/*
  Cache-Control: public, max-age=31536000, immutable
`;

  const netlifyRedirects = `
/assets/* /assets/:splat 200
/*        /index.html  200
`;

  // Write multiple configuration files for different scenarios
  fs.writeFileSync(path.join(process.cwd(), 'dist/public/_headers'), netlifyHeaders.trim());
  fs.writeFileSync(path.join(process.cwd(), 'dist/public/_redirects'), netlifyRedirects.trim());
  
  console.log('✅ Created comprehensive configuration files');
  console.log('✅ FINAL Vercel build completed successfully!');
  
  // Log build info
  const cssFiles = fs.readdirSync(path.join(process.cwd(), 'dist/public/assets')).filter(f => f.endsWith('.css'));
  const jsFiles = fs.readdirSync(path.join(process.cwd(), 'dist/public/assets')).filter(f => f.endsWith('.js'));
  
  console.log(`📄 CSS files: ${cssFiles.join(', ')}`);
  console.log(`📄 JS files: ${jsFiles.join(', ')}`);
  
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}