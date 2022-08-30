export class Negociacao {
    #data;
    #quantidade;
    #valor;

    constructor(data, valor, quantidade) {
        this.#data = data;
        this.#quantidade = quantidade;
        this.#valor = valor;
    }
}

