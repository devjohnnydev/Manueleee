#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('🚀 Building ULTIMATE VERSION for Vercel...');

try {
  // Set production environment
  process.env.NODE_ENV = 'production';
  
  // Build the frontend
  console.log('📦 Building frontend with Vite...');
  execSync('npx vite build --mode production', { 
    stdio: 'inherit', 
    cwd: process.cwd(),
    env: { ...process.env, NODE_ENV: 'production' }
  });
  
  // Copy attached_assets directly to root of public (not nested in assets)
  const srcAssets = path.join(process.cwd(), 'attached_assets');
  const publicDir = path.join(process.cwd(), 'dist/public');
  const destAssets = path.join(publicDir, 'assets');
  
  if (fs.existsSync(srcAssets)) {
    console.log('📁 Copying assets to public directory...');
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
  
  // Create a simple _redirects file for SPA routing
  const redirectsContent = '/*    /index.html   200';
  fs.writeFileSync(path.join(publicDir, '_redirects'), redirectsContent);
  
  console.log('✅ Build completed successfully!');
  
  // Verify critical files exist
  const cssFiles = fs.readdirSync(destAssets).filter(f => f.endsWith('.css'));
  const jsFiles = fs.readdirSync(destAssets).filter(f => f.endsWith('.js'));
  const htmlExists = fs.existsSync(path.join(publicDir, 'index.html'));
  
  console.log(`📄 CSS files: ${cssFiles.length > 0 ? cssFiles.join(', ') : 'NONE FOUND!'}`);
  console.log(`📄 JS files: ${jsFiles.length > 0 ? jsFiles.join(', ') : 'NONE FOUND!'}`);
  console.log(`📄 HTML file: ${htmlExists ? 'EXISTS' : 'MISSING!'}`);
  
  if (cssFiles.length === 0 || jsFiles.length === 0 || !htmlExists) {
    throw new Error('Critical files missing from build!');
  }
  
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}