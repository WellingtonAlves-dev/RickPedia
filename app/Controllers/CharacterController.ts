import { Character } from "../Models/Character.js";
import { IResults } from "../Interfaces/Interfaces.js";
import { CharacterView } from "../views/CharacterView.js";
import EpisodesController from "./EpisodesController.js";

export class CharacterController {
    private characteresView: CharacterView;
    private characteres: Character[];
    private _page: number = 1;
    private pageLimit: number = 0;
    private epsControl: EpisodesController;

    constructor() {
        this.characteresView = new CharacterView("#content")
        this.epsControl = new EpisodesController();
        this.getData();
    }

    nextPage() {
        if(this._page < this.pageLimit) {
            this._page = this._page + 1;
            this.getData();
        }
    }

    prevPage() {
        if(this._page > 1) {
            this._page = this._page - 1;
            this.getData();
        }
    }

    public getEpisodesByCharId(id: number) : string[] {
        let episodes;
        for(let char of this.characteres) {
            if(episodes) {
                continue;
            }
            if(char.id === id) {
                episodes = char.episodes;
            }
        }
        return episodes;
    }

    async getData() {
        let result = await fetch(`https://rickandmortyapi.com/api/character?page=${this._page}`);
        let resultJson: IResults = await result.json();
        
        this.pageLimit = resultJson.info.pages;
        let apiResult = resultJson.results;

        let characteres = apiResult.map(result => {
            return new Character(result.id, result.name, result.gender, result.status, result.image, result.episode);
        });
        this.characteres = characteres;
        this.characteresView.update(characteres, this);

        let buttons = document.querySelectorAll(".episodiosButton");
        buttons.forEach(button => {
            button.addEventListener("click", (e: Event) => {
                this.epsControl.onClick(e, this);
            });
        });
    }
}