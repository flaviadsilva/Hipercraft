document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav a');
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    // Elementos adicionados para a funcionalidade do botão/animação
    const downloadButton = document.getElementById('btn-download');
    const chickenImage = document.getElementById('chicken-gg');
    const videoPlaceholder = document.querySelector('.video-placeholder'); // NOVO: Elemento do placeholder de vídeo

    // 1. Funcionalidade de Toggle do Menu Hamburger (Interatividade)
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            // Altera o ícone de bars para X e vice-versa
            const icon = menuToggle.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        });
        
        // Fecha o menu ao clicar em um link (Interatividade)
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });
    }

    // 2. Destaque da Navegação ao Rolar (Interatividade)
    const highlightNav = () => {
        const sections = document.querySelectorAll('main section');
        let current = '';

        // Determina a seção atual com base na posição de rolagem
        sections.forEach(section => {
            // Subtrai 150px para compensar o header fixo
            const sectionTop = section.offsetTop - 150; 
            if (scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        // Aplica a classe 'active' ao link correspondente
        navLinks.forEach(a => {
            a.classList.remove('active');
            if (a.getAttribute('href').includes(current)) {
                a.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', highlightNav);
    highlightNav(); // Chama na carga da página para definir o estado inicial

    // 3. Animação do Botão de Download (Nova Funcionalidade)
    if (downloadButton && chickenImage) {
        downloadButton.addEventListener('click', (e) => {
            // Previne o comportamento padrão do botão
            e.preventDefault(); 
            
            // Adiciona a classe para iniciar a animação no Galo
            chickenImage.classList.add('is-active');
            
            // NOVO: Remove a classe 'is-active' após a animação (0.8s = 800ms)
            setTimeout(() => {
                 chickenImage.classList.remove('is-active');
            }, 800); 

            console.log('Download iniciado e animação ativada!');
        });
    }

    // 4. Funcionalidade do Placeholder de Vídeo (NOVO)
    if (videoPlaceholder) {
        videoPlaceholder.addEventListener('click', () => {
            alert('Em breve, este será o vídeo oficial do Hipercraft no Hiperespaço!');
            // Em uma implementação completa, este código carregaria um iframe de vídeo aqui.
        });
    }
});