// geometry-functions.js

//Calculate the area of a circle (pi * r2)
function calcAreaOfCircle(radius) {
    // setup
    if (!radius) {
        console.info('Using default value of 5');
    }
    var r = radius || 5;
    // body
    var area = Math.PI * Math.pow(r, 2);
    // cleanup & return
    return area;
}
//--------------------------------------- tests
console.log(calcAreaOfCircle());
console.log(calcAreaOfCircle(2));


//Calculate the volume of a sphere ( 4/3 * pi * r3)
function calcVolumeOfCircle(radius) {
    // setup
    if (!radius) {
        console.info('Using default value of 5');
    }
    var r = radius || 5;
    // body
    var volume = 4 / 3 * Math.PI * Math.pow(r, 3);
    // cleanup & return
    return volume;
}
//--------------------------------------- tests
console.log(calcVolumeOfCircle());
console.log(calcVolumeOfCircle(2));
