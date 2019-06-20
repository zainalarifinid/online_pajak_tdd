
const ARITHMETIC_OPERATION = [ "+", "-", "/", "*" ];

class Calculation {

    parseOperation(splitInput, typeOperation, index){
        var number1 = splitInput[index-2];
        var number2 = splitInput[index-1];
        // replace operation index into result of operation arithmetic
        splitInput[index] = this.operation(typeOperation, number1, number2);
        // remove the element of number of operation arithmetic
        splitInput.splice(index-2, 2);
        // remove empty
        splitInput = this.reindexArray(splitInput);

        return splitInput;
        
    }

    operation(getOperation, number1, number2){
        var resultOperation = 0;
        if( getOperation == "+" ){
            resultOperation = this.sum(number1, number2);
        }else if( getOperation == "-" ){
            resultOperation = this.substract(number1, number2);
        }else if( getOperation == "/" ){
            resultOperation = this.divide(number1, number2);
        }else if( getOperation == "*" ){
            resultOperation = this.multiple(number1, number2);
        }

        return resultOperation;
    }

    sum(number1, number2){
        return parseInt(number1) + parseInt(number2);
    }
    substract(number1, number2){
        return parseInt(number1) - parseInt(number2);
    }

    divide(number1, number2){
        return parseInt(number1) / parseInt(number2);
    }

    multiple(number1, number2){
        return parseInt(number1) * parseInt(number2);
    }

}

module.exports = class RPNCalculator extends Calculation {

    fetchOperation(inputString){
        return String(inputString).split(" ").filter( (data) => {
            return ARITHMETIC_OPERATION.indexOf(data) !== -1;
        });
    }

    reindexArray(array){
        return array.filter( (data) => {
            return data!==null;
        } )
    }

    process(inputString){

        var getOperation = this.fetchOperation(inputString);
        var splitInput = inputString.split(" ");

        var index = 0;
        var resultMultipleProcess = 0;
        if(getOperation.length > 0){
            while(index < splitInput.length){
                var getOperation = this.fetchOperation(splitInput[index]);
                if(getOperation.length > 0){
                    resultMultipleProcess = this.parseOperation(splitInput, getOperation[0], index);
                    index = 0;
                }
                index++;
                
            }
            return resultMultipleProcess[0];
        }

        return parseInt(inputString.replace(/ /ig, ""));
    }

}
