// Simple countdown
let remaining = 5000000;
document.getElementById('remaining').textContent = remaining.toLocaleString();

// Basic Three.js Globe (placeholder - needs more for full functionality)
const container = document.createElement('div');
container.style.width = '700px';
container.style.height = '700px';
container.style.margin = '40px auto';
document.querySelector('.container').insertBefore(container, document.querySelector('.message'));

// For now, keep the image until we expand
console.log("3D Globe setup ready for expansion");
