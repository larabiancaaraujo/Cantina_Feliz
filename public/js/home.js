// script.js

// Adiciona um clique a cada card (alternativa ao onclick no HTML)
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        const destino = card.getAttribute('onclick').match(/'([^']+)'/)[1];
        window.location.href = destino;
    });
});