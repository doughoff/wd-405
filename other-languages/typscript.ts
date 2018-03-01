
class Dog {
    private _name: string;

    constructor(name : string){
        this._name = name;
    }
    get name(): string {
        return this._name;
    }
    set name(name: string) {
        this._name = name;
    }
    public bark() {
        console.log('bark');
    }
}

let fido = new Dog("Fido");
fido.bark();