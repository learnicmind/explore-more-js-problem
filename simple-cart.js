const shoppingCart = [
    {name: 'shoe', price: 1200},
    {name: 'shirt', price: 2000},
    {name: 'pant', price: 3000},
    {name: 'belt', price: 800},
]

function totalcost(products){
    let sum = 0;
    for(let i = 0; i < shoppingCart.length; i++){
        const product = products[i];
        sum = sum + product.price;
    }
    return sum;
}

const cost = totalcost(shoppingCart);
console.log('your total cos', cost);