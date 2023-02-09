/*
*per chair wood = 3;
*per table wood = 10;
*per bed wood = 50;
*/ 

function woodCalculator(chairQuantity, tableQuantity, bedQuantity){
    const perchairWood = 3;
    const pertableWood = 10;
    const perbedWood = 50;

    const chairWood = chairQuantity * perchairWood;
    const tableWood = tableQuantity * pertableWood;
    const bedWood = bedQuantity * perbedWood;

    const totaleWood = chairWood + tableWood + bedWood;

    return totaleWood;
}

const result = woodCalculator(1, 1, 1);
console.log('total wood quantity: ', result);