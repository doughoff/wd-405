// Use a radius variable passed in to function call
var radius = 5;

// Calculate the area of a circle (pi * r2)
function calculateAreaOfCircle(radiusIn){
    return Math.PI * Math.pow(radiusIn,2);
}
console.log(calculateAreaOfCircle(radius)); // test

// Calculate the volume of a sphere ( 4/3 * pi * r3)
function calculateVolumeOfSphere(radiusIn){
    return 4/3 * Math.PI * Math.pow(radiusIn,3);
}
console.log(calculateVolumeOfSphere(radius));
