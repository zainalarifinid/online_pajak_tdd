module.exports = class StringCalculator {


    isNegative(splitParams){
        var getNegativeParam =  splitParams.filter(function(data, index){
            // console.log(data);
            return data < 0;
        });

        return getNegativeParam;
    }

    sum(params, delimiters) {
        var sum = 0;
        var splitParams = params.split(delimiters);
        var dataNegative = this.isNegative(splitParams);
        if( dataNegative.length == 0 ){
            for (var i = 0; i < splitParams.length; i++) {
                if(parseInt(splitParams[i]) < 1000){
                    sum += parseInt(splitParams[i]);
                }
            }
            return sum;    
        }else{
            return `negatives not allowed: ${dataNegative.join()}`
        }

    }

    add(params) {
        var process = [',', '\n'];
        if (params == "") return 0;
        var splitParams = params.split("");
        var isComma = (splitParams.indexOf(",") != -1);
        var isNewLine = (splitParams.indexOf('\n') != -1);
        var isNewDelimited = (splitParams[0] == "/" && splitParams[1] == "/" );
        var commaDelimiter = ",";
        var newLineDelimiter = "\n";
        // console.log(splitParams);
        if( isNewDelimited ){
            // console.log(splitParams);
            if(isComma) commaDelimiter = splitParams[2];
            if(isNewLine) newLineDelimiter = splitParams[2];
        }
        // console.log(splitParams, process, );
        
        if ( !isComma && !isNewLine && isNewDelimited ) return parseInt(params);
        if ( isComma  && !isNewLine ) {
            return this.sum(params, commaDelimiter);
        }
        // console.log(splitParams);
        if ( isNewLine  && !isComma ) {
            return this.sum(params, newLineDelimiter);
        }
        if ( isNewLine && isComma ) {
            var splitComma = params.split(",");
            var sumAll = 0;
            for(var i = 0; i< splitComma.length; i++){
                sumAll += this.add(splitComma[i]);
            }
            return sumAll;
        }        
    }

}