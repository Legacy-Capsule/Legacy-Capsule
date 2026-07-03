// Simple countdown simulation
let remaining = 5000000;

function updateCountdown() {
  document.getElementById('remaining').textContent = remaining.toLocaleString();
}

updateCountdown();
