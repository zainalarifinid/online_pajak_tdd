const OPEN_BRACKET = '[';
const CLOSE_BRACKET = ']';

module.exports = class BalancedBracket {

    check(input){
        const splitInput = input.split('');
        const is1stCharInvalid = splitInput[0] == CLOSE_BRACKET;
        const isLastCharInvalid = splitInput[splitInput.length-1] == OPEN_BRACKET;
        if(is1stCharInvalid || isLastCharInvalid) return 'FAIL';
        if(splitInput.length % 2 !==0) return 'FAIL';

        let openBracket = 0;
        let closeBracket = 0;

        splitInput.map((bracket) => {
            if(bracket == OPEN_BRACKET) openBracket++;
            if(bracket == CLOSE_BRACKET) closeBracket++;
        });
        if(openBracket !== closeBracket) return 'FAIL';
        if(openBracket == closeBracket && splitInput.length !== 0) {
            return 'OK';
        }
        return '';
    }
}
