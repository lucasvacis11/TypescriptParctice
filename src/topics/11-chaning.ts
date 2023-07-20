export interface Passenger {
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name: 'Lucas'
}

const passenger2: Passenger = {
    name: 'Isabel',
    children: ['Lucas Jr', 'Pepito']
}

function printChildren(passenger: Passenger): void {
    const howManyChildren = passenger.children?.length || 0;
    console.log(passenger.name, howManyChildren);
}

printChildren(passenger1);