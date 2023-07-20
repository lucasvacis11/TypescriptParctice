// export class Person {
//     public name: string;
//     private age: number;

//     constructor( name: string, age: number ) {
//         this.name = name;
//         this.age = age;
//     }
// }

export class Person {
    constructor(
        public name: string,
        private age: number = 28
    ) {}
}

// export class Hero extends Person {
//     constructor(
//         public alterEgo: string,
//         public address: number,
//         public realName: string,
//     ){
//         super(realName, 21)
//     }
// }

export class Hero  {
    constructor(

        public person: Person,

        public alterEgo: string,
        public address: number,
        public realName: string,
    ){
        this.person = new Person(realName, 21)
    }
}

const tony = new Person('Peter', 35);
const ironman = new Hero( tony, 'Ironman', 123, 'Tony Stark')

console.log(ironman);