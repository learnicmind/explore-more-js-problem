const names = ["abul", "babul", "cabul", "abul", "babul", "cabul"];

function uniqueName(names){
    const uniqe = [];
    for (let i = 0; i < names.length; i++){
        const name = names[i];
        if(uniqe.includes(name) === false){
            uniqe.push(name);
        }
    }
    return uniqe;
}

const uniqueNames = uniqueName(names);
console.log(uniqueNames);