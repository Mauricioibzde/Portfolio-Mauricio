


//BOTAO DE BAIXO 

document.addEventListener('DOMContentLoaded', function () {
    const button = document.querySelector('.button-content-00');

    // Função para adicionar e remover classes de animação e rotação
    function animateButton() {
        button.classList.add('rotate-0');
        button.classList.add('animate-bounce');

        // Remover classes após a animação terminar
        setTimeout(() => {
            button.classList.remove('rotate-0');
            button.classList.remove('animate-bounce');
        }, 1000); // A duração da animação é de 1s
    }

    // Executa a animação duas vezes após o carregamento da página
    setTimeout(() => {
        animateButton();
        setTimeout(animateButton, 1000); // Espera 2 segundos antes de animar novamente
    }, 1000); // Espera 1 segundo após o carregamento da página

    // Adicionar eventos de mouse para animação e rotação
    button.addEventListener('mouseover', function () {
        button.classList.add('rotate-0');
        button.classList.add('animate-bounce');
    });

    button.addEventListener('mouseout', function () {
        button.classList.remove('rotate-0');
        button.classList.remove('animate-bounce');
    });

    // Adicionar evento de clique para scroll suave
    button.addEventListener('click', function () {
        const targetId = button.getAttribute('data-target');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Scroll para links de menu
document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('.menu-header a');

    for (const link of links) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    }
});


// about
document.addEventListener("DOMContentLoaded", function() {
    const biografiaDiv = document.querySelector(".biografia");
    biografiaDiv.classList.add("active");
});
//




// MENU LATERAL 
document.getElementById('toggle-button').addEventListener('click', function() {
    var sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('open'); // Alterna a classe 'open' para abrir/fechar o menu
});


// MENU LATERAL 

// CORREL ITEM
document.addEventListener("DOMContentLoaded", function() {
    // Função para inicializar o carrossel de imagens
    function initImageCarousel(carouselSelector) {
        const carousel = document.querySelector(carouselSelector);
        const images = carousel.querySelectorAll('.img-container img');
        let currentIndex = 0;

        // Função para mostrar a próxima imagem
        function showNextImage() {
            const currentImage = images[currentIndex];
            const nextIndex = (currentIndex + 1) % images.length;
            const nextImage = images[nextIndex];

            // Faz a imagem atual desaparecer instantaneamente
            currentImage.classList.remove('active');

            // Faz a próxima imagem aparecer instantaneamente
            nextImage.classList.add('active');

            // Atualiza o índice da imagem atual
            currentIndex = nextIndex;
        }

        // Inicializa a visibilidade da primeira imagem
        images.forEach((image, index) => {
            if (index === currentIndex) {
                image.classList.add('active');
            } else {
                image.classList.remove('active');
            }
        });

        // Inicia o carrossel
        setInterval(showNextImage, 2000); // Troca a cada 2 segundos
    }

    // Inicializa o carrossel de imagens
    initImageCarousel('.card-poke .img-carousel');

    // Função para inicializar o carrossel de vídeos
    function initVideoCarousel(carouselSelector) {
        const carousel = document.querySelector(carouselSelector);
        const videos = carousel.querySelectorAll('.video-container video');
        let currentIndex = 0;

        // Função para obter uma direção aleatória (esquerda ou direita)
        function getRandomDirection() {
            return Math.random() > 0.5 ? 'left' : 'right';
        }

        // Função para mostrar o próximo vídeo
        function showNextVideo() {
            const currentVideo = videos[currentIndex];
            const nextIndex = (currentIndex + 1) % videos.length;
            const nextVideo = videos[nextIndex];
            const direction = getRandomDirection();

            // Aplica a direção aleatória ao próximo vídeo
            nextVideo.classList.remove('hidden-left', 'hidden-right');
            nextVideo.classList.add(direction === 'left' ? 'hidden-left' : 'hidden-right');

            // Faz o vídeo atual desaparecer
            currentVideo.classList.remove('active');
            currentVideo.classList.add(direction === 'left' ? 'hidden-right' : 'hidden-left');
            currentVideo.pause();
            currentVideo.currentTime = 0;

            // Faz o próximo vídeo aparecer após a transição
            setTimeout(() => {
                nextVideo.classList.remove('hidden-left', 'hidden-right');
                nextVideo.classList.add('active');
                nextVideo.play();
                currentIndex = nextIndex;
            }, 0); // O tempo deve coincidir com a duração da transição CSS
        }

        // Inicializa a visibilidade do primeiro vídeo
        videos.forEach((video, index) => {
            if (index === currentIndex) {
                video.classList.add('active');
                video.play();
            } else {
                video.classList.remove('active');
                video.classList.add('hidden-left');
                video.pause();
                video.currentTime = 0;
            }
        });

        // Inicia o carrossel
        setInterval(showNextVideo, 2000); // Troca a cada 2 segundos
    }

    // Inicializa o carrossel de vídeos
    initVideoCarousel('.card-poke .video-carousel');

    // Adiciona funcionalidade para girar o card
    const cards = document.querySelectorAll('.card-poke');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            card.querySelector('.inner-card').classList.toggle('flip');
        });
    });
});

//ROLAGEM



//ROLAGEM
