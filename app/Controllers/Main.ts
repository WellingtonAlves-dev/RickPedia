import { Character } from "../Models/Character.js";
import { IResults, IApiCharacteres } from "../Interfaces/Interfaces.js";

export class Main {
    private content: HTMLElement;
    private characteres: Array<Character> = [];
    private apiResult: Array<IApiCharacteres> = [];

    private _page: number = 1;
    private pageLimit: number = 0;

    constructor() {
        this.content = document.querySelector("#content");
    }

    main() {
        this.generatePage();
    }   

    nextPage() {
        if(this._page < this.pageLimit) {
            this._page = this._page + 1;
            this.generatePage();    
        }
    }

    prevPage() {
        if(this._page > 1) {
            this._page = this._page - 1;
            this.generatePage();    
        }
    }

    async generatePage() {
        await this.getData();
        this.characteres = this.apiResult.map(result => {
            return new Character(result.name, result.gender, result.status, result.image);
        });
        this.content.innerHTML = this.characteres.map(char => {
            return char.generateCard();
        }).join(" ");
    }

    async getData() {
        let result = await fetch(`https://rickandmortyapi.com/api/character?page=${this._page}`);
        let resultJson: IResults = await result.json();
        
        this.pageLimit = resultJson.info.pages;
        this.apiResult = resultJson.results;
    }
}