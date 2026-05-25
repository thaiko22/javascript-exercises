const sumAll = function(lowerBound,upperBound) {
    if (Number.isInteger(lowerBound) && Number.isInteger(upperBound)){
        let totalSum = 0;
        if (lowerBound > upperBound){
            let a = upperBound
            upperBound = lowerBound
            lowerBound = a
        }
        if (lowerBound < 0) {
            return "ERROR"
        }
        while (lowerBound <= upperBound) {
        totalSum += lowerBound++;
        
        }
        return totalSum
    }
    else {
    return "ERROR"
    }
};

// Do not edit below this line
module.exports = sumAll;
