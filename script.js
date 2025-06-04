// Filtros de Recientes con funcionalidad y reordenamiento
document.querySelectorAll('.filter-item').forEach(filter => {
    filter.addEventListener('click', function() {
        // Remover clase active de todos los filtros
        document.querySelectorAll('.filter-item').forEach(f => f.classList.remove('active'));
        
        // Agregar clase active al filtro clickeado
        this.classList.add('active');
        
        // Obtener la categoría del filtro
        const filterCategory = this.getAttribute('data-filter');
        
        // Obtener todas las tarjetas
        const cards = document.querySelectorAll('.latest-card');
        
        // Primero ocultar todas las tarjetas
        cards.forEach(card => {
            card.classList.remove('show');
            card.classList.add('hidden');
        });
        
        // Pequeño delay para el efecto de transición
        setTimeout(() => {
            // Filtrar y mostrar tarjetas correspondientes
            cards.forEach((card, index) => {
                const cardCategory = card.getAttribute('data-category');
                
                if (filterCategory === 'all' || cardCategory === filterCategory) {
                    // Mostrar tarjeta con animación escalonada
                    setTimeout(() => {
                        card.classList.remove('hidden');
                        card.classList.add('show');
                    }, index * 100); // Delay escalonado para efecto visual
                }
            });
            
            // Actualizar contador de resultados
            updateResultsCounter(filterCategory);
        }, 150);
    });
});

// Función para actualizar contador de resultados
function updateResultsCounter(filterCategory) {
    setTimeout(() => {
        const visibleCards = document.querySelectorAll('.latest-card:not(.hidden)');
        console.log(`Mostrando ${visibleCards.length} artículos`);
        
        // Opcional: Agregar contador visual en el futuro
        // updateVisualCounter(visibleCards.length);
    }, 500);
}

// Efecto glitch random en el título
setInterval(() => {
    const glitchElements = document.querySelectorAll('.glitch-text');
    const randomElement = glitchElements[Math.floor(Math.random() * glitchElements.length)];
    randomElement.style.animation = 'none';
    setTimeout(() => {
        randomElement.style.animation = '';
    }, 50);
}, 5000);

// Inicializar filtros al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    // Agregar animación inicial a todas las tarjetas
    const cards = document.querySelectorAll('.latest-card');
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('show');
        }, index * 100);
    });
    
    updateResultsCounter('all');
});
