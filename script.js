// Simple countdown
let remaining = 5000000;

function updateCountdown() {
  document.getElementById('remaining').textContent = remaining.toLocaleString();
}

// Make Earth clickable (placeholder)
document.getElementById('earth').addEventListener('click', () => {
  alert("You've selected a spot on Earth! (Buy Land coming soon)");
});

// Initial update
updateCountdown();
