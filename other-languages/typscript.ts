let x = 1;
class Dog {
    private _name: string;

    get name: string {
        return this._name;
    }
    set name(name: string) {
        this._name = name;
    }
    public bark() {
        console.log('bark');
    }
}
let fido = new Dog();
fido.bark();