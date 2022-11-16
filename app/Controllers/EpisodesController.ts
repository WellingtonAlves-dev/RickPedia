import Episodio from "../Models/Episodio.js";
import EpisodesView from "../views/EpisodesView.js";
import { CharacterController } from "./CharacterController.js";
import { IEpisode
 } from "../Interfaces/Interfaces.js";
export default class EpisodesController {
    private episodesView: EpisodesView = new EpisodesView("#content");

    async onClick(event: Event, charControl: CharacterController) {
        let target = event.target as HTMLElement;
        let char_id = target.getAttribute("char-id");
        let episodes = charControl.getEpisodesByCharId(parseInt(char_id));

        let eps: IEpisode[] = [];

        for(let ep of episodes) {
            let data = await this.getData(ep);
            eps.push(data);
        }

        let episodesModel = eps.map(ep => {
            return new Episodio(ep);
        });

        this.episodesView.update(episodesModel, charControl);

    }

    private async getData(url: string) : Promise<IEpisode> {
        let result = await fetch(url, {});
        return await result.json();
    }   

}