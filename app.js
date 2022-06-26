const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the dollar value
    return valueInDollar;
}

const fromDollartoYen = function(valueInDollar){
    // convert the given valueInDollar to Yen
    let valueInYen = valueInDollar * 106.58;
    //return the yen value
    return valueInYen;
}

const fromYentoPound = function(valueInYen){
    // convert the given valueInEuro to dollars
    let valueInPound = valueInYen * 0.006; //
    //return the pound value
    return valueInPound;
}

const sum =(a,b) => {
    return a + b
}

console.log(sum(7,3))

module.exports = {sum, fromEuroToDollar, fromYentoPound,fromDollartoYen};