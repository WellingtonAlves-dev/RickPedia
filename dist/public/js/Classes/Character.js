export class Character {
    set img(value) {
        this._img = value;
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
    gerarCard() {
        return `
            <div class="col-lg-6 shadow card-background">
                <div class="row no-gutters">
                    <div class="col-4 card-image">
                        <img src="${this._img}"/>
                    </div>
                    <div class="col-8 p-3 text-white lg-1">
                        <h3>${this.name}</h3>
                        <p>Status: <strong>${this._status}</strong></p>
                        <p>Genero: <strong>${this.gender}</strong></p>
                    </div>
                </div>
            </div>
        `;
    }
}
