export class Character {
    constructor(id, name, gender, status, img, episodes = []) {
        this.id = id;
        this.name = name;
        this.gender = gender;
        this.status = status;
        this.img = img;
        this._episodes = episodes;
    }
    set img(value) {
        this._img = value;
    }
    get img() {
        return this._img;
    }
    get episodes() {
        return this._episodes;
    }
    set gender(value) {
        let generos = {
            'Female': "Feminino",
            "Male": "Masculino",
            "unknown": "Desconhecido"
        };
        this._gender = generos[value] || generos["unknown"];
    }
    get gender() {
        return this._gender;
    }
    set status(value) {
        let status = {
            "Alive": "Vivo",
            "Dead": "Morto",
            "unknown": "Desconhecido"
        };
        this._status = status[value] || status["unknown"];
    }
    get status() {
        return this._status;
    }
}
