
export interface Product {
    description: string;
    price: number;
}

const phone: Product = {
    description: 'Nokia A2',
    price: 200
}

const tablet: Product = {
    description: 'iPad 16GB',
    price: 500
}


export interface taxCalculatorOptions {
    tax: number;
    products: Product[];
}



export function taxCalculator( options: taxCalculatorOptions ): [number, number] {
    
    let total = 0;

    const { tax, products } = options;

    products.forEach( ({ price }) => {
        total += price;
    })

    return [total, total * tax];
}

const shoppingCart = [phone, tablet]
const tax = 0.16;

const [ total, taxTotal ] = taxCalculator({
    products: shoppingCart,
    tax
})

console.log('Total', total);
console.log('Tax', taxTotal);




















export {

}