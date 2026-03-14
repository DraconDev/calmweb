const fs = require('fs');
const { createCanvas } = require('canvas');

const sizes = [16, 32, 48, 96, 128];

sizes.forEach(size => {
  const canvas = createCanvas(size, size);
  const ctx = canvas.getContext('2d');
  const s = size / 128;
  
  // Background
  const bgGrad = ctx.createLinearGradient(0, 0, size, size);
  bgGrad.addColorStop(0, '#1a1a1a');
  bgGrad.addColorStop(1, '#0d0d0d');
  
  ctx.beginPath();
  ctx.roundRect(0, 0, size, size, 20 * s);
  ctx.fillStyle = bgGrad;
  ctx.fill();
  
  // Shield
  const shieldGrad = ctx.createLinearGradient(0, 0, size, size);
  shieldGrad.addColorStop(0, '#e0e0e0');
  shieldGrad.addColorStop(0.5, '#b0b0b0');
  shieldGrad.addColorStop(1, '#888888');
  
  ctx.beginPath();
  ctx.moveTo(64 * s, 14 * s);
  ctx.lineTo(98 * s, 26 * s);
  ctx.lineTo(98 * s, 56 * s);
  ctx.quadraticCurveTo(98 * s, 82 * s, 64 * s, 108 * s);
  ctx.quadraticCurveTo(30 * s, 82 * s, 30 * s, 56 * s);
  ctx.lineTo(30 * s, 26 * s);
  ctx.closePath();
  ctx.fillStyle = shieldGrad;
  ctx.fill();
  
  // Inner cutout
  ctx.beginPath();
  ctx.moveTo(64 * s, 24 * s);
  ctx.lineTo(88 * s, 34 * s);
  ctx.lineTo(88 * s, 54 * s);
  ctx.quadraticCurveTo(88 * s, 76 * s, 64 * s, 94 * s);
  ctx.quadraticCurveTo(40 * s, 76 * s, 40 * s, 54 * s);
  ctx.lineTo(40 * s, 34 * s);
  ctx.closePath();
  ctx.fillStyle = '#1a1a1a';
  ctx.fill();
  
  // Checkmark
  ctx.strokeStyle = '#a78bfa';
  ctx.lineWidth = Math.max(1, 5 * s);
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  
  ctx.beginPath();
  ctx.moveTo(48 * s, 62 * s);
  ctx.lineTo(58 * s, 72 * s);
  ctx.lineTo(80 * s, 50 * s);
  ctx.stroke();
  
  // Accent dot
  ctx.beginPath();
  ctx.arc(64 * s, 14 * s, 2 * s, 0, Math.PI * 2);
  ctx.fillStyle = '#a78bfa';
  ctx.fill();
  
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync(`${size}.png`, buffer);
  console.log(`Created ${size}.png`);
});
