import { Product, taxCalculator } from './06-function-destructuring.ts'







const shoppingCart: Product[] = [

    {
        description: 'Phone 1',
        price: 100
    },
    {
        description: 'Phone 2',
        price: 200
    }

]



const [ total, taxTotal ] = taxCalculator({
    products: shoppingCart,
    tax: 0.16
})

console.log('Total', total);
console.log('Tax', taxTotal);











