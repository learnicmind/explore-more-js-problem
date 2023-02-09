/*
*if ticket is <= 100 than per ticket price is 100tk
*if ticket is >= 200 than per ticket price is 90 tk
*if ticket is >= 300 than per ticket price is 70 tk.
*/ 

function ticketPrice(ticketQuantity){
    const first100Ticket = 100;
    const second100Ticket = 90;
    const third300OrMoreTicket = 70;

    if(ticketQuantity <= 100){
        const price = ticketQuantity * 100;
        return price;
    }
    else if (ticketQuantity <= 200){
        const first100Price = 100 * first100Ticket;
        const restTicketQuantity = ticketQuantity - 100;
        const restTicketPrice = restTicketQuantity * second100Ticket;
        const totalPrice = first100Price + restTicketPrice;
        return totalPrice;
    }
    else{
        const first100Price = 100 * first100Ticket;
        const second100Price = 100 * second100Ticket;
        const restTicketQuantity = ticketQuantity - 200;
        const restTicketPrice = restTicketQuantity * third300OrMoreTicket;
        const totalCost = first100Price + second100Price + restTicketPrice;
        return totalCost;
    }
}
const price = ticketPrice(300);
console.log('your total cost is:', price);

let sum=0; 
for( let i = 0; i<=3;i++){ 
sum = sum + i; 
}
console.log(sum)