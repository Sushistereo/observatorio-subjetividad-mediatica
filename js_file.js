// Filtros de Recientes
document.querySelectorAll('.filter-item').forEach(filter => {
    filter.addEventListener('click', function() {
        document.querySelectorAll('.filter-item').forEach(f => f.classList.remove('active'));
        this.classList.add('active');
    });
});

// Efecto glitch random en el título
setInterval(() => {
    const glitchElements = document.querySelectorAll('.glitch-text');
    const randomElement = glitchElements[Math.floor(Math.random() * glitchElements.length)];
    randomElement.style.animation = 'none';
    setTimeout(() => {
        randomElement.style.animation = '';
    }, 50);
}, 5000);