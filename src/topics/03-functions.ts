
function addNumbers ( a: number , b: number ): string {
    return `${a + b}`;
    
}

function multiply (firstNumber: number, secondNumber?:number, base: number = 2): number {
    return firstNumber * base;
    
}

interface Character {
    name: string;
    hpPoints: number;
    showHp: () => void;
}


const healCharacter = ( character: Character , amount:number ) : void => {
    character.hpPoints += amount;

}

const aragon: Character = {
    name: 'Aragon',
    hpPoints: 100,
    showHp() {
        console.log(` ${this.name} has ${this.hpPoints} hp points `);
        
    }
}
aragon.showHp();
healCharacter(aragon, 20);
aragon.showHp();
healCharacter(aragon, 200);
aragon.showHp();



// const result: number = addNumbers(1, 2);
// const result2: string = addNumbers(1, 2);
// const multiplyResult: number = multiply(2, 2);





export {

}