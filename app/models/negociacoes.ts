import { Negociacao } from "./negociacao";

export class Negociacoes {
    private negociacoes: Array<Negociacao> = [];

    adicionar(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }

    list(): ReadonlyArray<Negociacao> {
        return this.negociacoes;
    }
}