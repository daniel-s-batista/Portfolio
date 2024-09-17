const telaMenu = document.querySelector("#telaMenu");
const btnMenu = document.querySelector("#btnMenu");
const navMenu = telaMenu.querySelector(".nav");
let menuAberto = false;

function mudarMenu() {
    const estiloBody = document.body.style;
    estiloBody.overflow = (estiloBody.overflow === "hidden") ? "auto" : "hidden";
    telaMenu.style.right = (menuAberto) ? "-100vw" : "0";
    menuAberto = !menuAberto;
}

btnMenu.addEventListener("click", () => mudarMenu());
navMenu.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => mudarMenu()));
