// When to use:
// Exact equality: Never
// Absolute tolerance: Expected ~ 0.0
// Relative tolerance: Elsewhere
// https://github.com/gmarkall/PitfallsFP

function equal_absolute(a, b, eps = 1.0e-7) {
    return (Math.abs(a - b) < eps);
}

// relative tolerace when eps = 1.0e-x, correct digits is ~x
function equal_relative(a, b, eps = 1.0e-7) {
    m = Math.min(Math.abs(a), Math.abs(b));
    return (Math.abs(a - b) / m) < eps;
}

console.log();

console.log('Exact equality');
console.log((1.0 + 2.0) == 3.0);
console.log(2.0 == (Math.sqrt(2.0) ** 2.0));
console.log();
console.log('Absolute tolerance with * multiply');
console.log(equal_absolute(1.0 + 2.0, 3.0));
console.log(equal_absolute(2.0, Math.sqrt(2.0) * 2.0));
console.log();
console.log('Absolute tolerance with ** exponent');
console.log(equal_absolute(1.0 + 2.0, 3.0));
console.log(equal_absolute(2.0, Math.sqrt(2.0) ** 2.0));
console.log();
console.log('Absolute tolerance with choice of significant digits');
console.log(equal_absolute(2.0, Math.sqrt(2) ** 2, 1.0e-4));
console.log(equal_absolute(2.0, Math.sqrt(2) ** 2, 1.0e-16));
console.log('.00000001 equal to .00000002', equal_absolute(1.0e-8, 2.0e-8));
console.log();

console.log(equal_relative(1.0e-50, 0));
console.log();