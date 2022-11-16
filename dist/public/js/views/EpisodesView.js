export default class EpisodesView {
    constructor(seletor) {
        this.root = document.querySelector(seletor);
    }
    template(ep) {
        return `
            <div class="col-lg-5 m-3 shadow card-background">
                <div class="row no-gutters">
                    <div class="col-12 p-3 text-white lg-1">
                        <h3>${ep.name}</h3>
                        <p>Temporada: <strong>${ep.temporada}</strong></p>
                    </div>
                </div>
            </div>
        `;
    }
    buttons() {
        return `
        <div class="row w-100 justify-content-end" id="button_area">
            <div class="col-3">
                <button id="back">Voltar</button>
            </div>
        </div>
        `;
    }
    actionButtons(character) {
        let button = document.querySelector("#back");
        button.addEventListener("click", (event) => {
            character.getData();
        });
    }
    update(eps, character) {
        this.root.innerHTML = eps.map(ep => {
            console.log(ep);
            return this.template(ep);
        }).join("") + this.buttons();
        this.actionButtons(character);
    }
}
