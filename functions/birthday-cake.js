function makeCake(multiplier){
    // set multiplier to default value if no input
    multiplier = multiplier || 2;
    var cake = "a " + multiplier + " layer cake.";
    console.info("Made a cake with " + multiplier + " layers.");
    return cake;
}
function frost(cake){
    cake = cake || "a basic cake";
    var frostedCake = cake + " with frosting";
    console.info("Frosted the " + cake);
    return frostedCake;
}

function addCandlesTo(cake, numberOfCandles){
    cake = cake || "a basic cake";
    numberOfCandles = numberOfCandles || 21;
    var candledCake = cake + " with " + numberOfCandles  + " candles";
}

// use in browser only - values only
makeCake()
makeCake(2)
frostCake(aCake)
addCandlesTo(aFrostedCake)

// use for script in web page
console.log(makeCake(2));

frost(makeCake(3));
var aCake = makeCake(4);
var aFrostedCake = frostCake(aCake);
console.log(aFrostedCake);

var birthdayCake = addCandlesTo(aFrostedCake);
console.log(birthdayCake);