// Função para controlar o scroll e a transição das seções para a escuridão
window.addEventListener('scroll', () => {
    const darknessSections = document.querySelectorAll('.section-darkness');
    darknessSections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            section.classList.add('scroll');
        } else {
            section.classList.remove('scroll');
        }
    });

    const elementsToFade = document.querySelectorAll('.consume-on-scroll');
    elementsToFade.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            element.classList.add('scroll');
        } else {
            element.classList.remove('scroll');
        }
    });
});

// Função para criar o efeito de rastro de sangue
document.addEventListener('mousemove', (e) => {
    const trail = document.createElement('div');
    trail.classList.add('trail');
    document.body.appendChild(trail);

    trail.style.left = `${e.pageX - 5}px`;
    trail.style.top = `${e.pageY - 5}px`;

    setTimeout(() => {
        trail.remove();
    }, 1200); // Rastro desaparece após 1.2s
});


// Animação para as artes surgirem gradualmente
window.addEventListener('scroll', () => {
    const artPieces = document.querySelectorAll('.art-piece');
    artPieces.forEach((piece) => {
        const rect = piece.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            piece.style.transform = 'translateY(0)';
            piece.style.opacity = '1';
        }
    });
});

