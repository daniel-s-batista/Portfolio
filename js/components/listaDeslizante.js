const listaConfig = {
    slidesPerView: "auto",
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    navigation: {
        nextEl: ".lista-deslizante-avancar",
        prevEl: ".lista-deslizante-voltar"
    },
    keyboard: {
        enabled: true
    }
}

const listaCertificacoes = new Swiper(".lista-certificacoes", listaConfig);
const listaProjetos = new Swiper(".lista-projetos", listaConfig);
