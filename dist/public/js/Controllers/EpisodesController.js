var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Episodio from "../Models/Episodio.js";
import EpisodesView from "../views/EpisodesView.js";
export default class EpisodesController {
    constructor() {
        this.episodesView = new EpisodesView("#content");
    }
    onClick(event, charControl) {
        return __awaiter(this, void 0, void 0, function* () {
            let target = event.target;
            let char_id = target.getAttribute("char-id");
            let episodes = charControl.getEpisodesByCharId(parseInt(char_id));
            let eps = [];
            for (let ep of episodes) {
                let data = yield this.getData(ep);
                eps.push(data);
            }
            let episodesModel = eps.map(ep => {
                return new Episodio(ep);
            });
            this.episodesView.update(episodesModel, charControl);
        });
    }
    getData(url) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield fetch(url, {});
            return yield result.json();
        });
    }
}
