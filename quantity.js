const shoppingCart = [
    {name: 'shoe', price: 1200, quatity: 2},
    {name: 'shirt', price: 2000, quatity: 3},
    {name: 'pant', price: 3000, quatity: 2},
    {name: 'belt', price: 800, quatity: 4},
]

function totalcost(products){
    let sum = 0;
    for(let i = 0; i < shoppingCart.length; i++){
        const product = products[i];
        const totalquantity = product.price * product.quatity;
        sum = sum + totalquantity;
    }
    return sum;
}

const cost = totalcost(shoppingCart);
console.log('your total cost', cost);