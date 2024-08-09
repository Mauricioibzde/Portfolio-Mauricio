// Evento de clique para abrir/fechar o menu lateral
document.getElementById('toggle-button').addEventListener('click', function() {
    var sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('open'); // Alterna a classe 'open' para abrir/fechar o menu
});

// Seleciona todos os links dentro do menu
var menuLinks = document.querySelectorAll('.menu-link');

// Adiciona um evento de clique para cada link do menu
menuLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Previne o comportamento padrão do link

        var sidebar = document.getElementById('sidebar');
        sidebar.classList.remove('open'); // Fecha o menu ao clicar em um link

        // Obtém o ID da seção alvo a partir do href do link
        var targetId = this.getAttribute('href').substring(1);
        var targetElement = document.getElementById(targetId);

        // Obtém o valor de deslocamento específico para este link
        var offset = parseInt(this.getAttribute('data-offset')) || 0;

        // Calcula a posição de rolagem desejada
        var offsetPosition = targetElement.offsetTop - offset;

        // Rolagem suave até a posição calculada
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});
