const country = "Bangladesh";
const age = 52;
const isIndependent = true;
const student = {id: 121, class: 11, name: "agun"};
const friends = [12, 34,45, 234, 45];
function add(num1, num2){
    return num1 + num2;
}

console.log(typeof country);
console.log(typeof age);
console.log(typeof isIndependent);
console.log(typeof student);
console.log(typeof add);
// check array:
console.log(Array.isArray(friends));
// includes:
console.log(friends.includes(45));
// concatination
const newFriends = [23,34,45,56,67];
const allFriends  = newFriends.concat(friends);
console.log(allFriends);