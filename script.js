// Função para rolar até a seção desejada
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Função para o efeito de digitação no texto de boas-vindas
document.addEventListener('DOMContentLoaded', function () {
    const typedText = document.getElementById('typed-text');
    const welcomeText = "Hi, I'm Matheus Patricio";
    let index = 0;

    function typeEffect() {
        if (index < welcomeText.length) {
            typedText.innerHTML += welcomeText.charAt(index);
            index++;
            setTimeout(typeEffect, 75);
        } else {
            // Inicia o efeito de digitação no About Me após a conclusão
            revealAboutSection();
        }
    }

    // Função para revelar e digitar o texto do About Me
    function revealAboutSection() {
        const aboutSection = document.getElementById('about-section');
        const aboutTitle = document.getElementById('about-title');
        const aboutDescription = document.getElementById('about-description');

        const titleText = "About Me";
        const descriptionText = "Hi, I am Matheus Patricio, a fullstack developer passionate about creating innovative and efficient solutions. I have experience in various technologies, including HTML, CSS, JavaScript, React, PHP, and Laravel. I'm currently pursuing Computer Engineering at CEFET-MG. In my free time, I enjoy exploring new programming challenges.";
        let titleIndex = 0;
        let descIndex = 0;

        aboutSection.style.display = 'block'; // Exibe a seção About Me

        function typeTitle() {
            if (titleIndex < titleText.length) {
                aboutTitle.innerHTML += titleText.charAt(titleIndex);
                titleIndex++;
                setTimeout(typeTitle, 20);
            } else {
                typeDescription(); // Inicia o efeito de digitação no parágrafo após o título
            }
        }

        function typeDescription() {
            if (descIndex < descriptionText.length) {
                aboutDescription.innerHTML += descriptionText.charAt(descIndex);
                descIndex++;
                setTimeout(typeDescription, 18); //ajuste de veloci.
            }
        }

        typeTitle();
    }

    typeEffect();

    $(document).ready(function () {
        $('.services-carousel').slick({
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            dots: true,
            arrows: true
        });
    });
    
});

