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
  
  // Copy attached_assets to dist/public for static serving
  const srcAssets = path.join(process.cwd(), 'attached_assets');
  const destAssets = path.join(process.cwd(), 'dist/public/attached_assets');
  
  if (fs.existsSync(srcAssets)) {
    console.log('📁 Copying assets...');
    fs.cpSync(srcAssets, destAssets, { recursive: true });
  }
  
  console.log('✅ Build completed successfully!');
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}