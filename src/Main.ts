import Chromos from './models/Chromos';
import SearchUtils from './utils/SearchUtils';
import ChromoUtils from './utils/ChromoUtils';

export default class Main {

    limit: number;
    target: string;
    result: string;
    population: Chromos;
    finished: boolean;

    constructor(_limit: number, _target: string) {
        this.limit = _limit;
        this.target = _target;
        this.result = this.target.split("").map(() => "-").join("");
        this.population = new Chromos();
        this.finished = false;
        this.init();
    }

    init(): void {

        let index = 1;

        while(!this.finished) {

            if( index > 1 ) {
                this.population.add(this.population.list()[0]);
                this.population.clear();
            }

            for(let i = 0; i < (index > 1 ? (this.limit - 1) : this.limit); i++) {
                this.population.add(ChromoUtils.generateRandomChromo());
            }

             let newPopulation: Chromos = new Chromos;
             this.population.list().forEach((chromo, chromoIndex) => {

                 const chromoSearch: string = SearchUtils.search(this.result);
                 const chromoResult: string = SearchUtils.verify(chromoSearch, this.result, this.target);
                 const chromoScore: number = SearchUtils.calculateScore(chromoResult);

                 chromo.result = chromoResult;
                 chromo.score = chromoScore;

                 newPopulation.add(chromo);

                 console.log(`${ index }:${ chromoIndex } - ${ chromoSearch } - ${ chromo.id }`);
             });

             newPopulation = ChromoUtils.categorizeChromos(newPopulation);

             this.population = newPopulation;
             this.result = newPopulation.list()[0].result;
             
             if( this.result == this.target ) {
                this.finished = true;
                break;
             };
             
             index++;
        }

        console.log(`Palavra encontrada pelo individuo de nº ${ this.population.list()[0].id }`);
    }
};

new Main(5, "Hugo");