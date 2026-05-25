const removeFromArray = function(array,...a) {
    
    return array.filter(item => a.includes(item) == false )
};

// Do not edit below this line
module.exports = removeFromArray;
