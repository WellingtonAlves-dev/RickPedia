import { CharacterController } from "../Controllers/CharacterController.js";
import Episodio from "../Models/Episodio.js";

export default class EpisodesView {

    private root: HTMLElement;

    constructor(seletor: string) {
        this.root = document.querySelector(seletor);
    }

    private template(ep: Episodio) {
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

    private buttons():string {
        return `
        <div class="row w-100 justify-content-end" id="button_area">
            <div class="col-3">
                <button id="back">Voltar</button>
            </div>
        </div>
        `
    }

    private actionButtons(character: CharacterController) {
        let button = document.querySelector("#back");
        button.addEventListener("click", (event: Event) => {
            character.getData();
        });
    }

    update(eps: Episodio[], character: CharacterController) {
        this.root.innerHTML = eps.map(ep => {
            console.log(ep);
            return this.template(ep);
        }).join("") + this.buttons();

        this.actionButtons(character);
    }

}