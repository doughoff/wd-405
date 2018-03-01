"use strict";
var Dog = /** @class */ (function () {
    function Dog(name) {
        this._name = name;
    }
    Object.defineProperty(Dog.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dog.prototype, "misterName", {
        get: function () {
            return 'Mr. ' + this._name;
        },
        enumerable: true,
        configurable: true
    });
    Dog.prototype.bark = function () {
        console.log('bark');
    };
    return Dog;
}());
var fido = new Dog("Fido");
fido.bark();
console.log(fido.misterName);
