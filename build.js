#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('🚀 Building for Vercel deployment...');

try {
  // Set production environment
  process.env.NODE_ENV = 'production';
  
  // Build the Vite project
  console.log('📦 Building frontend with Vite...');
  execSync('vite build', { stdio: 'inherit', cwd: process.cwd() });
  
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
      const srcFile = path.join(srcAssets, file);
      const destFile = path.join(destAssets, file);
      fs.copyFileSync(srcFile, destFile);
      console.log(`✅ Copied ${file}`);
    });
  }
  
  console.log('✅ Build completed successfully!');
  console.log('📁 Files in dist:', fs.readdirSync('dist'));
  console.log('📁 Files in dist/assets:', fs.existsSync('dist/assets') ? fs.readdirSync('dist/assets') : 'No assets directory');
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}