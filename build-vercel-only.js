#!/usr/bin/env node

// Simples script de build apenas para frontend (Vercel)
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('🚀 Building FRONTEND ONLY for Vercel...');

try {
  // Set production environment
  process.env.NODE_ENV = 'production';
  
  // Build ONLY the frontend - NO SERVER
  console.log('📦 Building frontend with Vite (frontend only)...');
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
  
  // Create _headers file in output directory
  const headersContent = `/assets/*
  Cache-Control: public, max-age=31536000, immutable

/*.css
  Content-Type: text/css

/*.js
  Content-Type: application/javascript`;
  
  fs.writeFileSync(path.join(process.cwd(), 'dist/public/_headers'), headersContent);
  console.log('✅ Created _headers file for Vercel');
  
  console.log('✅ Frontend-only build completed for Vercel!');
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}