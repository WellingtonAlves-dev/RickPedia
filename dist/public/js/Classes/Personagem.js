export class Character {
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
