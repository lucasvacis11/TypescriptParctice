

let skills = ['Bash', 'Counter', 'Healing', 4000, true];
// let skills2: string[] = ['Bash', 'Counter', 'Healing', 4000, true];

// skills.push('Dark Magic');

// skills.push(100);

// console.log(skills);

interface Character {
    name: string;
    hpPoints: number;
    skills: string[];
    isAlive?: boolean;
}


const warrior: Character = {
    name: 'Legolas',
    hpPoints: 0,
    skills: ['Dash', 'Counter', 'Healing']
}

warrior.isAlive = true;

console.log(warrior);




















export {}