import { CharacterController } from "../Controllers/CharacterController.js";
import { Character } from "../Models/Character.js"; 
export class CharacterView {
    
    private root: HTMLElement;

    constructor(seletor: string) {
        this.root = document.querySelector(seletor);
    }

    private template(character: Character) : string {
        return `

            <div class="col-lg-5 m-3 shadow card-background">
                <div class="row no-gutters">
                    <div class="col-4 card-image">
                        <img src="${character.img}"/>
                    </div>
                    <div class="col-8 p-3 text-white lg-1">
                        <h3>${character.name}</h3>
                        <p>Status: <strong>${character.status}</strong></p>
                        <p>Genero: <strong>${character.gender}</strong></p>
                        <button class="episodiosButton" char-id="${character.id}">Episodios</button>
                    </div>
                </div>
            </div>

        `
    }

    private buttons() {
        return `
        <div class="row w-100 justify-content-end" id="button_area">
            <div class="col-3">
                <button id="prev">Antes</button>
                <button id="next">Depois</button>
            </div>
        </div>
        `
    }

    private actionsButton(character: CharacterController) {
        let prevButton = document.querySelector("#prev");
        let nextButton = document.querySelector("#next");
        console.log(prevButton);
        prevButton.addEventListener("click", (event: Event) => {
            character.prevPage();
        });
        nextButton.addEventListener("click", (event: Event) => {
            character.nextPage();
        });
        
    }

    update(characteres: Character[], charControl: CharacterController) : void {
        this.root.innerHTML = characteres.map(char => {
            return this.template(char);
        }).join("") + this.buttons();

        this.actionsButton(charControl);
    }
}