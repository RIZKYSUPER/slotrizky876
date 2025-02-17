const symbols = ['⚡', '🏆', '🔥', '🕊️', '🛡️', '🌿', '👑'];
const slotGrid = document.getElementById('slotGrid');
const scoreDisplay = document.getElementById('score');
const resultMessage = document.getElementById('resultMessage');
let score = 0;

function getRandomSymbol() {
    return symbols[Math.floor(Math.random() * symbols.length)];
}

function spinSlots() {
    slotGrid.innerHTML = ''; // Bersihkan grid
    for (let i = 0; i < 15; i++) { // 3 baris x 5 kolom
        const div = document.createElement('div');
        div.classList.add('slot-item');
        div.textContent = getRandomSymbol();
        slotGrid.appendChild(div);
    }
    calculateScore();
}

function calculateScore() {
    score++; // Increment skor untuk setiap putaran
    scoreDisplay.textContent = score;
    resultMessage.textContent = "Berhasil Putar!"; // Pesan hasil
}

document.getElementById('spinButton').addEventListener('click', spinSlots);