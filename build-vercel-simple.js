#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('🚀 Building SIMPLE VERSION for Vercel...');

try {
  // Build the frontend only
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
  
  console.log('✅ Simple build completed!');
  
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}