var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Character } from "../Models/Character.js";
import { CharacterView } from "../views/CharacterView.js";
import EpisodesController from "./EpisodesController.js";
export class CharacterController {
    constructor() {
        this._page = 1;
        this.pageLimit = 0;
        this.characteresView = new CharacterView("#content");
        this.epsControl = new EpisodesController();
        this.getData();
    }
    nextPage() {
        if (this._page < this.pageLimit) {
            this._page = this._page + 1;
            this.getData();
        }
    }
    prevPage() {
        if (this._page > 1) {
            this._page = this._page - 1;
            this.getData();
        }
    }
    getEpisodesByCharId(id) {
        let episodes;
        for (let char of this.characteres) {
            if (episodes) {
                continue;
            }
            if (char.id === id) {
                episodes = char.episodes;
            }
        }
        return episodes;
    }
    getData() {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield fetch(`https://rickandmortyapi.com/api/character?page=${this._page}`);
            let resultJson = yield result.json();
            this.pageLimit = resultJson.info.pages;
            let apiResult = resultJson.results;
            let characteres = apiResult.map(result => {
                return new Character(result.id, result.name, result.gender, result.status, result.image, result.episode);
            });
            this.characteres = characteres;
            this.characteresView.update(characteres, this);
            let buttons = document.querySelectorAll(".episodiosButton");
            buttons.forEach(button => {
                button.addEventListener("click", (e) => {
                    this.epsControl.onClick(e, this);
                });
            });
        });
    }
}
