/**
 * Script to generate placeholder images for development
 * This creates simple colored rectangles as placeholders
 */

const fs = require('fs');
const path = require('path');

// Create placeholder images directory
const imagesDir = path.join(__dirname, '../public/images');
const teamDir = path.join(imagesDir, 'team');

if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

if (!fs.existsSync(teamDir)) {
  fs.mkdirSync(teamDir, { recursive: true });
}

// Generate placeholder images using simple HTML/CSS approach
const generatePlaceholderImage = (width, height, color, filename) => {
  const svg = `
<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="${color}"/>
  <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="24" fill="white" text-anchor="middle" dominant-baseline="middle">
    ${width}x${height}
  </text>
</svg>`;

  fs.writeFileSync(path.join(imagesDir, filename), svg);
};

// Generate team member placeholders
const teamMembers = [
  'sarah-chen.jpg',
  'michael-rodriguez.jpg', 
  'emma-watson.jpg',
  'david-kim.jpg',
  'lisa-patel.jpg',
  'james-wilson.jpg',
  'maria-garcia.jpg',
  'alex-thompson.jpg',
  'sophie-martin.jpg',
  'ryan-davis.jpg'
];

teamMembers.forEach((filename, index) => {
  const colors = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6', '#06B6D4', '#84CC16', '#F97316', '#EC4899', '#6366F1'];
  const color = colors[index % colors.length];
  
  const svg = `
<svg width="400" height="400" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="${color}"/>
  <circle cx="200" cy="150" r="60" fill="white" opacity="0.3"/>
  <rect x="140" y="200" width="120" height="80" rx="10" fill="white" opacity="0.3"/>
  <text x="200" y="320" font-family="Arial, sans-serif" font-size="16" fill="white" text-anchor="middle" dominant-baseline="middle">
    Team Member ${index + 1}
  </text>
</svg>`;

  fs.writeFileSync(path.join(teamDir, filename.replace('.jpg', '.svg')), svg);
});

// Generate main images
generatePlaceholderImage(1920, 1080, '#1E40AF', 'hero-bg.svg');
generatePlaceholderImage(800, 600, '#059669', 'technology-showcase.svg');
generatePlaceholderImage(1200, 630, '#7C3AED', 'og-home.svg');
generatePlaceholderImage(1200, 630, '#DC2626', 'og-team.svg');

console.log('✅ Placeholder images generated successfully!');
console.log('📁 Images created in:', imagesDir);
console.log('👥 Team images created in:', teamDir);
