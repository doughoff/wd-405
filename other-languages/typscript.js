"use strict";
var x = 1;
var Dog = /** @class */ (function () {
    function Dog() {
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
    Dog.prototype.bark = function () {
        console.log('bark');
    };
    return Dog;
}());
var fido = new Dog();
fido.bark();
