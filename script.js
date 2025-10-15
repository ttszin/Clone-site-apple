document.addEventListener("DOMContentLoaded", () => {
    // Configurações para o Intersection Observer
    const options = {
        root: null, // Observa em relação à viewport
        rootMargin: '0px',
        threshold: 0.1 // O elemento é considerado 'visível' quando 10% dele estiver na tela
    };

    // Função callback que será executada quando um elemento observado entrar na tela
    const handleIntersect = (entries, observer) => {
        entries.forEach(entry => {
            // Se o elemento está visível
            if (entry.isIntersecting) {
                // Adiciona a classe 'visible' para ativar a animação CSS
                entry.target.classList.add('visible');
                // Para de observar o elemento para que a animação ocorra apenas uma vez
                observer.unobserve(entry.target);
            }
        });
    };

    // Cria uma nova instância do Intersection Observer
    const observer = new IntersectionObserver(handleIntersect, options);

    // Seleciona todos os elementos que queremos animar
    const targets = document.querySelectorAll('.main-section .text-wrapper, .spirited-section > div, .iphone-section .text-wrapper');

    // Inicia a observação de cada elemento alvo
    targets.forEach(target => {
        observer.observe(target);
    });
});

document.addEventListener("DOMContentLoaded", () => {
    // --- CÓDIGO DE ANIMAÇÃO DAS SEÇÕES (já existente) ---
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const handleIntersect = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(handleIntersect, options);
    const targets = document.querySelectorAll('.main-section .text-wrapper, .spirited-section > div, .iphone-section .text-wrapper');
    targets.forEach(target => {
        observer.observe(target);
    });
    
    // --- NOVA FUNCIONALIDADE DO CABEÇALHO ---
    const header = document.querySelector('header');

    // Função que verifica a posição do scroll e adiciona/remove a classe
    const handleHeaderScroll = () => {
        // Se a posição vertical do scroll for maior que 10 pixels
        if (window.scrollY > 10) {
            header.classList.add('scrolled'); // Adiciona a classe
        } else {
            header.classList.remove('scrolled'); // Remove a classe
        }
    };

    // Adiciona um "ouvinte" que chama a função sempre que o usuário rola a página
    window.addEventListener('scroll', handleHeaderScroll);
});