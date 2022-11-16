export class CharacterView {
    constructor(seletor) {
        this.root = document.querySelector(seletor);
    }
    template(character) {
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

        `;
    }
    buttons() {
        return `
        <div class="row w-100 justify-content-end" id="button_area">
            <div class="col-3">
                <button id="prev">Antes</button>
                <button id="next">Depois</button>
            </div>
        </div>
        `;
    }
    actionsButton(character) {
        let prevButton = document.querySelector("#prev");
        let nextButton = document.querySelector("#next");
        console.log(prevButton);
        prevButton.addEventListener("click", (event) => {
            character.prevPage();
        });
        nextButton.addEventListener("click", (event) => {
            character.nextPage();
        });
    }
    update(characteres, charControl) {
        this.root.innerHTML = characteres.map(char => {
            return this.template(char);
        }).join("") + this.buttons();
        this.actionsButton(charControl);
    }
}
