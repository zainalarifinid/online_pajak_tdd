const RULES = [
    {
        number: 3,
        string: "Foo"
    },
    {
        number: 5,
        string: "Bar"
    },
    {
        number: 7,
        string: "Qix"
    },
]

module.exports = class FooBarQix{

    checkDivisible(inputNumber){
        var result = "";
        for (var i = 0; i< RULES.length; i++){
            if(inputNumber%RULES[i]['number'] == 0){
                result+= RULES[i]['string'];
            }
        }
        return result;
    }

    checkContain(inputNumber){
        var result = "";
        var splitChar = inputNumber.toString().split("");
        for(var i=0; i<splitChar.length; i++){

            for (var j = 0; j< RULES.length; j++){
                if(splitChar[i] == RULES[j]['number'].toString()){
                    result+= RULES[j]['string'];
                }
            }
        }
        return result;
    }

    checkRules(inputNumber){
        var result = "";

        result += this.checkDivisible(inputNumber);
        
        result += this.checkContain(inputNumber);

        if(result == "") return inputNumber;
        return result;
    }

    print(inputNumber){
        return this.checkRules(inputNumber);
    }

}