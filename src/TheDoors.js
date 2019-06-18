
module.exports = class TheDoors {
    constructor(countDoors = 100){
        this.maxDoors = countDoors;
        this.doors = this.initDoors();
    }

    initDoors() {
        var result = [];
        for (var i = 0; i < this.maxDoors; i++) {
            result[i] = "#";
        }
        return result;
    }

    visit(numOfVisit) {
        if (numOfVisit < 1) {    
            return this.doors.join("");
        }

        for(var j = 1; j <= numOfVisit; j++){
            for (var i=j-1; i < this.doors.length; i+=j){

                // if (j == 1) this.doors[i] = "@";
                if (this.doors[i] == "@") this.doors[i] = "#";
                else{
                    this.doors[i] = "@"; 
                }
            }
        }

        return this.doors.join("");
    }

} 