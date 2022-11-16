export class Character {
    public readonly name: String;
    public readonly id: number;
    private _gender: string;
    private _status: string;
    private _img: String;
    private _episodes: string[];

    constructor(id: number, name: string, gender: string, status: string, img: string, episodes: string[] = []) {
        this.id = id;
        this.name = name;
        this.gender = gender;
        this.status = status;
        this.img = img;
        this._episodes = episodes;
    }
    set img(value: String) {
        this._img = value;
    }
    get img() {
        return this._img;
    }

    get episodes() {
        return this._episodes;
    }

    set gender(value: string) {
        let generos : {[key: string] : string} = {
            'Female': "Feminino",
            "Male": "Masculino",
            "unknown": "Desconhecido"
        };
        this._gender = generos[value] || generos["unknown"];
    }

    get gender() : string {
        return this._gender;
    }

    set status(value: string) {
        let status : {[key: string] : string} = {
            "Alive": "Vivo",
            "Dead": "Morto",
            "unknown": "Desconhecido"
        }
        this._status = status[value] || status["unknown"];
    }
    get status() : string {
        return this._status;
    }
}