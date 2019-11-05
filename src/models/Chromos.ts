import Chromo from './Chromo';

export default class Chromos {

    chromos: Chromo[];

    constructor() {
        this.chromos = [];
    }

    list(): Chromo[] {
        return this.chromos;
    }

    clear(): void {
        this.chromos = [];
    }

    add(chromo: Chromo): void {
        this.chromos.push(chromo);
    }

    remove(chromo: Chromo): void {
        this.chromos = this.chromos.filter(listChromo => listChromo.id !== chromo.id);
    }
}