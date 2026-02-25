document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Menu mobile
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Fecha menu ao clicar em um link
document.querySelectorAll('#navMenu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Animações ao rolar a página
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visivel');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Contador de jogadores
function animarContador(elemento, inicio, fim, duracao) {
    let startTime = null;

    function step(timestamp) {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duracao, 1);
        elemento.textContent = Math.floor(progress * (fim - inicio) + inicio);
        if (progress < 1) requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
}

// Número aleatório de jogadores entre 45 e 98
const jogadoresOnline = Math.floor(Math.random() * (98 - 45 + 1)) + 45;
animarContador(document.getElementById('jogadores'), 0, jogadoresOnline, 2000);

// Atualiza a cada 30 segundos simulando variação
setInterval(() => {
    const novo = Math.floor(Math.random() * (98 - 45 + 1)) + 45;
    animarContador(document.getElementById('jogadores'), jogadoresOnline, novo, 1000);
}, 30000);