const friends = [23,34,45,56,67,89,90,12,23];

const partial = friends.splice(1,5,34,23,23);
console.log(partial);
console.log(friends);