class ListaDeslizante extends HTMLElement {
    gap = parseInt(this.dataset.listaGap || 0);
    larguraCard = parseInt(this.dataset.listaLarguraCard || 0);
    indiceAtual = 0;

    constructor() {
        super();
        this.style.display = "block";
        this.attachShadow({mode: "open"});

        // HTML do elemento aqui
        this.shadowRoot.innerHTML = `
            <style>
                slot {
                    display: flex;
                    gap: ${this.gap}px;
                    overflow: hidden;
                    scroll-behavior: smooth;
                }
            </style>
            <slot class="lista">

            </slot>
        `;

        this.lista = this.shadowRoot.querySelector(".lista");
    }

    avancar() {
        if (this.lastElementChild.getBoundingClientRect().right > this.lista.getBoundingClientRect().right)
            this.indiceAtual++;
        this.mover();
    }

    voltar() {
        if (this.indiceAtual > 0)
            this.indiceAtual--;
        this.mover();
    }

    mover() {
        this.lista.scrollLeft = (this.larguraCard + this.gap) * this.indiceAtual;
    }
}

class BtnVoltar extends HTMLElement {
    constructor() {
        super();
        this.style.display = "block";
        this.style.width = "max-content";
        const listaAlvo = document.querySelector(this.dataset.listaAlvo);
        this.attachShadow({mode: "open"});
        this.shadowRoot.innerHTML = `
        <style>
            slot:hover {
                cursor: pointer;
            }
        </style>
        <slot></slot>`;
        this.addEventListener("click", () => listaAlvo.voltar());
    }
}

class BtnAvancar extends HTMLElement {
    constructor() {
        super();
        this.style.display = "block";
        this.style.width = "max-content";
        const listaAlvo = document.querySelector(this.dataset.listaAlvo);
        this.attachShadow({mode: "open"});
        this.shadowRoot.innerHTML = `
        <style>
            slot:hover {
                cursor: pointer;
            }
        </style>
        <slot></slot>`;
        this.addEventListener("click", () => listaAlvo.avancar());
    }
}

customElements.define("lista-deslizante", ListaDeslizante);
customElements.define("lista-deslizante-voltar", BtnVoltar);
customElements.define("lista-deslizante-avancar", BtnAvancar);
