// Função para rolar até a seção desejada
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}


// Função para o efeito de digitação no texto de boas-vindas
document.addEventListener('DOMContentLoaded', function () {
    const typedText = document.getElementById('typed-text');
    const text = "Hi, I'm Matheus Patricio";
    let index = 0;

    function typeEffect() {
        if (index < text.length) {
            typedText.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeEffect, 100);
        }
    }

    typeEffect();

    $(document).ready(function(){
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

