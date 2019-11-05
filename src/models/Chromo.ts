export default class Chromo {

    private _id: number | string;
    private _result: string;
    private _score: number;

    constructor(id: number | string) {
        this._id = id;
        this._result = '';
        this._score;
    }

    get id(): number | string {
        return this._id;
    }

    get score(): number {
        return this._score;
    }

    get result(): string {
        return this._result;
    }

    set score(score: number) {
        this._score = score;
    }

    set result(result: string) {
        this._result = result;
    }
}