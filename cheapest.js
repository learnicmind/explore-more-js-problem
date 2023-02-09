const phones = [
    {name: 'samsung', camera: 12, storage: '32gb', price: 32000, color: 'silver'},
    {name: 'nokia', camera: 12, storage: '32gb', price: 44000, color: 'silver'},
    {name: 'iphone', camera: 12, storage: '32gb', price: 89000, color: 'silver'},
    {name: 'xaomi', camera: 12, storage: '32gb', price: 21000, color: 'silver'},
    {name: 'onceplus', camera: 12, storage: '32gb', price: 52000, color: 'silver'},
    {name: 'vivo', camera: 12, storage: '32gb', price: 18000, color: 'silver'}
];

function cheapestPhone(phones){
    let cheapest = phones[0];
    for(let i = 0; i < phones.length; i++){
        const phone = phones[i];
        if (phone.price < cheapest.price){
            cheapest = phone;
        }
    }
    return cheapest;
}

const myPhone = cheapestPhone(phones);
console.log(myPhone);