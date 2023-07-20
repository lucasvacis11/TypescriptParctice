function classDecoratior<T extends { new (...args:any[]): {} }>(
    constructor: T

){
    
    return class extends constructor{
        newProperty = "new property";
        hello = "override";
    }

}


@classDecoratior
export class SupreClass {

    public myProperty: string = 'ABC1234';

    print() {   
        console.log('Hola Mundo');
    }


}

console.log(SupreClass)


const myClass = new SupreClass();
console.log(myClass);