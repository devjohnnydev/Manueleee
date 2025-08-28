#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('🚀 Building for Vercel deployment...');

try {
  // Set production environment
  process.env.NODE_ENV = 'production';
  
  // Build only the frontend for static deployment
  console.log('📦 Building frontend with Vite...');
  execSync('npx vite build --mode production', { 
    stdio: 'inherit', 
    cwd: process.cwd(),
    env: { ...process.env, NODE_ENV: 'production' }
  });
  
  // Copy attached_assets to dist/public/assets for static serving
  const srcAssets = path.join(process.cwd(), 'attached_assets');
  const destAssets = path.join(process.cwd(), 'dist/public/assets');
  
  if (fs.existsSync(srcAssets)) {
    console.log('📁 Copying assets...');
    // Ensure assets directory exists
    fs.mkdirSync(destAssets, { recursive: true });
    
    // Copy all files from attached_assets to dist/assets
    const files = fs.readdirSync(srcAssets);
    files.forEach(file => {
      if (!file.startsWith('.')) { // Skip hidden files
        const srcFile = path.join(srcAssets, file);
        const destFile = path.join(destAssets, file);
        if (fs.lstatSync(srcFile).isFile()) {
          fs.copyFileSync(srcFile, destFile);
          console.log(`✅ Copied ${file}`);
        }
      }
    });
  }
  
  console.log('✅ Vercel build completed successfully!');
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}