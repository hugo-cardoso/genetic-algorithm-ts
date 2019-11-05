import AlphabeticUtils from './AlphabeticUtils';
import NumberUtils from './NumberUtils';

export default class SearchUtils {
    static verify(
        searched: string,
        actual: string,
        target: string
    ): string {
        return searched.split("").map((char, index) => char == "-" ? actual[index] : char == target[index] ? char : "-").join('');
    }

    static search(result: string): string {
        return result.split('').map(char => char !== "-" ? char : AlphabeticUtils.getLetterByIndex(
            NumberUtils.generateRandomNumber(32, 122)
        )).join('');
    }

    static calculateScore(result: string): number {
        return result.split("").filter(char => char !== "-").length;
    }
}