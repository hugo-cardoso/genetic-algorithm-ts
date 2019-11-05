import Chromos from '../models/Chromos';
import Chromo from '../models/Chromo';
import NumberUtils from './NumberUtils';

export default class ChromoUtils {

    static categorizeChromos(chromos: Chromos): Chromos {
        const categorizedChromos = new Chromos();
        
        chromos
            .list()
            .sort((a,b) => a.score > b.score ? -1 : 1)
            .forEach(chromo =>categorizedChromos.add(chromo));

        return categorizedChromos;
    }

    static generateRandomChromo(): Chromo {
        return new Chromo(NumberUtils.generateUId());
    }
};