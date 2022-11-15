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
export class Main {
    constructor() {
        this.characteres = [];
        this.apiResult = [];
        this._page = 1;
        this.pageLimit = 0;
        this.content = document.querySelector("#content");
    }
    main() {
        this.generatePage();
    }
    nextPage() {
        if (this._page < this.pageLimit) {
            this._page = this._page + 1;
            this.generatePage();
        }
    }
    prevPage() {
        if (this._page > 1) {
            this._page = this._page - 1;
            this.generatePage();
        }
    }
    generatePage() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getData();
            this.characteres = this.apiResult.map(result => {
                return new Character(result.name, result.gender, result.status, result.image);
            });
            this.content.innerHTML = this.characteres.map(char => {
                return char.generateCard();
            }).join(" ");
        });
    }
    getData() {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield fetch(`https://rickandmortyapi.com/api/character?page=${this._page}`);
            let resultJson = yield result.json();
            this.pageLimit = resultJson.info.pages;
            this.apiResult = resultJson.results;
        });
    }
}
