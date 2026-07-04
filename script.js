// Countdown
let remaining = 5000000;
document.getElementById('remaining').textContent = remaining.toLocaleString();

// Click handlers
const earth = document.getElementById('earth');
if (earth) {
  earth.addEventListener('click', () => {
    alert("You've clicked on Earth! The full interactive buying system is still in production. Stay tuned!");
  });
}

const buyBtn = document.querySelector('.buy-btn');
if (buyBtn) {
  buyBtn.addEventListener('click', () => {
    alert("Buy Land feature coming soon! We're building the full system. Thank you for your interest in Legacy Capsule.");
  });
}
