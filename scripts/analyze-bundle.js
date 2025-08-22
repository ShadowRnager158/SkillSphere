#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🔍 Analyzing bundle size...\n');

try {
  // Build the project
  console.log('📦 Building project...');
  execSync('pnpm run build', { stdio: 'inherit' });
  
  // Check if stats.html was generated
  const statsPath = path.join(__dirname, '../dist/stats.html');
  if (fs.existsSync(statsPath)) {
    console.log('\n✅ Bundle analysis complete!');
    console.log('📊 Open dist/stats.html in your browser to view detailed bundle analysis');
    
    // Get bundle sizes
    const distPath = path.join(__dirname, '../dist/assets');
    if (fs.existsSync(distPath)) {
      const files = fs.readdirSync(distPath);
      let totalSize = 0;
      
      console.log('\n📁 Bundle files:');
      files.forEach(file => {
        const filePath = path.join(distPath, file);
        const stats = fs.statSync(filePath);
        const sizeInKB = (stats.size / 1024).toFixed(2);
        totalSize += stats.size;
        
        console.log(`  ${file}: ${sizeInKB} KB`);
      });
      
      const totalSizeInKB = (totalSize / 1024).toFixed(2);
      const totalSizeInMB = (totalSize / (1024 * 1024)).toFixed(2);
      
      console.log(`\n📊 Total bundle size: ${totalSizeInKB} KB (${totalSizeInMB} MB)`);
      
      // Performance recommendations
      console.log('\n💡 Performance recommendations:');
      if (totalSize > 500 * 1024) { // 500KB
        console.log('  ⚠️  Bundle size is large. Consider:');
        console.log('     - Code splitting with React.lazy()');
        console.log('     - Tree shaking unused dependencies');
        console.log('     - Lazy loading non-critical components');
        console.log('     - Using dynamic imports for heavy libraries');
      } else if (totalSize > 250 * 1024) { // 250KB
        console.log('  ⚠️  Bundle size is moderate. Consider:');
        console.log('     - Lazy loading routes');
        console.log('     - Optimizing images and assets');
      } else {
        console.log('  ✅ Bundle size is good!');
      }
      
      // Check for large files
      const largeFiles = files.filter(file => {
        const filePath = path.join(distPath, file);
        const stats = fs.statSync(filePath);
        return stats.size > 100 * 1024; // 100KB
      });
      
      if (largeFiles.length > 0) {
        console.log('\n🔍 Large files (>100KB):');
        largeFiles.forEach(file => {
          const filePath = path.join(distPath, file);
          const stats = fs.statSync(filePath);
          const sizeInKB = (stats.size / 1024).toFixed(2);
          console.log(`  ${file}: ${sizeInKB} KB`);
        });
      }
    }
  } else {
    console.log('\n❌ Bundle analysis failed. Make sure rollup-plugin-visualizer is configured.');
  }
  
} catch (error) {
  console.error('\n❌ Error during bundle analysis:', error.message);
  process.exit(1);
}