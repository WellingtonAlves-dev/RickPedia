import { IEpisode } from "../Interfaces/Interfaces";

export default class Episodio {
    public id: number;
    public name: string;
    public temporada: string;

    constructor(episode: IEpisode) {
        this.id = episode.id;
        this.name = episode.name;
        this.temporada = episode.episode;
    } 

}