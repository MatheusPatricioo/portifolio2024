document.addEventListener('DOMContentLoaded', function () {
    // Efeito de digitação no texto de boas-vindas
    const typedText = document.getElementById('typed-text');
    const welcomeText = "Hi, I'm Matheus Patricio";
    let index = 0;

    function typeEffect() {
        if (index < welcomeText.length) {
            typedText.innerHTML += welcomeText.charAt(index);
            index++;
            setTimeout(typeEffect, 75);
        } else {
            revealAboutSection();
        }
    }

    // Função para revelar e digitar o texto da seção "Sobre Mim"
    function revealAboutSection() {
        const aboutSection = document.getElementById('about-section');
        const aboutTitle = document.getElementById('about-title');
        const aboutDescription = document.getElementById('about-description');

        const titleText = "About Me";
        const descriptionText = "Hi, I am Matheus Patricio, a fullstack developer passionate about creating innovative and efficient solutions...";
        let titleIndex = 0;
        let descIndex = 0;

        aboutSection.style.display = 'block';

        function typeTitle() {
            if (titleIndex < titleText.length) {
                aboutTitle.innerHTML += titleText.charAt(titleIndex);
                titleIndex++;
                setTimeout(typeTitle, 20);
            } else {
                typeDescription();
            }
        }

        function typeDescription() {
            if (descIndex < descriptionText.length) {
                aboutDescription.innerHTML += descriptionText.charAt(descIndex);
                descIndex++;
                setTimeout(typeDescription, 18);
            }
        }

        typeTitle();
    }

    typeEffect();

    // Função para o carrossel de bolinhas
    const bulletCarousel = document.querySelector(".carousel-bullets");
    const bulletItems = Array.from(document.querySelectorAll(".bullet")); // Converter NodeList em Array
    const bulletWidth = bulletItems[0].offsetWidth + 10; // Largura com margem
    let translateValue = 0;

    // Clonar os itens para garantir loop infinito
    bulletItems.forEach(bullet => {
        let clone = bullet.cloneNode(true);
        bulletCarousel.appendChild(clone);
    });

    function moveBullets() {
        translateValue -= bulletWidth;

        // Aplicar transição suave
        bulletCarousel.style.transition = 'transform 1s ease';
        bulletCarousel.style.transform = `translateX(${translateValue}px)`;

        // Resetar quando todas as bolinhas saírem da tela
        if (Math.abs(translateValue) >= bulletWidth * bulletItems.length) {
            // Desativar transição, resetar o valor e restaurar a posição
            bulletCarousel.style.transition = 'none';
            translateValue = 0;
            bulletCarousel.style.transform = `translateX(${translateValue}px)`;
        }
    }

    // Mover as bolinhas a cada 3 segundos
    setInterval(moveBullets, 3000);

    // Inicializar o carrossel de serviços (slick)
    $('.services-carousel').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        arrows: true
    });
});
